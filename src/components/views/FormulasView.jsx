import React, { useState } from 'react';
import { 
  Code2, 
  Sparkles, 
  Volume2, 
  AlertTriangle, 
  HelpCircle, 
  Layers, 
  Check, 
  ArrowRight 
} from 'lucide-react';
import { PRESENT_SIMPLE_DATA } from '../../data/presentSimpleData';
import { buildDynamicSentence } from '../../utils/verbEngine';
import { soundManager } from '../../utils/audio';

const SUBJECT_OPTIONS = ['I', 'You', 'He', 'She', 'It', 'We', 'They', 'My brother', 'The students'];
const VERB_OPTIONS = ['work', 'play', 'study', 'watch', 'fix', 'fly', 'have', 'be'];
const SENTENCE_TYPES = [
  { id: 'affirmative', label: 'Affirmative (+)' },
  { id: 'negative', label: 'Negative (–)' },
  { id: 'question', label: 'Yes/No Question (?)' },
  { id: 'wh', label: 'Wh- Question (?)' },
];

export default function FormulasView({ tenseData, tenseMeta, activeTense = 'presentSimple' }) {
  const data = tenseData || PRESENT_SIMPLE_DATA;
  const meta = tenseMeta || data.meta;
  const { grammarStructures } = data;
  const [activeTab, setActiveTab] = useState('affirmative');

  // Dynamic Sentence Simulator State
  const [selectedSubject, setSelectedSubject] = useState('She');
  const [selectedVerb, setSelectedVerb] = useState('study');
  const [selectedType, setSelectedType] = useState('affirmative');

  const liveSentence = buildDynamicSentence(selectedSubject, selectedVerb, selectedType, activeTense);

  const handleSpeak = (text) => {
    soundManager.speak(text);
  };

  const aff = grammarStructures.affirmative || {};
  const neg = grammarStructures.negative || {};
  const intg = grammarStructures.interrogative || {};
  const toBe = grammarStructures.verbToBe || {};
  const toHave = grammarStructures.verbHave || {};

  return (
    <div className="content-max-width">
      {/* Hero Header */}
      <div className="section-hero">
        <span className="section-tag" style={{ color: meta.color }}>
          <Sparkles size={14} /> Module 03: Structural Mechanics • {meta.title}
        </span>
        <h2>Formulas, Word Order &amp; Syntax Engine</h2>
        <p>
          Master the exact mechanical blueprints for constructing grammatically flawless affirmative, 
          negative, and question sentences in {meta.title}.
        </p>
      </div>

      {/* Dynamic Sentence Builder Lab */}
      <div className="formula-interactive-box">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '36px', height: '36px', borderRadius: 'var(--radius-md)', background: meta.color ? `linear-gradient(135deg, ${meta.color}, var(--indigo-500))` : 'var(--grad-hero)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
              <Code2 size={20} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.25rem' }}>Dynamic Formula Studio ({meta.title})</h3>
              <p style={{ fontSize: '0.82rem' }}>Toggle subjects, verbs, and sentence types to observe real-time grammatical transformations</p>
            </div>
          </div>
          <span style={{ fontSize: '0.78rem', background: `${meta.color || 'var(--indigo-500)'}20`, color: meta.color || 'var(--indigo-400)', padding: '4px 10px', borderRadius: 'var(--radius-full)', fontWeight: '700' }}>
            {meta.badge || meta.title}
          </span>
        </div>

        {/* Controls Grid */}
        <div className="controls-grid" style={{ marginBottom: '20px' }}>
          {/* Subject Selector */}
          <div>
            <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '700', marginBottom: '8px', color: 'var(--text-secondary)' }}>
              1. Choose Subject (Pronoun / Noun):
            </label>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {SUBJECT_OPTIONS.map((sub) => (
                <button
                  key={sub}
                  className={`selector-chip ${selectedSubject === sub ? 'selected' : ''}`}
                  onClick={() => setSelectedSubject(sub)}
                  style={{ fontSize: '0.82rem', padding: '5px 10px' }}
                >
                  {sub}
                </button>
              ))}
            </div>
          </div>

          {/* Verb Selector */}
          <div>
            <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '700', marginBottom: '8px', color: 'var(--text-secondary)' }}>
              2. Choose Base Verb:
            </label>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {VERB_OPTIONS.map((verb) => (
                <button
                  key={verb}
                  className={`selector-chip ${selectedVerb === verb ? 'selected' : ''}`}
                  onClick={() => setSelectedVerb(verb)}
                  style={{ fontSize: '0.82rem', padding: '5px 10px', fontFamily: 'var(--font-mono)' }}
                >
                  {verb}
                </button>
              ))}
            </div>
          </div>

          {/* Sentence Type Selector */}
          <div style={{ gridColumn: 'span 2' }}>
            <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '700', marginBottom: '8px', color: 'var(--text-secondary)' }}>
              3. Sentence Polarity &amp; Structure Type:
            </label>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {SENTENCE_TYPES.map((type) => (
                <button
                  key={type.id}
                  className={`selector-chip ${selectedType === type.id ? 'selected' : ''}`}
                  onClick={() => setSelectedType(type.id)}
                  style={{ fontSize: '0.82rem', padding: '6px 14px' }}
                >
                  {type.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Live Sentence Display Screen */}
        <div className="live-sentence-display">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
            <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)', fontWeight: '700' }}>
              Real-Time Syntactic Output
            </span>
            <button 
              className="audio-pronounce-btn"
              onClick={() => handleSpeak(liveSentence.full)}
              title="Listen to generated sentence"
            >
              <Volume2 size={15} /> Listen Audio
            </button>
          </div>

          <div className="sentence-text" style={{ fontSize: '1.4rem', fontWeight: '700', marginBottom: '16px', color: 'var(--text-main)', letterSpacing: '-0.01em' }}>
            {liveSentence.full}
          </div>

          {/* Grammatical Breakdown Tokens */}
          <div className="token-breakdown" style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {liveSentence.wh && (
              <div className="grammar-token" style={{ background: 'rgba(236, 72, 153, 0.12)', border: '1px solid rgba(236, 72, 153, 0.3)' }}>
                <span className="token-label">Wh- Question Word</span>
                <span className="token-val" style={{ color: 'var(--pink-400)' }}>{liveSentence.wh}</span>
              </div>
            )}
            {liveSentence.aux && (
              <div className="grammar-token" style={{ background: 'rgba(245, 158, 11, 0.12)', border: '1px solid rgba(245, 158, 11, 0.3)' }}>
                <span className="token-label">Auxiliary Verb</span>
                <span className="token-val" style={{ color: 'var(--amber-400)' }}>{liveSentence.aux}</span>
              </div>
            )}
            <div className="grammar-token" style={{ background: 'rgba(99, 102, 241, 0.12)', border: '1px solid rgba(99, 102, 241, 0.3)' }}>
              <span className="token-label">Subject</span>
              <span className="token-val" style={{ color: 'var(--indigo-400)' }}>{liveSentence.subject}</span>
            </div>
            {liveSentence.verb && (
              <div className="grammar-token" style={{ background: 'rgba(16, 185, 129, 0.12)', border: '1px solid rgba(16, 185, 129, 0.3)' }}>
                <span className="token-label">Main Verb Form</span>
                <span className="token-val" style={{ color: 'var(--emerald-400)' }}>{liveSentence.verb}</span>
              </div>
            )}
            <div className="grammar-token" style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid var(--border-subtle)' }}>
              <span className="token-label">Complement / Object</span>
              <span className="token-val">{liveSentence.complement}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Formula Deep-Dive Tabs */}
      <div className="tab-pill-group" style={{ marginBottom: '24px' }}>
        <button
          className={`tab-pill ${activeTab === 'affirmative' ? 'active' : ''}`}
          onClick={() => setActiveTab('affirmative')}
        >
          Affirmative (+)
        </button>
        <button
          className={`tab-pill ${activeTab === 'negative' ? 'active' : ''}`}
          onClick={() => setActiveTab('negative')}
        >
          Negative (–)
        </button>
        <button
          className={`tab-pill ${activeTab === 'interrogative' ? 'active' : ''}`}
          onClick={() => setActiveTab('interrogative')}
        >
          Questions (?)
        </button>
        <button
          className={`tab-pill ${activeTab === 'verbToBe' ? 'active' : ''}`}
          onClick={() => setActiveTab('verbToBe')}
        >
          Verb 'TO BE'
        </button>
        <button
          className={`tab-pill ${activeTab === 'verbHave' ? 'active' : ''}`}
          onClick={() => setActiveTab('verbHave')}
        >
          Verb 'HAVE'
        </button>
      </div>

      {/* Active Tab Content Card */}
      <div className="glass-card" style={{ padding: '32px', marginBottom: '32px' }}>
        {activeTab === 'affirmative' && (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <span style={{ fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', color: 'var(--emerald-400)' }}>Affirmative Formula</span>
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.2rem', fontWeight: '700', color: 'var(--emerald-400)', background: 'var(--bg-input)', padding: '14px 20px', borderRadius: 'var(--radius-md)', marginBottom: '18px' }}>
              {aff.formula || meta.formula}
            </div>
            <p style={{ fontSize: '1rem', lineHeight: '1.7', marginBottom: '20px' }}>
              {aff.rule}
            </p>
            
            {aff.keyTip && (
              <div className="feedback-box success" style={{ marginBottom: '24px' }}>
                <Sparkles size={20} />
                <div>
                  <strong>Golden Teacher Tip: </strong> {aff.keyTip}
                </div>
              </div>
            )}

            {aff.table && (
              <table className="resume-table">
                <thead>
                  <tr>
                    <th>Subject Category</th>
                    <th>Verb Conjugation</th>
                    <th>Example Sentence</th>
                    <th>Audio</th>
                  </tr>
                </thead>
                <tbody>
                  {aff.table.map((row, idx) => (
                    <tr key={idx}>
                      <td style={{ fontWeight: '700', color: 'var(--text-main)' }}>{row.subject}</td>
                      <td style={{ fontFamily: 'var(--font-mono)', color: 'var(--emerald-400)', fontWeight: '700' }}>{row.verb}</td>
                      <td>{row.example}</td>
                      <td>
                        <button className="audio-pronounce-btn" onClick={() => handleSpeak(row.example)}>
                          <Volume2 size={13} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}

            {aff.examples && !aff.table && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {aff.examples.map((ex, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'var(--bg-input)', padding: '12px 16px', borderRadius: 'var(--radius-md)' }}>
                    <span style={{ fontSize: '0.98rem', fontWeight: '600' }}>"{ex}"</span>
                    <button className="audio-pronounce-btn" onClick={() => handleSpeak(ex)}>
                      <Volume2 size={13} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {activeTab === 'negative' && (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <span style={{ fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', color: 'var(--rose-500)' }}>Negative Formula</span>
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.2rem', fontWeight: '700', color: 'var(--rose-500)', background: 'var(--bg-input)', padding: '14px 20px', borderRadius: 'var(--radius-md)', marginBottom: '18px' }}>
              {neg.formula}
            </div>
            <p style={{ fontSize: '1rem', lineHeight: '1.7', marginBottom: '20px' }}>
              {neg.rule}
            </p>

            {(neg.keyTip || neg.auxRule) && (
              <div className="feedback-box error" style={{ marginBottom: '24px' }}>
                <AlertTriangle size={20} />
                <div>
                  <strong>Crucial Negative Rule: </strong> {neg.keyTip || neg.auxRule}
                </div>
              </div>
            )}

            {neg.table && (
              <table className="resume-table">
                <thead>
                  <tr>
                    <th>Subject</th>
                    <th>Negative Auxiliary</th>
                    <th>Base Verb</th>
                    <th>Example</th>
                    <th>Audio</th>
                  </tr>
                </thead>
                <tbody>
                  {neg.table.map((row, idx) => (
                    <tr key={idx}>
                      <td style={{ fontWeight: '700', color: 'var(--text-main)' }}>{row.subject}</td>
                      <td style={{ fontFamily: 'var(--font-mono)', color: 'var(--rose-500)', fontWeight: '700' }}>{row.aux}</td>
                      <td style={{ fontFamily: 'var(--font-mono)', color: 'var(--emerald-400)' }}>{row.verb}</td>
                      <td>{row.example}</td>
                      <td>
                        <button className="audio-pronounce-btn" onClick={() => handleSpeak(row.example)}>
                          <Volume2 size={13} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}

            {neg.examples && !neg.table && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {neg.examples.map((ex, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'var(--bg-input)', padding: '12px 16px', borderRadius: 'var(--radius-md)' }}>
                    <span style={{ fontSize: '0.98rem', fontWeight: '600' }}>"{ex}"</span>
                    <button className="audio-pronounce-btn" onClick={() => handleSpeak(ex)}>
                      <Volume2 size={13} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {activeTab === 'interrogative' && (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <span style={{ fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', color: 'var(--amber-400)' }}>Question Formula</span>
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.2rem', fontWeight: '700', color: 'var(--amber-400)', background: 'var(--bg-input)', padding: '14px 20px', borderRadius: 'var(--radius-md)', marginBottom: '18px' }}>
              {intg.formula}
            </div>
            <p style={{ fontSize: '1rem', lineHeight: '1.7', marginBottom: '20px' }}>
              {intg.rule}
            </p>

            {intg.inversionRule && (
              <div className="feedback-box success" style={{ marginBottom: '20px' }}>
                <Sparkles size={20} />
                <div>
                  <strong>Inversion Law: </strong> {intg.inversionRule}
                </div>
              </div>
            )}

            {intg.types && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {intg.types.map((type, idx) => (
                  <div key={idx} style={{ background: 'var(--bg-input)', padding: '20px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
                    <h4 style={{ fontSize: '1.1rem', color: 'var(--cyan-400)', marginBottom: '6px' }}>{type.typeName}</h4>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.88rem', color: 'var(--amber-400)', marginBottom: '10px' }}>
                      Formula: {type.formula}
                    </div>
                    {type.explanation && (
                      <p style={{ fontSize: '0.85rem', marginBottom: '10px', color: 'var(--text-secondary)' }}>{type.explanation}</p>
                    )}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {type.examples.map((item, eIdx) => (
                        <div key={eIdx} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'var(--bg-card)', padding: '10px 14px', borderRadius: 'var(--radius-sm)' }}>
                          <div>
                            <div style={{ fontWeight: '600' }}>Q: {item.q}</div>
                            <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>A: {item.a}</div>
                          </div>
                          <button className="audio-pronounce-btn" onClick={() => handleSpeak(item.q)}>
                            <Volume2 size={13} />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {intg.examples && !intg.types && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {intg.examples.map((ex, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'var(--bg-input)', padding: '12px 16px', borderRadius: 'var(--radius-md)' }}>
                    <span style={{ fontSize: '0.98rem', fontWeight: '600' }}>"{ex}"</span>
                    <button className="audio-pronounce-btn" onClick={() => handleSpeak(ex)}>
                      <Volume2 size={13} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {activeTab === 'verbToBe' && (
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.2rem', fontWeight: '700', color: 'var(--indigo-500)', background: 'var(--bg-input)', padding: '14px 20px', borderRadius: 'var(--radius-md)', marginBottom: '18px' }}>
              {toBe.formula}
            </div>
            <p style={{ fontSize: '1rem', lineHeight: '1.7', marginBottom: '20px' }}>
              {toBe.rule || toBe.title}
            </p>

            {toBe.warning && (
              <div className="feedback-box error" style={{ marginBottom: '20px' }}>
                <AlertTriangle size={20} />
                <div>
                  <strong>Never say: </strong> {toBe.warning}
                </div>
              </div>
            )}

            {toBe.table && (
              <table className="resume-table">
                <thead>
                  <tr>
                    <th>Subject</th>
                    <th>Positive (+)</th>
                    <th>Negative (–)</th>
                    <th>Question (?)</th>
                  </tr>
                </thead>
                <tbody>
                  {toBe.table.map((row, idx) => (
                    <tr key={idx}>
                      <td style={{ fontWeight: '700' }}>{row.subject}</td>
                      <td style={{ fontFamily: 'var(--font-mono)', color: 'var(--emerald-400)', fontWeight: '700' }}>{row.pos}</td>
                      <td style={{ fontFamily: 'var(--font-mono)', color: 'var(--rose-500)', fontWeight: '700' }}>{row.neg}</td>
                      <td style={{ fontFamily: 'var(--font-mono)', color: 'var(--cyan-400)' }}>{row.q}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}

            {toBe.examples && !toBe.table && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {toBe.examples.map((ex, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'var(--bg-input)', padding: '12px 16px', borderRadius: 'var(--radius-md)' }}>
                    <span style={{ fontSize: '0.98rem', fontWeight: '600' }}>"{ex}"</span>
                    <button className="audio-pronounce-btn" onClick={() => handleSpeak(ex)}>
                      <Volume2 size={13} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {activeTab === 'verbHave' && (
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.2rem', fontWeight: '700', color: 'var(--amber-400)', background: 'var(--bg-input)', padding: '14px 20px', borderRadius: 'var(--radius-md)', marginBottom: '18px' }}>
              {toHave.formula}
            </div>
            <p style={{ fontSize: '1rem', lineHeight: '1.7', marginBottom: '20px' }}>
              {toHave.rule || toHave.title}
            </p>

            {toHave.table && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {toHave.table.map((row, idx) => (
                  <div key={idx} style={{ background: 'var(--bg-input)', padding: '14px 18px', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div>
                      <span style={{ fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', color: 'var(--indigo-500)', display: 'block' }}>
                        {row.type}
                      </span>
                      <span style={{ fontSize: '1.05rem', fontWeight: '600' }}>{row.example}</span>
                    </div>
                    <button className="audio-pronounce-btn" onClick={() => handleSpeak(row.example)}>
                      <Volume2 size={13} />
                    </button>
                  </div>
                ))}
              </div>
            )}

            {toHave.examples && !toHave.table && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {toHave.examples.map((ex, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'var(--bg-input)', padding: '12px 16px', borderRadius: 'var(--radius-md)' }}>
                    <span style={{ fontSize: '0.98rem', fontWeight: '600' }}>"{ex}"</span>
                    <button className="audio-pronounce-btn" onClick={() => handleSpeak(ex)}>
                      <Volume2 size={13} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
