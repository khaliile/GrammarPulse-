import React, { useState } from 'react';
import { 
  Clock, 
  Globe, 
  Home, 
  Calendar, 
  Heart, 
  Radio, 
  Volume2, 
  AlertCircle, 
  Sparkles,
  CheckCircle,
  HelpCircle
} from 'lucide-react';
import { PRESENT_SIMPLE_DATA } from '../../data/presentSimpleData';
import { soundManager } from '../../utils/audio';

const ICONS_MAP = {
  Clock,
  Globe,
  Home,
  Calendar,
  Heart,
  Radio,
};

export default function UseCasesView({ tenseData, tenseMeta }) {
  const data = tenseData || PRESENT_SIMPLE_DATA;
  const meta = tenseMeta || data.meta;
  const { useCases } = data;
  const [selectedCaseId, setSelectedCaseId] = useState(useCases[0]?.id || 'habits');
  const [stativeCategory, setStativeCategory] = useState(0);

  // Sync selectedCaseId when tense changes
  React.useEffect(() => {
    if (useCases && useCases.length > 0) {
      setSelectedCaseId(useCases[0].id);
    }
  }, [data]);

  const activeCase = useCases.find((c) => c.id === selectedCaseId) || useCases[0] || {};
  const IconComponent = ICONS_MAP[activeCase.icon] || Sparkles;

  const handleSpeak = (text) => {
    soundManager.speak(text);
  };

  return (
    <div className="content-max-width">
      {/* Header */}
      <div className="section-hero">
        <span className="section-tag" style={{ color: meta.color }}>
          <Sparkles size={14} /> Module 02: Full Case Spectrum • {meta.title}
        </span>
        <h2>When & Why We Use {meta.title}</h2>
        <p>
          English speakers deploy {meta.title} in {useCases.length} distinct pedagogical environments. 
          Select any case below to unpack its mechanics, psychological nuance, and native examples.
        </p>
      </div>

      {/* Case Navigator Pill Bar */}
      <div className="controls-row" style={{ marginBottom: '24px' }}>
        {useCases.map((c) => {
          const CaseIcon = ICONS_MAP[c.icon] || Sparkles;
          const isSelected = selectedCaseId === c.id;
          const displayTitle = c.title.includes('.') ? c.title.split('.')[1].trim() : c.title;
          return (
            <button
              key={c.id}
              className={`selector-chip ${isSelected ? 'selected' : ''}`}
              onClick={() => {
                soundManager.playClick();
                setSelectedCaseId(c.id);
              }}
              style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
            >
              <CaseIcon size={16} />
              <span>{displayTitle}</span>
            </button>
          );
        })}
      </div>

      {/* Active Case Deep Dive Card */}
      <div className="glass-card" style={{ padding: '36px', marginBottom: '32px', borderTop: '4px solid var(--indigo-500)' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '20px', flexWrap: 'wrap', gap: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ 
              width: '52px', 
              height: '52px', 
              borderRadius: 'var(--radius-md)', 
              background: 'rgba(99, 102, 241, 0.15)', 
              color: 'var(--indigo-500)', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center' 
            }}>
              <IconComponent size={28} />
            </div>
            <div>
              <span style={{ fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--indigo-500)', fontWeight: '700' }}>
                Case Study • {activeCase.tag}
              </span>
              <h3 style={{ fontSize: '1.6rem', marginTop: '2px' }}>{activeCase.title}</h3>
            </div>
          </div>
        </div>

        {/* Pedagogical Explanation */}
        <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--text-main)', marginBottom: '24px' }}>
          {activeCase.explanation}
        </p>

        {/* Real-world Sentence Exemplars */}
        <h4 style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--text-muted)', marginBottom: '14px' }}>
          Authentic Sentences in Context:
        </h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '28px' }}>
          {activeCase.examples.map((ex, idx) => (
            <div 
              key={idx} 
              style={{ 
                background: 'var(--bg-input)', 
                border: '1px solid var(--border-subtle)', 
                padding: '16px 20px', 
                borderRadius: 'var(--radius-md)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '12px'
              }}
            >
              <div>
                <div style={{ fontSize: '1.1rem', fontWeight: '600', color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <CheckCircle size={18} color="var(--emerald-500)" />
                  <span>{ex.sentence || ex.en || (typeof ex === 'string' ? ex : '')}</span>
                </div>
                {(ex.translation || ex.focus) && (
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginLeft: '26px', marginTop: '4px' }}>
                    {ex.translation && <span>Context: {ex.translation}</span>}
                    {ex.translation && ex.focus && ' • '}
                    {ex.focus && <span>Focus: <span style={{ color: 'var(--amber-400)', fontWeight: '600' }}>{ex.focus}</span></span>}
                  </div>
                )}
              </div>
              <button 
                className="audio-pronounce-btn"
                onClick={() => handleSpeak(ex.sentence)}
                title="Pronounce this sentence"
              >
                <Volume2 size={14} /> Listen
              </button>
            </div>
          ))}
        </div>

        {/* Stative Verb Special Explorer if active case is Stative */}
        {activeCase.stativeVerbCategories && (
          <div style={{ background: 'var(--bg-card-hover)', border: '1px solid var(--border-medium)', borderRadius: 'var(--radius-lg)', padding: '24px', marginBottom: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
              <Heart size={20} color="var(--rose-500)" />
              <h4 style={{ fontSize: '1.1rem' }}>The Stative Verb Sanctuary (State Verbs)</h4>
            </div>
            <p style={{ fontSize: '0.88rem', marginBottom: '16px' }}>
              These verbs describe an inner state, perception, or emotion. They naturally anchor into the Present Simple:
            </p>

            <div className="tabs-segmented" style={{ marginBottom: '16px' }}>
              {activeCase.stativeVerbCategories.map((cat, idx) => (
                <button
                  key={idx}
                  className={`tab-pill ${stativeCategory === idx ? 'active' : ''}`}
                  onClick={() => setStativeCategory(idx)}
                >
                  {cat.category}
                </button>
              ))}
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {(activeCase.stativeVerbCategories[stativeCategory]?.verbs || []).map((verb, idx) => (
                <span 
                  key={idx} 
                  style={{ 
                    background: 'var(--bg-input)', 
                    padding: '8px 14px', 
                    borderRadius: 'var(--radius-md)', 
                    border: '1px solid var(--border-glow)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    color: 'var(--cyan-400)',
                    cursor: 'pointer'
                  }}
                  onClick={() => handleSpeak(`I ${verb}`)}
                  title="Click to hear in sample context"
                >
                  {verb}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Teacher's Master Insight Box */}
        <div className="feedback-box success" style={{ marginTop: '16px' }}>
          <AlertCircle size={22} style={{ flexShrink: 0 }} />
          <div>
            <div style={{ fontWeight: '700', fontSize: '0.95rem', marginBottom: '4px' }}>Teacher's Pro Tip</div>
            <div style={{ fontSize: '0.9rem', lineHeight: '1.5' }}>
              {activeCase.teacherNote}
            </div>
          </div>
        </div>

      </div>

      {/* Grid of All Cases Summary */}
      <h3 style={{ fontSize: '1.25rem', marginBottom: '16px' }}>All 6 Cases at a Glance</h3>
      <div className="card-grid">
        {useCases.map((c) => {
          const CaseIcon = ICONS_MAP[c.icon] || Sparkles;
          return (
            <div 
              key={c.id} 
              className="glass-card" 
              style={{ cursor: 'pointer', borderColor: selectedCaseId === c.id ? 'var(--indigo-500)' : 'var(--border-subtle)' }}
              onClick={() => {
                soundManager.playClick();
                setSelectedCaseId(c.id);
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <CaseIcon size={20} color="var(--indigo-500)" />
                <h4 style={{ fontSize: '1.05rem' }}>{c.title}</h4>
              </div>
              <p style={{ fontSize: '0.88rem', marginBottom: '12px' }}>{c.summary}</p>
              <span style={{ fontSize: '0.78rem', color: 'var(--cyan-400)', fontWeight: '700' }}>
                Click to explore case →
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
