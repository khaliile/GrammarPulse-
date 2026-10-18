// Audio synthesis engine using Web Audio API and Native English TTS
// Integrates with Electron native desktop API to use Microsoft Zira (English)
// even on French Windows OS, with fallbacks for browser usage.

class SoundEffects {
  constructor() {
    this.ctx = null;
    this.enabled = true;
    this.currentAudio = null;
    this.cache = new Map();
    this.piperAvailable = null;
    this.piperCheckTime = 0;
    this.initPiperProbe();
  }

  initPiperProbe() {
    if (typeof window === 'undefined') return;
    const probe = async () => {
      try {
        const res = await fetch('http://127.0.0.1:8100/health', { signal: AbortSignal.timeout(1200) });
        if (res.ok) {
          this.piperAvailable = true;
          this.piperCheckTime = Date.now();
          return true;
        }
      } catch {}
      return false;
    };
    probe();
    let attempts = 0;
    const timer = setInterval(async () => {
      attempts++;
      if (this.piperAvailable || attempts > 15) {
        clearInterval(timer);
      } else {
        await probe();
      }
    }, 1200);
  }

  initContext() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.ctx = new AudioContext();
      }
    }
  }

  setEnabled(val) {
    this.enabled = val;
    if (!val) {
      this.stopSpeech();
    }
  }

  playSuccess() {
    if (!this.enabled) return;
    try {
      this.initContext();
      if (!this.ctx) return;
      if (this.ctx.state === 'suspended') this.ctx.resume();

      const now = this.ctx.currentTime;
      const osc1 = this.ctx.createOscillator();
      const osc2 = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc1.type = 'sine';
      osc2.type = 'triangle';

      osc1.frequency.setValueAtTime(523.25, now); // C5
      osc1.frequency.exponentialRampToValueAtTime(659.25, now + 0.1); // E5
      osc1.frequency.exponentialRampToValueAtTime(783.99, now + 0.22); // G5

      osc2.frequency.setValueAtTime(261.63, now); // C4
      osc2.frequency.exponentialRampToValueAtTime(329.63, now + 0.1);

      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

      osc1.connect(gain);
      osc2.connect(gain);
      gain.connect(this.ctx.destination);

      osc1.start(now);
      osc2.start(now);
      osc1.stop(now + 0.35);
      osc2.stop(now + 0.35);
    } catch {
      // Audio fallback silent
    }
  }

  playError() {
    if (!this.enabled) return;
    try {
      this.initContext();
      if (!this.ctx) return;
      if (this.ctx.state === 'suspended') this.ctx.resume();

      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(200, now);
      osc.frequency.exponentialRampToValueAtTime(130, now + 0.2);

      gain.gain.setValueAtTime(0.1, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.25);
    } catch {
      // Audio fallback silent
    }
  }

  playClick() {
    if (!this.enabled) return;
    try {
      this.initContext();
      if (!this.ctx) return;
      if (this.ctx.state === 'suspended') this.ctx.resume();

      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(800, now);
      osc.frequency.exponentialRampToValueAtTime(400, now + 0.04);

      gain.gain.setValueAtTime(0.05, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.04);
    } catch {
      // Fallback silent
    }
  }

  playComplete() {
    if (!this.enabled) return;
    try {
      this.initContext();
      if (!this.ctx) return;
      if (this.ctx.state === 'suspended') this.ctx.resume();

      const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
      notes.forEach((freq, index) => {
        const now = this.ctx.currentTime + index * 0.1;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now);

        gain.gain.setValueAtTime(0.12, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now);
        osc.stop(now + 0.35);
      });
    } catch {
      // Fallback
    }
  }

  stopSpeech() {
    if (typeof window !== 'undefined') {
      if (window.desktopAPI?.stopSpeech) {
        try { window.desktopAPI.stopSpeech(); } catch {}
      }
      if (window.speechSynthesis) {
        try { window.speechSynthesis.cancel(); } catch {}
      }
      if (this.currentAudio) {
        try {
          this.currentAudio.pause();
          this.currentAudio.currentTime = 0;
        } catch {}
        this.currentAudio = null;
      }
    }
  }

  /**
   * Speak English text with native pronunciation
   */
  async speak(text, slow = false) {
    if (!text || typeof text !== 'string') return;
    this.stopSpeech();

    const clean = text.replace(/[*_#`~[\]]/g, '').trim();
    if (!clean) return;

    const cacheKey = `${clean}_${slow ? 'slow' : 'normal'}`;

    // Instant replay from audio memory cache
    if (this.cache.has(cacheKey)) {
      try {
        const audioUrl = this.cache.get(cacheKey);
        const audio = new Audio(audioUrl);
        this.currentAudio = audio;
        await audio.play();
        return;
      } catch {
        this.cache.delete(cacheKey);
      }
    }

    // --- STRATEGY 1: Local Piper / Neural TTS (port 8100) ---
    // Fast check: allow synthesis unless it failed within the last 6 seconds
    const now = Date.now();
    const canTryPiper = this.piperAvailable !== false || (now - this.piperCheckTime > 6000);

    if (canTryPiper) {
      try {
        const piperUrl = `http://127.0.0.1:8100/tts`;
        // Generous 6000ms timeout allows neural model to generate full sentences without cutoff
        const res = await fetch(piperUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ text: clean, voice: 'en_US-amy-medium', slow }),
          signal: AbortSignal.timeout(6000),
        });

        if (res.ok) {
          this.piperAvailable = true;
          this.piperCheckTime = now;
          const blob = await res.blob();
          const audioUrl = URL.createObjectURL(blob);

          // Keep cache size bounded to last 150 clips
          if (this.cache.size > 150) {
            const firstKey = this.cache.keys().next().value;
            const oldUrl = this.cache.get(firstKey);
            URL.revokeObjectURL(oldUrl);
            this.cache.delete(firstKey);
          }
          this.cache.set(cacheKey, audioUrl);

          const audio = new Audio(audioUrl);
          this.currentAudio = audio;
          await audio.play();
          return;
        } else {
          this.piperAvailable = false;
          this.piperCheckTime = now;
        }
      } catch {
        this.piperAvailable = false;
        this.piperCheckTime = now;
      }
    }

    // --- STRATEGY 2: Electron Native SAPI TTS (Microsoft Zira - en-US) ---
    // Instantaneous, 0ms latency, native American English on Windows
    if (typeof window !== 'undefined' && window.desktopAPI?.speak) {
      try {
        const spoke = await window.desktopAPI.speak(clean, slow);
        if (spoke) return;
      } catch (err) {
        console.warn('[Audio] Desktop native speak fallback:', err);
      }
    }

    // --- STRATEGY 3: Browser SpeechSynthesis with English voice preference ---
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      try {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(clean);
        utterance.lang = 'en-US';
        utterance.rate = slow ? 0.78 : 0.95;
        utterance.pitch = 1.0;

        const voices = window.speechSynthesis.getVoices() || [];
        const englishVoice = voices.find(
          (v) => (v.lang && v.lang.startsWith('en')) || (v.name && v.name.toLowerCase().includes('english'))
        );
        if (englishVoice) {
          utterance.voice = englishVoice;
        }

        window.speechSynthesis.speak(utterance);
      } catch (err) {
        console.warn('[Audio] SpeechSynthesis error:', err);
      }
    }
  }
}

export const soundManager = new SoundEffects();
