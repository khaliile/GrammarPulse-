import React from 'react';
import { 
  Sparkles, 
  Volume2, 
  VolumeX, 
  Printer, 
  Flame, 
  Award 
} from 'lucide-react';

export default function Header({ 
  soundEnabled, 
  onToggleSound, 
  xp, 
  streak,
  onOpenResumePrint
}) {
  return (
    <header className="desktop-header">
      {/* Brand & Module */}
      <div className="app-brand no-drag">
        <div className="app-logo-badge">
          <Sparkles size={22} />
        </div>
        <div>
          <h1 className="brand-title">GrammarPulse</h1>
          <p className="brand-subtitle">English Studio • Present Simple</p>
        </div>
      </div>

      {/* Gamification Stats */}
      <div className="header-center no-drag">
        <div className="stats-pill" title="Mastery Experience Points">
          <Award size={16} className="xp" />
          <span>{xp} XP</span>
        </div>
        <div className="stats-pill" title="Learning Streak">
          <Flame size={16} className="streak" />
          <span>{streak} Day Streak</span>
        </div>
      </div>

      {/* Actions */}
      <div className="header-actions no-drag">
        <button 
          className="action-btn" 
          onClick={onToggleSound} 
          title={soundEnabled ? "Mute Sound Effects" : "Enable Sound Effects"}
          aria-label="Toggle Sound"
        >
          {soundEnabled ? <Volume2 size={18} /> : <VolumeX size={18} />}
        </button>

        <button 
          className="action-btn" 
          onClick={onOpenResumePrint} 
          title="Print / Save Cheat-Sheet PDF"
          aria-label="Print Cheat-Sheet"
        >
          <Printer size={18} />
        </button>
      </div>
    </header>
  );
}
