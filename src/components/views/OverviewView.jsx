import React from 'react';
import { Volume2, Sparkles, Globe, ArrowRight, Lightbulb, Clock3, BookOpen, Zap, Calendar, Heart, Radio } from 'lucide-react';
import { PRESENT_SIMPLE_DATA } from '../../data/presentSimpleData';
import { soundManager } from '../../utils/audio';

const ICON_COMPONENTS = {
  Clock3,
  Clock: Clock3,
  Zap,
  Globe,
  BookOpen,
  Calendar,
  Heart,
  Radio,
};

export default function OverviewView({ tenseData, tenseMeta, onNavigateToCases, onNavigateToExercises }) {
  const data = tenseData || PRESENT_SIMPLE_DATA;
  const meta = tenseMeta || data.meta;
  const { overview } = data;

  const handleSpeak = (text) => {
    soundManager.speak(text);
  };

  const defaultPillars = [
    {
      icon: <Clock3 size={20} />,
      label: 'Timeless Truths',
      desc: 'Facts that hold across all time — "The sun rises in the east."',
      color: 'var(--cyan-400)',
      bg: 'rgba(34, 211, 238, 0.08)',
      border: 'rgba(34, 211, 238, 0.25)',
    },
    {
      icon: <Zap size={20} />,
      label: 'Daily Habits & Routines',
      desc: 'Things you do regularly — "She runs every morning."',
      color: 'var(--amber-400)',
      bg: 'rgba(251, 191, 36, 0.08)',
      border: 'rgba(251, 191, 36, 0.25)',
    },
    {
      icon: <Globe size={20} />,
      label: 'Permanent States',
      desc: 'Ongoing conditions — "They live in London."',
      color: 'var(--indigo-500)',
      bg: 'rgba(99, 102, 241, 0.08)',
      border: 'rgba(99, 102, 241, 0.25)',
    },
    {
      icon: <BookOpen size={20} />,
      label: 'Universal Facts',
      desc: 'Scientific laws & axioms — "Water boils at 100°C."',
      color: 'var(--emerald-400)',
      bg: 'rgba(52, 211, 153, 0.08)',
      border: 'rgba(52, 211, 153, 0.25)',
    },
  ];

  const pillarsToRender = overview.pillars && overview.pillars.length > 0
    ? overview.pillars.map((p) => {
        const Icon = ICON_COMPONENTS[p.icon] || Sparkles;
        return {
          icon: <Icon size={20} />,
          label: p.label,
          desc: p.desc,
          color: p.color || meta.color || 'var(--indigo-500)',
          bg: p.bg || 'rgba(99, 102, 241, 0.08)',
          border: p.border || 'rgba(99, 102, 241, 0.25)',
        };
      })
    : defaultPillars;

  const sampleSignal = overview.signalWords && overview.signalWords.length > 0 ? overview.signalWords[0] : null;

  return (
    <div className="content-max-width">
      {/* Hero Header */}
      <div className="section-hero">
        <span className="section-tag" style={{ color: meta.color }}>
          <Sparkles size={14} /> Module 01: Core Philosophy • {meta.title}
        </span>
        <h2>The Architecture of {meta.title}</h2>
        <p>
          {meta.summary || "Master the structural principles, mental timeline model, and native reality of this tense."}
        </p>
      </div>

      {/* Deep Pedagogical Anchor */}
      <div className="glass-card overview-anchor-card" style={{ marginBottom: '28px', borderLeft: `4px solid ${meta.color || 'var(--indigo-500)'}` }}>
        <h3 style={{ fontSize: '1.2rem', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Lightbulb size={20} color="var(--amber-400)" />
          What is the {meta.title} really about?
        </h3>
        <p style={{ fontSize: '1.02rem', marginBottom: '14px', lineHeight: '1.75' }}>
          {overview.definition}
        </p>
        <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
          {overview.coreConcept}
        </p>
      </div>

      {/* Timeline Principle */}
      <div className="glass-card" style={{ marginBottom: '28px' }}>
        <h3 style={{ fontSize: '1.15rem', marginBottom: '6px' }}>
          Visual Intuition: The Mental Timeline Model
        </h3>
        <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '22px' }}>
          {overview.timelineInsight || "How native speakers intuitively map this tense across past, present, and future time."}
        </p>

        {/* Full-width timeline visualization */}
        <div className="timeline-visual">
          <div className="timeline-labels">
            <span style={{ color: meta.time === 'Past' ? meta.color : undefined, fontWeight: meta.time === 'Past' ? 800 : 500 }}>
              {meta.time === 'Past' ? '● PAST (Active Focus)' : 'PAST'}
            </span>
            <span style={{ color: meta.time === 'Present' ? meta.color : 'var(--indigo-500)', fontWeight: 800, fontSize: '0.85rem' }}>
              {meta.time === 'Present' ? '● NOW (Active Focus)' : '● NOW'}
            </span>
            <span style={{ color: meta.time === 'Future' ? meta.color : undefined, fontWeight: meta.time === 'Future' ? 800 : 500 }}>
              {meta.time === 'Future' ? '● FUTURE (Active Focus)' : 'FUTURE'}
            </span>
          </div>
          <div className="timeline-track">
            <div 
              className="timeline-fill" 
              style={{ 
                background: meta.color ? `linear-gradient(90deg, transparent, ${meta.color}, transparent)` : undefined 
              }} 
            />
            <div 
              className="timeline-now-marker" 
              style={{ backgroundColor: meta.color }} 
            />
          </div>
          <div className="timeline-title-row">
            <Globe size={15} style={{ color: meta.color || 'var(--indigo-500)' }} />
            <span style={{ color: meta.color, fontWeight: 700 }}>{meta.title} — {meta.aspect} Aspect ({meta.time})</span>
          </div>
          {sampleSignal && (
            <div className="timeline-example-row">
              <span className="timeline-quote">"{sampleSignal.example}"</span>
              <span className="timeline-meaning">= anchored to {sampleSignal.word}</span>
            </div>
          )}
        </div>
      </div>

      {/* Four Pillars */}
      <div style={{ marginBottom: '32px' }}>
        <h3 style={{ fontSize: '1.15rem', marginBottom: '6px' }}>Core Pillars of Use</h3>
        <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '18px' }}>
          Key functional environments where English speakers deploy {meta.title}:
        </p>
        <div className="pillars-grid">
          {pillarsToRender.map((p, i) => (
            <div
              key={i}
              className="pillar-card"
              style={{
                background: p.bg,
                border: `1px solid ${p.border}`,
              }}
            >
              <div className="pillar-icon" style={{ color: p.color }}>
                {p.icon}
              </div>
              <div>
                <div className="pillar-label" style={{ color: p.color }}>{p.label}</div>
                <div className="pillar-desc">{p.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Signal Words */}
      {overview.signalWords && overview.signalWords.length > 0 && (
        <div style={{ marginBottom: '32px' }}>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>
            Signal Words &amp; Time Anchors
          </h3>
          <p style={{ fontSize: '0.9rem', marginBottom: '18px' }}>
            When you see or hear these expressions, English commands the {meta.title}:
          </p>

          <div className="card-grid">
            {overview.signalWords.map((item, index) => (
              <div key={index} className="glass-card signal-card" style={{ padding: '18px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span style={{ fontWeight: '700', color: meta.color || 'var(--cyan-400)', fontSize: '0.95rem' }}>
                    {item.word}
                  </span>
                  <button
                    className="audio-pronounce-btn"
                    onClick={() => handleSpeak(item.example)}
                    title="Listen to pronunciation"
                  >
                    <Volume2 size={13} /> Listen
                  </button>
                </div>
                <p style={{ fontStyle: 'italic', fontSize: '0.88rem', color: 'var(--text-main)' }}>
                  "{item.example}"
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Navigation CTA */}
      <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
        <button className="btn-primary" onClick={onNavigateToCases}>
          <span>Explore Use Cases</span>
          <ArrowRight size={18} />
        </button>
        <button className="btn-secondary" onClick={onNavigateToExercises}>
          <span>Test Knowledge in Practice Studio</span>
        </button>
      </div>
    </div>
  );
}
