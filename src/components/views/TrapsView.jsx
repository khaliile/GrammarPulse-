import React from 'react';
import { AlertTriangle, Sparkles, XCircle, CheckCircle2, Volume2, ShieldAlert } from 'lucide-react';
import { PRESENT_SIMPLE_DATA } from '../../data/presentSimpleData';
import { soundManager } from '../../utils/audio';

export default function TrapsView({ onNavigateToExercises, tenseData, tenseMeta }) {
  const data = tenseData || PRESENT_SIMPLE_DATA;
  const meta = tenseMeta || data.meta;
  const commonTraps = data.commonTraps || PRESENT_SIMPLE_DATA.commonTraps;

  const handleSpeak = (text) => {
    soundManager.speak(text);
  };

  return (
    <div className="content-max-width">
      {/* Header */}
      <div className="section-hero">
        <span className="section-tag" style={{ borderColor: meta.accentColor }}>
          <Sparkles size={14} /> {meta.name} • Module 06: Error Inoculation
        </span>
        <h2>The {commonTraps.length} Classic Pitfalls & How to Avoid Them</h2>
        <p>
          Master the nuance of <strong>{meta.name}</strong>. More than 80% of grammar errors in ESL exams stem from these specific traps. 
          Study them carefully so you never surrender points on easy questions.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '24px', marginBottom: '32px' }}>
        {commonTraps.map((trap, idx) => (
          <div key={idx} className="glass-card" style={{ borderLeft: '4px solid var(--rose-500)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
              <ShieldAlert size={20} color="var(--rose-500)" />
              <h3 style={{ fontSize: '1.15rem' }}>{trap.title}</h3>
            </div>

            {/* Bad Sentence */}
            <div style={{ 
              background: 'rgba(244, 63, 94, 0.1)', 
              border: '1px solid rgba(244, 63, 94, 0.25)', 
              borderRadius: 'var(--radius-md)', 
              padding: '12px 16px', 
              marginBottom: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <XCircle size={18} color="var(--rose-500)" style={{ flexShrink: 0 }} />
                <span style={{ textDecoration: 'line-through', color: 'var(--rose-500)', fontWeight: '600' }}>
                  {trap.bad}
                </span>
              </div>
            </div>

            {/* Good Sentence */}
            <div style={{ 
              background: 'rgba(16, 185, 129, 0.1)', 
              border: '1px solid rgba(16, 185, 129, 0.25)', 
              borderRadius: 'var(--radius-md)', 
              padding: '12px 16px', 
              marginBottom: '14px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={18} color="var(--emerald-500)" style={{ flexShrink: 0 }} />
                <span style={{ color: 'var(--emerald-400)', fontWeight: '700' }}>
                  {trap.good}
                </span>
              </div>
              <button className="audio-pronounce-btn" onClick={() => handleSpeak(trap.good)}>
                <Volume2 size={12} />
              </button>
            </div>

            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              <strong>The Remedy: </strong> {trap.explanation}
            </p>
          </div>
        ))}
      </div>

      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <button className="btn-primary" onClick={onNavigateToExercises}>
          Test Yourself in the Error Detective Practice Studio ➔
        </button>
      </div>
    </div>
  );
}
