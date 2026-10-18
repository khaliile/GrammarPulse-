const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('desktopAPI', {
  platform: process.platform,
  isElectron: true,
  appVersion: '1.0.0',
  speak: (text, slow) => ipcRenderer.invoke('desktop:speak', text, slow),
  stopSpeech: () => ipcRenderer.invoke('desktop:stop-speech'),
  getTtsStatus: () => ipcRenderer.invoke('desktop:get-tts-status'),
});

