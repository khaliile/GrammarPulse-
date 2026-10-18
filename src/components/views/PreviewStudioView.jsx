import React, { useState } from 'react';
import { 
  BookOpen, 
  Sparkles, 
  Volume2, 
  AlertCircle, 
  CheckCircle2, 
  XCircle, 
  Layers, 
  Code2, 
  Compass, 
  ArrowRight,
  GitFork,
  ChevronRight,
  Award
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { soundManager } from '../../utils/audio';
import { TENSES_DATA, getChapterData } from '../../data/chaptersData';

export default function PreviewStudioView({ 
  activeTense, 
  onSelectTense, 
  onNavigateToSection,
  tenseData,
  tenseMeta
}) {
  // Current chapter data derived from activeTense or fallback
  const chapter = getChapterData(activeTense);

  // Local quiz state
  const [selectedOpt, setSelectedOpt] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  // Reset quiz state when active chapter changes
  const [prevTenseId, setPrevTenseId] = useState(activeTense);
  if (prevTenseId !== activeTense) {
    setPrevTenseId(activeTense);
    setSelectedOpt(null);
    setSubmitted(false);
  }

  const handleOptionClick = (idx) => {
    if (submitted) return;
    soundManager.playClick();
    setSelectedOpt(idx);
    setSubmitted(true);

    if (idx === chapter.miniQuiz.correct) {
      soundManager.playSuccess();
      try {
        confetti({ particleCount: 60, spread: 60, origin: { y: 0.6 } });
      } catch {}
    } else {
      soundManager.playError();
    }
  };

  const handleSwitchTense = (tenseId) => {
    soundManager.playClick();
    if (onSelectTense) {
      onSelectTense(tenseId);
    }
  };

  return (
    <div className="view-container preview-studio-page-view" style={{ animation: 'fadeIn 0.25s ease-out' }}>
      {/* Chapter Selection Bar */}
      <div 
        className="studio-tense-pills-bar"
        style={{
          display: 'flex',
          gap: '8px',
          overflowX: 'auto',
          paddingBottom: '8px',
          marginBottom: '20px',
          scrollbarWidth: 'thin'
        }}
      >
        {TENSES_DATA.map((t) => {
          const isActive = t.id === activeTense;
          return (
            <button
              key={t.id}
              onClick={() => handleSwitchTense(t.id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '6px 14px',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.8rem',
                fontWeight: isActive ? '700' : '600',
                background: isActive ? t.color : 'rgba(255, 255, 255, 0.05)',
                color: isActive ? '#ffffff' : 'var(--text-secondary)',
                border: `1px solid ${isActive ? t.color : 'var(--border-subtle)'}`,
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                transition: 'all var(--transition-fast)'
              }}
            >
              <span 
                style={{
                  width: '7px',
                  height: '7px',
                  borderRadius: '50%',
                  background: isActive ? '#ffffff' : t.color
                }} 
              />
              {t.title.split('. ')[1] || t.title}
            </button>
          );
        })}
      </div>

      {/* Main Chapter Hero Header Banner */}
      <header 
        className="chapter-hero-banner card"
        style={{
          borderTop: `4px solid ${chapter.color}`,
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          padding: '24px 28px',
          background: `linear-gradient(135deg, rgba(255, 255, 255, 0.03), ${chapter.color}10)`
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div 
              className="chapter-header-badge" 
              style={{ background: `linear-gradient(135deg, ${chapter.color}, #6366f1)` }}
            >
              <BookOpen size={26} color="white" />
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                <span className="chapter-tag" style={{ color: chapter.color, fontWeight: '800', fontSize: '0.78rem', letterSpacing: '0.04em' }}>
                  {chapter.badge}
                </span>
                <span className="cefr-pill" style={{ background: `${chapter.color}20`, color: chapter.color }}>
                  {chapter.level} CEFR
                </span>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: '600' }}>
                  • {chapter.aspect} Aspect
                </span>
              </div>
              <h2 style={{ margin: 0, fontSize: '1.6rem', fontWeight: '800', color: 'var(--text-main)' }}>
                {chapter.title}
              </h2>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <button
              className="btn-secondary"
              onClick={() => {
                soundManager.playClick();
                if (onNavigateToSection) onNavigateToSection('workflow');
              }}
              style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.84rem' }}
            >
              <GitFork size={15} /> All 12 Tenses Roadmap
            </button>
            <button
              className="btn-primary"
              style={{ background: chapter.color, display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.84rem' }}
              onClick={() => {
                soundManager.playSuccess();
                if (onNavigateToSection) onNavigateToSection('overview');
              }}
            >
              <Compass size={15} /> Study Overview (Module 1) <ArrowRight size={14} />
            </button>
          </div>
        </div>

        <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.96rem', lineHeight: 1.5 }}>
          {chapter.summary}
        </p>
      </header>

      {/* Grid Layout of Core Studio Cards */}
      <div 
        className="preview-studio-cards-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
          gap: '20px',
          marginTop: '20px'
        }}
      >
        {/* Card 1: Canonical Formula Architecture */}
        <div className="studio-card formula-box card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <Code2 size={16} style={{ color: chapter.color }} />
            <span className="studio-label" style={{ margin: 0 }}>Canonical Formula Architecture</span>
          </div>
          <code className="studio-code" style={{ color: chapter.color, fontSize: '0.96rem', padding: '10px 14px' }}>
            {chapter.formula}
          </code>
          <p className="studio-summary" style={{ marginTop: '10px' }}>
            <strong>Primary Reality:</strong> {chapter.reality}
          </p>
        </div>

        {/* Card 2: Model Native Example with Audio */}
        <div className="studio-card example-box card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <Sparkles size={16} style={{ color: chapter.color }} />
            <span className="studio-label" style={{ margin: 0 }}>Model Native Sentence Example</span>
          </div>
          <div 
            style={{
              background: 'rgba(0, 0, 0, 0.2)',
              borderRadius: 'var(--radius-md)',
              padding: '14px',
              border: '1px solid var(--border-subtle)',
              marginBottom: '12px'
            }}
          >
            <p className="example-text" style={{ fontSize: '1.05rem', color: 'var(--text-main)', lineHeight: 1.5 }}>
              "{chapter.example}"
            </p>
          </div>
          <button 
            className="speak-btn-pill"
            onClick={() => soundManager.speak(chapter.example)}
            title="Listen to American native pronunciation"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
          >
            <Volume2 size={16} /> Listen to Native Audio
          </button>
        </div>

        {/* Card 3: The 3 Canonical Sentence Structures (+, -, ?) */}
        <div className="studio-card structures-box card" style={{ gridColumn: '1 / -1' }}>
          <span className="studio-label">The 3 Canonical Sentence Structures (+, –, ?):</span>
          <div className="structures-list" style={{ marginTop: '10px' }}>
            <div className="struct-row">
              <span className="struct-tag aff">+ Affirmative</span>
              <p>{chapter.structures.affirmative}</p>
            </div>
            <div className="struct-row">
              <span className="struct-tag neg">– Negative</span>
              <p>{chapter.structures.negative}</p>
            </div>
            <div className="struct-row">
              <span className="struct-tag int">? Question</span>
              <p>{chapter.structures.question}</p>
            </div>
          </div>
        </div>

        {/* Card 4: Essential Time Signals & Anchor Words */}
        <div className="studio-card signals-box card">
          <span className="studio-label">Essential Time Signals & Anchor Words:</span>
          <div className="signals-chips" style={{ marginTop: '10px' }}>
            {chapter.signals.map((word, idx) => (
              <span 
                key={idx} 
                className="signal-chip"
                style={{
                  background: `${chapter.color}15`,
                  borderColor: `${chapter.color}40`,
                  color: 'var(--text-main)'
                }}
              >
                {word}
              </span>
            ))}
          </div>
        </div>

        {/* Card 5: Contrast & Nuance */}
        <div className="studio-card contrast-box card">
          <div className="contrast-header">
            <AlertCircle size={17} style={{ color: chapter.color }} />
            <strong style={{ color: chapter.color }}>How This Tense Differs From Present Simple:</strong>
          </div>
          <p style={{ marginTop: '8px', lineHeight: 1.55 }}>
            {chapter.contrast}
          </p>
        </div>

        {/* Card 6: Interactive Quick Mastery Check (Mini-Quiz) */}
        <div className="studio-card miniquiz-box card" style={{ gridColumn: '1 / -1' }}>
          <div className="quiz-header">
            <Award size={18} style={{ color: chapter.color }} />
            <strong style={{ color: chapter.color, fontSize: '0.92rem' }}>
              Quick Mastery Check ({chapter.title}):
            </strong>
          </div>
          
          <p className="quiz-question" style={{ marginTop: '6px', fontSize: '1rem' }}>
            {chapter.miniQuiz.question}
          </p>

          <div className="quiz-options-list" style={{ marginTop: '12px' }}>
            {chapter.miniQuiz.options.map((opt, optIdx) => {
              const isSelected = selectedOpt === optIdx;
              const isCorrect = optIdx === chapter.miniQuiz.correct;

              let btnClass = 'quiz-opt-btn';
              if (submitted) {
                if (isCorrect) btnClass += ' correct';
                else if (isSelected) btnClass += ' incorrect';
              } else if (isSelected) {
                btnClass += ' selected';
              }

              return (
                <button
                  key={optIdx}
                  className={btnClass}
                  onClick={() => handleOptionClick(optIdx)}
                  style={{
                    padding: '12px 18px',
                    fontSize: '0.92rem'
                  }}
                >
                  <span className="opt-letter">{String.fromCharCode(65 + optIdx)}</span>
                  <span className="opt-text" style={{ flex: 1 }}>{opt}</span>
                  {submitted && isCorrect && <CheckCircle2 size={18} className="opt-status-icon success" />}
                  {submitted && isSelected && !isCorrect && <XCircle size={18} className="opt-status-icon error" />}
                </button>
              );
            })}
          </div>

          {submitted && (
            <div 
              className="quiz-feedback-box" 
              style={{
                marginTop: '14px',
                padding: '12px 16px',
                borderRadius: 'var(--radius-md)',
                background: selectedOpt === chapter.miniQuiz.correct ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)',
                border: `1px solid ${selectedOpt === chapter.miniQuiz.correct ? 'rgba(16, 185, 129, 0.3)' : 'rgba(239, 68, 68, 0.3)'}`
              }}
            >
              <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-main)' }}>
                <strong>Pedagogical Insight:</strong> {chapter.miniQuiz.explanation}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Quick Launch Bottom Bar into Full Curriculum */}
      <footer 
        className="studio-footer-launch-bar card"
        style={{
          marginTop: '24px',
          padding: '20px 24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '14px',
          background: 'var(--bg-card)'
        }}
      >
        <div>
          <h4 style={{ margin: 0, fontSize: '1rem', color: 'var(--text-main)' }}>
            Ready to master {chapter.title}?
          </h4>
          <p style={{ margin: 0, fontSize: '0.84rem', color: 'var(--text-muted)' }}>
            Dive straight into the interactive curriculum modules or test your knowledge in the practice studio.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <button
            className="btn-secondary"
            onClick={() => {
              soundManager.playClick();
              if (onNavigateToSection) onNavigateToSection('useCases');
            }}
            style={{ fontSize: '0.84rem' }}
          >
            <Layers size={14} /> 6 Use Cases (Mod 2)
          </button>

          <button
            className="btn-secondary"
            onClick={() => {
              soundManager.playClick();
              if (onNavigateToSection) onNavigateToSection('formulas');
            }}
            style={{ fontSize: '0.84rem' }}
          >
            <Code2 size={14} /> Formulas (Mod 3)
          </button>

          <button
            className="btn-secondary"
            onClick={() => {
              soundManager.playClick();
              if (onNavigateToSection) onNavigateToSection('exercises');
            }}
            style={{ fontSize: '0.84rem' }}
          >
            <CheckCircle2 size={14} /> Practice 80+ Qs (Mod 8)
          </button>

          <button
            className="btn-primary"
            style={{ background: chapter.color, fontSize: '0.84rem' }}
            onClick={() => {
              soundManager.playSuccess();
              if (onNavigateToSection) onNavigateToSection('overview');
            }}
          >
            Explore Overview & Intuition <ChevronRight size={14} />
          </button>
        </div>
      </footer>
    </div>
  );
}
