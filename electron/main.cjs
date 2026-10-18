const { app, BrowserWindow, shell, ipcMain } = require('electron');
const path = require('path');
const { spawn } = require('child_process');

let mainWindow;
let ttsProcess = null;

// Initialize native Windows SAPI TTS with Microsoft Zira (English)
function initNativeTTS() {
  if (process.platform !== 'win32') return;

  try {
    ttsProcess = spawn('powershell', ['-NoProfile', '-Command', '-'], {
      stdio: ['pipe', 'pipe', 'pipe'],
      windowsHide: true,
    });

    ttsProcess.stdin.write(`
Add-Type -AssemblyName System.Speech
$global:synth = New-Object System.Speech.Synthesis.SpeechSynthesizer
try {
  $global:synth.SelectVoice('Microsoft Zira Desktop')
} catch {
  try {
    $global:synth.SelectVoiceByHints('Female', 'en-US')
  } catch {}
}
\n`);

    ttsProcess.on('error', (err) => {
      console.warn('Native TTS process error:', err.message);
      ttsProcess = null;
    });

    ttsProcess.on('exit', () => {
      ttsProcess = null;
    });
  } catch (err) {
    console.warn('Failed to start native TTS process:', err.message);
    ttsProcess = null;
  }
}

function speakNative(text, slow = false) {
  if (!ttsProcess || !ttsProcess.stdin || !ttsProcess.stdin.writable) {
    initNativeTTS();
  }
  if (!ttsProcess || !ttsProcess.stdin) return false;

  try {
    // Sanitize string to prevent command injection in powershell stdio
    const safeText = text.replace(/[`"$'\\]/g, ' ').replace(/[\r\n]+/g, ' ').trim();
    if (!safeText) return false;

    const rate = slow ? -2 : 0;
    ttsProcess.stdin.write(`
try {
  $global:synth.SpeakAsyncCancelAll()
  $global:synth.Rate = ${rate}
  $global:synth.SpeakAsync("${safeText}")
} catch {}
\n`);
    return true;
  } catch (err) {
    console.warn('Native speak error:', err.message);
    return false;
  }
}

function stopNative() {
  if (ttsProcess && ttsProcess.stdin && ttsProcess.stdin.writable) {
    try {
      ttsProcess.stdin.write(`try { $global:synth.SpeakAsyncCancelAll() } catch {}\n`);
    } catch {}
  }
}

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1280,
    height: 840,
    minWidth: 960,
    minHeight: 650,
    title: 'GrammarPulse — English 14 Tenses Studio',
    backgroundColor: '#0c0f17',
    icon: path.join(__dirname, 'icon.ico'),
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.cjs'),
      spellcheck: true,
    },
    titleBarStyle: 'default',
    autoHideMenuBar: true,
  });

  const distFile = path.join(__dirname, '../dist/index.html');

  // Load production desktop bundle directly from local files
  if (process.env.VITE_DEV_SERVER_URL) {
    mainWindow.loadURL(process.env.VITE_DEV_SERVER_URL).catch(() => {
      mainWindow.loadFile(distFile);
    });
  } else {
    mainWindow.loadFile(distFile).catch((err) => {
      console.error('Failed to load application:', err);
    });
  }

  // Open external links in default OS browser
  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    if (url.startsWith('http:') || url.startsWith('https:')) {
      shell.openExternal(url);
    }
    return { action: 'deny' };
  });

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

// IPC Handlers for Native Speech
ipcMain.handle('desktop:speak', async (event, text, slow) => {
  return speakNative(text, slow);
});

ipcMain.handle('desktop:stop-speech', async () => {
  stopNative();
  return true;
});

ipcMain.handle('desktop:get-tts-status', async () => {
  return new Promise((resolve) => {
    const http = require('http');
    const req = http.get('http://127.0.0.1:8100/health', (res) => {
      let raw = '';
      res.on('data', (chunk) => { raw += chunk; });
      res.on('end', () => {
        try {
          resolve({ ok: res.statusCode === 200, data: JSON.parse(raw) });
        } catch {
          resolve({ ok: res.statusCode === 200 });
        }
      });
    });
    req.on('error', () => resolve({ ok: false }));
    req.setTimeout(1200, () => {
      req.destroy();
      resolve({ ok: false });
    });
  });
});

let piperProcess = null;

function freePort8100() {
  if (process.platform !== 'win32') return;
  try {
    const { execSync } = require('child_process');
    const out = execSync('netstat -ano | findstr :8100', {
      encoding: 'utf-8',
      stdio: ['ignore', 'pipe', 'ignore'],
    });
    const lines = out.trim().split('\n');
    for (const line of lines) {
      const parts = line.trim().split(/\s+/);
      const pid = parseInt(parts[parts.length - 1], 10);
      if (pid && pid > 0 && pid !== process.pid) {
        try {
          execSync(`taskkill /F /T /PID ${pid}`, { stdio: 'ignore' });
        } catch {}
      }
    }
  } catch {}
}

let isStarting = false;

function spawnPiperServer(pyExe, serverScript, projectDir) {
  if (piperProcess && !piperProcess.killed) return;
  freePort8100();
  const fs = require('fs');
  const logPath = path.join(projectDir, 'tts_server.log');
  let logFd = null;
  try {
    logFd = fs.openSync(logPath, 'a');
  } catch {}

  try {
    const stdioOpt = logFd !== null ? ['ignore', logFd, logFd] : 'ignore';
    piperProcess = spawn(pyExe, ['-u', serverScript], {
      cwd: projectDir,
      windowsHide: true,
      stdio: stdioOpt,
    });

    piperProcess.on('error', (err) => {
      console.warn('[TTS] Failed to spawn Piper server:', err.message);
      piperProcess = null;
      isStarting = false;
    });

    piperProcess.on('exit', (code, signal) => {
      console.log(`[TTS] Piper server exited (code: ${code}, signal: ${signal})`);
      piperProcess = null;
      isStarting = false;
    });

    console.log('[TTS] Successfully launched Piper neural TTS server PID:', piperProcess.pid);
  } catch (e) {
    console.warn('[TTS] Could not launch Piper server:', e.message);
    piperProcess = null;
    isStarting = false;
  }
}

function startPiperServer() {
  const projectDir = path.resolve(__dirname, '..');
  const pyExe = path.join(projectDir, 'tts-env', 'Scripts', 'python.exe');
  const serverScript = path.join(projectDir, 'tts_server.py');
  const fs = require('fs');

  if (!fs.existsSync(pyExe) || !fs.existsSync(serverScript)) {
    console.warn('[TTS] Python environment or tts_server.py not found at:', { pyExe, serverScript });
    return;
  }

  const trigger = () => {
    if (isStarting || (piperProcess && !piperProcess.killed)) return;
    isStarting = true;
    spawnPiperServer(pyExe, serverScript, projectDir);
  };

  const http = require('http');
  const req = http.get('http://127.0.0.1:8100/health', (res) => {
    if (res.statusCode === 200) {
      console.log('[TTS] Local neural server already running and healthy.');
      return;
    }
    trigger();
  });

  req.setTimeout(1000, () => {
    req.destroy();
    trigger();
  });

  req.on('error', () => {
    trigger();
  });
}


function cleanupAllProcesses() {
  if (piperProcess && piperProcess.pid) {
    try {
      if (process.platform === 'win32') {
        const { execSync } = require('child_process');
        execSync(`taskkill /F /T /PID ${piperProcess.pid}`, { stdio: 'ignore' });
      } else {
        piperProcess.kill('SIGTERM');
      }
    } catch {}
    piperProcess = null;
  }
  if (ttsProcess) {
    try {
      ttsProcess.stdin.end();
      ttsProcess.kill();
    } catch {}
    ttsProcess = null;
  }
}

app.whenReady().then(() => {
  startPiperServer();
  initNativeTTS();
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('before-quit', cleanupAllProcesses);
app.on('will-quit', cleanupAllProcesses);

app.on('window-all-closed', () => {
  cleanupAllProcesses();
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

