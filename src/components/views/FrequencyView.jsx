import React, { useState, useEffect } from 'react';
import { BarChart2, Sparkles, Volume2, ArrowRight, CheckCircle2, AlertTriangle } from 'lucide-react';
import { PRESENT_SIMPLE_DATA } from '../../data/presentSimpleData';
import { soundManager } from '../../utils/audio';

export default function FrequencyView({ tenseData, tenseMeta }) {
  const data = tenseData || PRESENT_SIMPLE_DATA;
  const meta = tenseMeta || data.meta;
  const { adverbsOfFrequency = [], adverbPlacementRules = [] } = data;

  const [selectedAdverb, setSelectedAdverb] = useState(adverbsOfFrequency[0] || {});

  useEffect(() => {
    if (adverbsOfFrequency && adverbsOfFrequency.length > 0) {
      setSelectedAdverb(adverbsOfFrequency[0]);
    }
  }, [data]);

  const handleSpeak = (text) => {
    soundManager.speak(text);
  };

  return (
    <div className="content-max-width">
      {/* Header */}
      <div className="section-hero">
        <span className="section-tag" style={{ color: meta.color }}>
          <Sparkles size={14} /> Module 05: Syntactic Placement • {meta.title}
        </span>
        <h2>Time Anchors &amp; Word Order ({meta.title})</h2>
        <p>
          Master the key time signals, frequency spectrum, and rigid syntactic placement rules governing {meta.title}.
        </p>
      </div>

      {/* Interactive Spectrum Grid */}
      {adverbsOfFrequency.length > 0 && (
        <div className="glass-card" style={{ padding: '32px', marginBottom: '32px' }}>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '6px' }}>Key Time Signals &amp; Anchors</h3>
          <p style={{ fontSize: '0.85rem', marginBottom: '24px' }}>
            Click any signal word below to test its semantic weight, probability, and native spoken example:
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '12px', marginBottom: '28px' }}>
            {adverbsOfFrequency.map((item) => {
              const isSelected = selectedAdverb?.adverb === item.adverb;
              const displayLabel = item.adverb ? item.adverb.split('/')[0] : 'Signal';
              return (
                <button
                  key={item.adverb}
                  onClick={() => {
                    soundManager.playClick();
                    setSelectedAdverb(item);
                  }}
                  style={{
                    background: isSelected ? 'var(--bg-card-hover)' : 'var(--bg-input)',
                    border: isSelected ? `2px solid ${item.color || meta.color}` : '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-md)',
                    padding: '14px 10px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '6px',
                    cursor: 'pointer',
                    transition: 'all var(--transition-fast)',
                    boxShadow: isSelected ? `0 0 16px ${item.color || meta.color}40` : 'none',
                  }}
                >
                  <span style={{ fontSize: '1.1rem', fontWeight: '800', color: item.color || meta.color }}>
                    {String(item.percentage).replace('%', '')}%
                  </span>
                  <span style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--text-main)', textAlign: 'center' }}>
                    {displayLabel}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Selected Adverb Spotlight Card */}
          {selectedAdverb?.adverb && (
            <div style={{ background: 'var(--bg-input)', padding: '24px', borderRadius: 'var(--radius-lg)', border: `1px solid ${selectedAdverb.color || meta.color}60` }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px', flexWrap: 'wrap', gap: '12px' }}>
                <div>
                  <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: selectedAdverb.color || meta.color, fontWeight: '700' }}>
                    Frequency Intensity / Anchor Weight: {String(selectedAdverb.percentage).replace('%', '')}%
                  </span>
                  <h4 style={{ fontSize: '1.5rem', marginTop: '2px' }}>{selectedAdverb.adverb}</h4>
                </div>
                <button
                  className="audio-pronounce-btn"
                  onClick={() => handleSpeak(selectedAdverb.example)}
                >
                  <Volume2 size={14} /> Listen Full Sentence
                </button>
              </div>

              <div style={{ fontSize: '1.15rem', color: 'var(--text-main)', fontStyle: 'italic', background: 'var(--bg-card)', padding: '16px 20px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
                "{selectedAdverb.example}"
              </div>
            </div>
          )}
        </div>
      )}

      {/* The 3 Golden Placement Laws */}
      <h3 style={{ fontSize: '1.35rem', marginBottom: '16px' }}>The 3 Golden Placement Laws</h3>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px', marginBottom: '32px' }}>
        {adverbPlacementRules.map((rule, idx) => {
          const title = rule.rule || rule.title || `Rule ${idx + 1}`;
          const rawExample = (rule.examples && rule.examples[0]) || rule.example || "";
          const goodText = typeof rawExample === 'object' && rawExample !== null
            ? rawExample.good
            : (typeof rule.example === 'string' ? rule.example : (typeof rawExample === 'string' ? rawExample : ""));
          const badText = typeof rawExample === 'object' && rawExample !== null
            ? rawExample.bad
            : (typeof rule.badExample === 'string' ? rule.badExample : "");

          return (
            <div key={idx} className="glass-card" style={{ borderTop: idx === 0 ? `4px solid ${meta.color || 'var(--indigo-500)'}` : idx === 1 ? '4px solid var(--emerald-400)' : '4px solid var(--amber-400)' }}>
              <h4 style={{ fontSize: '1.1rem', marginBottom: '8px' }}>{title}</h4>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.88rem', background: 'var(--bg-input)', padding: '10px 14px', borderRadius: 'var(--radius-md)', color: 'var(--cyan-400)', fontWeight: '600', marginBottom: '14px' }}>
                {rule.formula}
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {goodText && (
                  <div style={{ background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.25)', padding: '10px 14px', borderRadius: 'var(--radius-sm)' }}>
                    <div style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--emerald-400)', textTransform: 'uppercase', marginBottom: '4px' }}>
                      Correct:
                    </div>
                    <div style={{ fontSize: '0.92rem', fontWeight: '600', color: 'var(--text-main)' }}>
                      {goodText}
                    </div>
                  </div>
                )}

                {badText && (
                  <div style={{ background: 'rgba(244, 63, 94, 0.1)', border: '1px solid rgba(244, 63, 94, 0.25)', padding: '10px 14px', borderRadius: 'var(--radius-sm)' }}>
                    <div style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--rose-500)', textTransform: 'uppercase', marginBottom: '4px' }}>
                      Common Mistake:
                    </div>
                    <div style={{ fontSize: '0.92rem', fontWeight: '600', color: 'var(--rose-400)', textDecoration: 'line-through' }}>
                      {badText}
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
