import React, { useState } from 'react';
import { Wand2, Sparkles, Volume2, Search, Check, AlertCircle } from 'lucide-react';
import { PRESENT_SIMPLE_DATA } from '../../data/presentSimpleData';
import { analyzeVerb } from '../../utils/verbEngine';
import { soundManager } from '../../utils/audio';

const QUICK_TEST_VERBS = ['watch', 'study', 'play', 'fix', 'fly', 'kiss', 'buzz', 'carry', 'buy', 'go', 'have', 'be'];

export default function SpellingLabView({ tenseData, tenseMeta, activeTense = 'presentSimple' }) {
  const data = tenseData || PRESENT_SIMPLE_DATA;
  const meta = tenseMeta || data.meta;
  const { spellingRules } = data;
  const [typedVerb, setTypedVerb] = useState('watch');

  const analysis = analyzeVerb(typedVerb);

  const handleSpeak = (text) => {
    soundManager.speak(text);
  };

  const rulesList = Array.isArray(spellingRules) ? spellingRules : (spellingRules?.rules || []);
  const titleText = spellingRules?.title || `Spelling Rules & Phonetics Lab • ${meta.title}`;
  const subtitleText = spellingRules?.subtitle || `Master how English verbs transform and conjugate in ${meta.title}.`;
  const phoneticTips = spellingRules?.phoneticTips || [];

  return (
    <div className="content-max-width">
      {/* Hero */}
      <div className="section-hero">
        <span className="section-tag" style={{ color: meta.color }}>
          <Sparkles size={14} /> Module 04: Morphology &amp; Verb Lab • {meta.title}
        </span>
        <h2>{titleText}</h2>
        <p>{subtitleText}</p>
      </div>

      {/* Interactive Live Verb Sandbox */}
      <div className="glass-card" style={{ padding: '32px', marginBottom: '32px', borderTop: `4px solid ${meta.color || 'var(--violet-500)'}` }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
          <div style={{ width: '42px', height: '42px', borderRadius: 'var(--radius-md)', background: meta.color ? `linear-gradient(135deg, ${meta.color}, var(--indigo-500))` : 'var(--grad-hero)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Wand2 size={22} />
          </div>
          <div>
            <h3 style={{ fontSize: '1.35rem' }}>Live Verb Morphology Engine ({meta.title})</h3>
            <p style={{ fontSize: '0.85rem' }}>Type any English verb to dissect its spelling adjustments and phonetic patterns</p>
          </div>
        </div>

        {/* Input Field & Search */}
        <div className="verb-input-wrapper">
          <input
            type="text"
            className="custom-input"
            value={typedVerb}
            onChange={(e) => setTypedVerb(e.target.value.toLowerCase())}
            placeholder="Type any verb... e.g. relax, try, enjoy, wash"
            maxLength={25}
          />
          <button 
            className="btn-primary"
            onClick={() => handleSpeak(`${typedVerb}. He ${analysis.thirdPerson}`)}
          >
            <Volume2 size={18} /> Pronounce
          </button>
        </div>

        {/* Quick Presets */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '24px' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
            Quick Presets:
          </span>
          {QUICK_TEST_VERBS.map((verb) => (
            <button
              key={verb}
              onClick={() => {
                soundManager.playClick();
                setTypedVerb(verb);
              }}
              style={{
                background: typedVerb === verb ? (meta.color || 'var(--indigo-500)') : 'var(--bg-input)',
                color: typedVerb === verb ? 'white' : 'var(--text-secondary)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-sm)',
                padding: '4px 10px',
                fontSize: '0.82rem',
                cursor: 'pointer',
                fontWeight: '600'
              }}
            >
              {verb}
            </button>
          ))}
        </div>

        {/* Real-time Analysis Card */}
        <div style={{ background: 'var(--bg-input)', borderRadius: 'var(--radius-lg)', padding: '24px', border: '1px solid var(--border-medium)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '14px', marginBottom: '18px' }}>
            <div>
              <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: meta.color || 'var(--indigo-500)', fontWeight: '700' }}>
                Detected Category: {analysis.ruleTag}
              </span>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '14px', marginTop: '4px' }}>
                <span style={{ fontSize: '1.4rem', color: 'var(--text-muted)' }}>{typedVerb || '...'}</span>
                <span style={{ fontSize: '1.4rem', color: 'var(--text-muted)' }}>➔</span>
                <span style={{ fontSize: '1.6rem', fontWeight: '800', color: meta.color || 'var(--indigo-400)', fontFamily: 'var(--font-mono)' }}>
                  {analysis.thirdPerson}
                </span>
                <span style={{ fontSize: '0.82rem', background: 'rgba(255, 255, 255, 0.08)', padding: '3px 8px', borderRadius: 'var(--radius-sm)', color: 'var(--text-secondary)' }}>
                  Suffix: +{analysis.addedSuffix}
                </span>
              </div>
            </div>

            <div style={{ textAlign: 'right' }}>
              <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-muted)', display: 'block' }}>
                Phonetic Ending
              </span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '1.05rem', fontWeight: '700', color: 'var(--cyan-400)' }}>
                {analysis.pronunciation}
              </span>
            </div>
          </div>

          <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '14px' }}>
            {analysis.explanation}
          </p>

          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', paddingTop: '12px', borderTop: '1px solid var(--border-subtle)', fontSize: '0.85rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Check size={16} color="var(--emerald-400)" />
              <strong>Sample: </strong> 
              <span style={{ color: 'var(--text-main)' }}>"{analysis.sampleHe}"</span>
              <button className="audio-pronounce-btn" onClick={() => handleSpeak(analysis.sampleHe)}>
                <Volume2 size={12} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Phonetic Guidance Tips */}
      {phoneticTips.length > 0 && (
        <div className="glass-card" style={{ padding: '20px', marginBottom: '28px', borderLeft: `4px solid ${meta.color || 'var(--cyan-400)'}` }}>
          <h4 style={{ fontSize: '1.1rem', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Sparkles size={18} color={meta.color || 'var(--cyan-400)'} />
            Pronunciation &amp; Phonetic Keys for {meta.title}
          </h4>
          <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.7', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {phoneticTips.map((tipItem, idx) => {
              if (typeof tipItem === 'string') {
                return <li key={idx}>{tipItem}</li>;
              }
              if (typeof tipItem === 'object' && tipItem !== null) {
                return (
                  <li key={idx}>
                    <strong style={{ color: meta.color || 'var(--cyan-400)' }}>
                      {tipItem.ending || tipItem.sound || 'Key Rule'}:
                    </strong>{' '}
                    <span>{tipItem.tip || tipItem.explanation || tipItem.text || JSON.stringify(tipItem)}</span>
                  </li>
                );
              }
              return null;
            })}
          </ul>
        </div>
      )}

      {/* Core Rules Grid */}
      <h3 style={{ fontSize: '1.3rem', marginBottom: '16px' }}>Core Orthographic Laws ({meta.title})</h3>
      <div className="card-grid">
        {rulesList.map((rule, rIdx) => {
          const categoryName = rule.category || rule.title || rule.tag || `Rule ${rIdx + 1}`;
          const rulePhonetic = rule.phonetics || rule.phonetic || rule.sound || null;
          const ruleCondition = rule.condition || null;
          const ruleStatement = rule.rule || rule.ruleText || rule.explanation || ruleCondition || "";
          const examples = rule.examples || [];

          return (
            <div key={rule.id || rule.ruleNumber || rIdx} className="glass-card">
              <h4 style={{ fontSize: '1.15rem', color: meta.color || 'var(--cyan-400)', marginBottom: '8px' }}>
                {categoryName}
              </h4>
              <div style={{ background: 'var(--bg-input)', padding: '10px 14px', borderRadius: 'var(--radius-md)', fontWeight: '700', color: 'var(--emerald-400)', fontFamily: 'var(--font-mono)', marginBottom: '12px', fontSize: '0.95rem' }}>
                {ruleStatement}
              </div>
              {(rulePhonetic || ruleCondition) && (
                <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '14px' }}>
                  {rulePhonetic ? `Sound: ${rulePhonetic}` : `Applies to: ${ruleCondition}`}
                </p>
              )}

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {examples.map((item, idx) => {
                  const isObj = typeof item === 'object' && item !== null;
                  const label = isObj ? `${item.base} ➔ ${item.third || item.past || item.participle || item.v3 || item.form || ''}` : item;
                  const speech = isObj ? (item.sample || item.base) : String(item).replace(/[→➔]/g, 'to');

                  return (
                    <div key={idx} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'var(--bg-card)', padding: '8px 12px', borderRadius: 'var(--radius-sm)' }}>
                      <div>
                        <span style={{ fontFamily: 'var(--font-mono)', fontWeight: '700', color: 'var(--text-main)', fontSize: '0.9rem' }}>
                          {label}
                        </span>
                        {isObj && item.sample && (
                          <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
                            "{item.sample}"
                          </div>
                        )}
                      </div>
                      <button className="audio-pronounce-btn" onClick={() => handleSpeak(speech)}>
                        <Volume2 size={12} />
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
