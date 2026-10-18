import React, { useState, useEffect } from 'react';
import { 
  CheckCircle2, 
  HelpCircle, 
  RotateCcw, 
  Sparkles, 
  Volume2, 
  ArrowRight, 
  Award, 
  Check, 
  X, 
  AlertCircle,
  Lightbulb,
  CornerDownLeft,
  ChevronRight
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { PRESENT_SIMPLE_DATA } from '../../data/presentSimpleData';
import { soundManager } from '../../utils/audio';

const MODES = [
  { id: 'quiz', label: '1. Multi-Choice Quiz', icon: HelpCircle },
  { id: 'fillBlanks', label: '2. Fill-in-the-Blanks', icon: CheckCircle2 },
  { id: 'scrambler', label: '3. Sentence Scrambler', icon: CornerDownLeft },
  { id: 'errorDetective', label: '4. Error Detective', icon: AlertCircle },
  { id: 'adverbs', label: '5. Signal / Adverb Slotting', icon: Lightbulb },
];

export default function ExercisesView({ onAddXp, tenseData, tenseMeta }) {
  const data = tenseData || PRESENT_SIMPLE_DATA;
  const meta = tenseMeta || data.meta;
  const exercises = data.exercises || PRESENT_SIMPLE_DATA.exercises;
  const [activeMode, setActiveMode] = useState('quiz');

  // Quiz State
  const [quizIndex, setQuizIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isQuizSubmitted, setIsQuizSubmitted] = useState(false);
  const [quizScore, setQuizScore] = useState(0);

  // Fill in blanks state
  const [fbIndex, setFbIndex] = useState(0);
  const [fbAnswer, setFbAnswer] = useState('');
  const [fbSubmitted, setFbSubmitted] = useState(false);
  const [fbIsCorrect, setFbIsCorrect] = useState(false);
  const [fbShowHint, setFbShowHint] = useState(false);

  // Scrambler state
  const [scIndex, setScIndex] = useState(0);
  const [scSelectedTokens, setScSelectedTokens] = useState([]);
  const [scSubmitted, setScSubmitted] = useState(false);
  const [scIsCorrect, setScIsCorrect] = useState(false);

  // Error detective state
  const [edIndex, setEdIndex] = useState(0);
  const [edSelected, setEdSelected] = useState(null);
  const [edSubmitted, setEdSubmitted] = useState(false);

  // Adverb placement state
  const [advIndex, setAdvIndex] = useState(0);
  const [advSelectedSlot, setAdvSelectedSlot] = useState(null);
  const [advSubmitted, setAdvSubmitted] = useState(false);

  // Reset exercise states whenever active tense changes
  useEffect(() => {
    setQuizIndex(0);
    setSelectedOption(null);
    setIsQuizSubmitted(false);
    setFbIndex(0);
    setFbAnswer('');
    setFbSubmitted(false);
    setFbIsCorrect(false);
    setFbShowHint(false);
    setScIndex(0);
    setScSelectedTokens([]);
    setScSubmitted(false);
    setScIsCorrect(false);
    setEdIndex(0);
    setEdSelected(null);
    setEdSubmitted(false);
    setAdvIndex(0);
    setAdvSelectedSlot(null);
    setAdvSubmitted(false);
  }, [meta?.id]);

  const triggerCelebration = () => {
    soundManager.playComplete();
    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 }
      });
    } catch {
      // Fallback
    }
  };

  const handleSpeak = (text) => {
    soundManager.speak(text);
  };

  // --- Quiz Handlers ---
  const currentQuiz = exercises.quiz[quizIndex];
  const handleSelectQuizOption = (index) => {
    if (isQuizSubmitted) return;
    soundManager.playClick();
    setSelectedOption(index);
    setIsQuizSubmitted(true);

    if (index === currentQuiz.correct) {
      soundManager.playSuccess();
      setQuizScore((prev) => prev + 1);
      onAddXp(20);
      if (quizIndex === exercises.quiz.length - 1) {
        triggerCelebration();
      }
    } else {
      soundManager.playError();
    }
  };

  const handleNextQuiz = () => {
    soundManager.playClick();
    if (quizIndex < exercises.quiz.length - 1) {
      setQuizIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsQuizSubmitted(false);
    } else {
      // Reset quiz
      setQuizIndex(0);
      setSelectedOption(null);
      setIsQuizSubmitted(false);
      setQuizScore(0);
    }
  };

  // --- Fill in Blanks Handlers ---
  const currentFb = exercises.fillBlanks[fbIndex];
  const handleCheckFb = (e) => {
    e.preventDefault();
    if (!fbAnswer.trim() || fbSubmitted) return;

    const cleanInput = fbAnswer.trim().toLowerCase();
    const correctClean = currentFb.correctAnswer.toLowerCase();
    const altClean = currentFb.alternativeAnswer ? currentFb.alternativeAnswer.toLowerCase() : null;

    const isMatch = cleanInput === correctClean || (altClean && cleanInput === altClean);
    setFbSubmitted(true);
    setFbIsCorrect(isMatch);

    if (isMatch) {
      soundManager.playSuccess();
      onAddXp(25);
      if (fbIndex === exercises.fillBlanks.length - 1) {
        triggerCelebration();
      }
    } else {
      soundManager.playError();
    }
  };

  const handleNextFb = () => {
    soundManager.playClick();
    if (fbIndex < exercises.fillBlanks.length - 1) {
      setFbIndex((prev) => prev + 1);
      setFbAnswer('');
      setFbSubmitted(false);
      setFbIsCorrect(false);
      setFbShowHint(false);
    } else {
      setFbIndex(0);
      setFbAnswer('');
      setFbSubmitted(false);
      setFbIsCorrect(false);
      setFbShowHint(false);
    }
  };

  // --- Scrambler Handlers ---
  const currentSc = exercises.sentenceScrambler[scIndex];
  const handleAddToken = (token, tokenIdx) => {
    if (scSubmitted) return;
    soundManager.playClick();
    setScSelectedTokens([...scSelectedTokens, { token, tokenIdx }]);
  };

  const handleRemoveToken = (selectedIdx) => {
    if (scSubmitted) return;
    soundManager.playClick();
    const updated = [...scSelectedTokens];
    updated.splice(selectedIdx, 1);
    setScSelectedTokens(updated);
  };

  const handleCheckScramble = () => {
    if (scSubmitted) return;
    const constructed = scSelectedTokens.map((t) => t.token);
    const isMatch = constructed.join(' ') === currentSc.correctOrder.join(' ');
    setScSubmitted(true);
    setScIsCorrect(isMatch);

    if (isMatch) {
      soundManager.playSuccess();
      onAddXp(30);
      if (scIndex === exercises.sentenceScrambler.length - 1) {
        triggerCelebration();
      }
    } else {
      soundManager.playError();
    }
  };

  const handleNextScramble = () => {
    soundManager.playClick();
    if (scIndex < exercises.sentenceScrambler.length - 1) {
      setScIndex((prev) => prev + 1);
      setScSelectedTokens([]);
      setScSubmitted(false);
      setScIsCorrect(false);
    } else {
      setScIndex(0);
      setScSelectedTokens([]);
      setScSubmitted(false);
      setScIsCorrect(false);
    }
  };

  // --- Error Detective Handlers ---
  const currentEd = exercises.errorDetective[edIndex];
  const handleSelectEd = (idx) => {
    if (edSubmitted) return;
    soundManager.playClick();
    setEdSelected(idx);
    setEdSubmitted(true);

    if (idx === currentEd.correctIndex) {
      soundManager.playSuccess();
      onAddXp(25);
      if (edIndex === exercises.errorDetective.length - 1) {
        triggerCelebration();
      }
    } else {
      soundManager.playError();
    }
  };

  const handleNextEd = () => {
    soundManager.playClick();
    if (edIndex < exercises.errorDetective.length - 1) {
      setEdIndex((prev) => prev + 1);
      setEdSelected(null);
      setEdSubmitted(false);
    } else {
      setEdIndex(0);
      setEdSelected(null);
      setEdSubmitted(false);
    }
  };

  // --- Adverb Placement Handlers ---
  const currentAdv = exercises.adverbMastery[advIndex];
  const handleSelectSlot = (slotId) => {
    if (advSubmitted) return;
    soundManager.playClick();
    setAdvSelectedSlot(slotId);
    setAdvSubmitted(true);

    if (slotId === currentAdv.correctSlot) {
      soundManager.playSuccess();
      onAddXp(25);
      if (advIndex === exercises.adverbMastery.length - 1) {
        triggerCelebration();
      }
    } else {
      soundManager.playError();
    }
  };

  const handleNextAdv = () => {
    soundManager.playClick();
    if (advIndex < exercises.adverbMastery.length - 1) {
      setAdvIndex((prev) => prev + 1);
      setAdvSelectedSlot(null);
      setAdvSubmitted(false);
    } else {
      setAdvIndex(0);
      setAdvSelectedSlot(null);
      setAdvSubmitted(false);
    }
  };

  return (
    <div className="content-max-width">
      {/* Header */}
      <div className="section-hero">
        <span className="section-tag" style={{ borderColor: meta.accentColor }}>
          <Sparkles size={14} /> {meta.name} • Module 08: Practice & Mastery Studio
        </span>
        <h2>Interactive Grammar Workout</h2>
        <p>
          Five specialized training modes for <strong>{meta.name}</strong> designed to solidify spelling, auxiliary selection, word order, and syntax.
        </p>
      </div>

      {/* Mode Selector Tabs */}
      <div className="controls-row" style={{ marginBottom: '28px' }}>
        {MODES.map((mode) => {
          const Icon = mode.icon;
          const isSelected = activeMode === mode.id;
          return (
            <button
              key={mode.id}
              className={`selector-chip ${isSelected ? 'selected' : ''}`}
              onClick={() => {
                soundManager.playClick();
                setActiveMode(mode.id);
              }}
              style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
            >
              <Icon size={16} />
              <span>{mode.label}</span>
            </button>
          );
        })}
      </div>

      {/* ================= MODE 1: MULTI-CHOICE QUIZ ================= */}
      {activeMode === 'quiz' && (
        <div className="exercise-workspace">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
            <span style={{ fontSize: '0.82rem', fontWeight: '700', textTransform: 'uppercase', color: 'var(--indigo-500)' }}>
              Question {quizIndex + 1} of {exercises.quiz.length} • {currentQuiz.caseCategory}
            </span>
            <span style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--amber-400)' }}>
              Score: {quizScore} / {quizIndex + (isQuizSubmitted ? 1 : 0)}
            </span>
          </div>

          <div className="exercise-progress-bar">
            <div className="progress-fill" style={{ width: `${((quizIndex + 1) / exercises.quiz.length) * 100}%` }}></div>
          </div>

          <h3 style={{ fontSize: '1.25rem', marginBottom: '24px', lineHeight: '1.5' }}>
            {currentQuiz.question}
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px' }}>
            {currentQuiz.options.map((opt, idx) => {
              let optionClass = 'quiz-option';
              if (isQuizSubmitted) {
                if (idx === currentQuiz.correct) optionClass += ' correct';
                else if (idx === selectedOption) optionClass += ' incorrect';
              }
              return (
                <button
                  key={idx}
                  className={optionClass}
                  onClick={() => handleSelectQuizOption(idx)}
                  disabled={isQuizSubmitted}
                >
                  <span>{opt}</span>
                  {isQuizSubmitted && idx === currentQuiz.correct && <Check size={18} />}
                  {isQuizSubmitted && idx === selectedOption && idx !== currentQuiz.correct && <X size={18} />}
                </button>
              );
            })}
          </div>

          {/* Feedback & Teacher Note */}
          {isQuizSubmitted && (
            <div className={`feedback-box ${selectedOption === currentQuiz.correct ? 'success' : 'error'}`}>
              <AlertCircle size={22} style={{ flexShrink: 0 }} />
              <div>
                <strong>{selectedOption === currentQuiz.correct ? "Well Done! (+20 XP)" : "Not Quite Right"}</strong>
                <p style={{ marginTop: '4px', fontSize: '0.9rem' }}>{currentQuiz.explanation}</p>
              </div>
            </div>
          )}

          {isQuizSubmitted && (
            <div style={{ marginTop: '24px', display: 'flex', justifyContent: 'flex-end' }}>
              <button className="btn-primary" onClick={handleNextQuiz}>
                <span>{quizIndex < exercises.quiz.length - 1 ? 'Next Question' : 'Complete Quiz'}</span>
                <ChevronRight size={18} />
              </button>
            </div>
          )}
        </div>
      )}

      {/* ================= MODE 2: FILL IN THE BLANKS ================= */}
      {activeMode === 'fillBlanks' && (
        <div className="exercise-workspace">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
            <span style={{ fontSize: '0.82rem', fontWeight: '700', textTransform: 'uppercase', color: 'var(--indigo-500)' }}>
              Fill in Blank {fbIndex + 1} of {exercises.fillBlanks.length}
            </span>
          </div>

          <div className="exercise-progress-bar">
            <div className="progress-fill" style={{ width: `${((fbIndex + 1) / exercises.fillBlanks.length) * 100}%` }}></div>
          </div>

          <h3 style={{ fontSize: '1.25rem', marginBottom: '20px', lineHeight: '1.6' }}>
            {currentFb.sentence}
          </h3>

          <form onSubmit={handleCheckFb} style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '16px' }}>
            <input
              type="text"
              className="custom-input"
              value={fbAnswer}
              onChange={(e) => setFbAnswer(e.target.value)}
              placeholder="Type conjugated verb..."
              disabled={fbSubmitted}
              autoFocus
              style={{ maxWidth: '380px' }}
            />
            {!fbSubmitted ? (
              <button type="submit" className="btn-primary" disabled={!fbAnswer.trim()}>
                Check Answer
              </button>
            ) : (
              <button type="button" className="btn-primary" onClick={handleNextFb}>
                Next Question <ChevronRight size={18} />
              </button>
            )}
            <button
              type="button"
              className="btn-secondary"
              onClick={() => setFbShowHint(!fbShowHint)}
            >
              <Lightbulb size={16} /> Hint
            </button>
          </form>

          {fbShowHint && (
            <div style={{ fontSize: '0.85rem', color: 'var(--amber-400)', background: 'var(--bg-input)', padding: '10px 14px', borderRadius: 'var(--radius-sm)', marginBottom: '16px' }}>
              Hint: {currentFb.hint}
            </div>
          )}

          {fbSubmitted && (
            <div className={`feedback-box ${fbIsCorrect ? 'success' : 'error'}`}>
              <AlertCircle size={22} style={{ flexShrink: 0 }} />
              <div>
                <strong>{fbIsCorrect ? "Flawless! (+25 XP)" : `The correct answer is: ${currentFb.correctAnswer}`}</strong>
                <p style={{ marginTop: '4px', fontSize: '0.9rem' }}>{currentFb.explanation}</p>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ================= MODE 3: SENTENCE SCRAMBLER ================= */}
      {activeMode === 'scrambler' && (
        <div className="exercise-workspace">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
            <span style={{ fontSize: '0.82rem', fontWeight: '700', textTransform: 'uppercase', color: 'var(--indigo-500)' }}>
              Sentence Puzzle {scIndex + 1} of {exercises.sentenceScrambler.length}
            </span>
          </div>

          <div className="exercise-progress-bar">
            <div className="progress-fill" style={{ width: `${((scIndex + 1) / exercises.sentenceScrambler.length) * 100}%` }}></div>
          </div>

          <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', marginBottom: '12px' }}>
            Goal: Click the word chips in the exact order to build a grammatically correct sentence.
          </p>

          {/* Constructed Sentence Area */}
          <div className="token-chip-bank" style={{ minHeight: '64px', borderColor: 'var(--indigo-500)' }}>
            {scSelectedTokens.length === 0 ? (
              <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Click words below to assemble your sentence...</span>
            ) : (
              scSelectedTokens.map((item, idx) => (
                <button
                  key={idx}
                  className="reorder-token"
                  onClick={() => handleRemoveToken(idx)}
                  title="Click to remove"
                >
                  {item.token}
                </button>
              ))
            )}
          </div>

          {/* Available Words Pool */}
          <div style={{ margin: '18px 0' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', color: 'var(--text-muted)', display: 'block', marginBottom: '8px' }}>
              Available Word Chips:
            </span>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {currentSc.tokens.map((token, tIdx) => {
                const isUsed = scSelectedTokens.some((t) => t.tokenIdx === tIdx);
                return (
                  <button
                    key={tIdx}
                    className={`reorder-token ${isUsed ? 'used' : ''}`}
                    onClick={() => handleAddToken(token, tIdx)}
                    disabled={isUsed || scSubmitted}
                    style={{ background: isUsed ? 'var(--bg-input)' : 'var(--bg-card-hover)', color: isUsed ? 'var(--text-muted)' : 'var(--text-main)', border: '1px solid var(--border-subtle)' }}
                  >
                    {token}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Actions */}
          <div style={{ display: 'flex', gap: '12px', marginTop: '20px' }}>
            {!scSubmitted ? (
              <>
                <button
                  className="btn-primary"
                  onClick={handleCheckScramble}
                  disabled={scSelectedTokens.length < currentSc.tokens.length}
                >
                  Verify Sentence
                </button>
                <button
                  className="btn-secondary"
                  onClick={() => setScSelectedTokens([])}
                  disabled={scSelectedTokens.length === 0}
                >
                  <RotateCcw size={16} /> Reset
                </button>
              </>
            ) : (
              <button className="btn-primary" onClick={handleNextScramble}>
                Next Sentence <ChevronRight size={18} />
              </button>
            )}
          </div>

          {scSubmitted && (
            <div className={`feedback-box ${scIsCorrect ? 'success' : 'error'}`}>
              <AlertCircle size={22} style={{ flexShrink: 0 }} />
              <div>
                <strong>{scIsCorrect ? "Excellent Syntax! (+30 XP)" : `Target: "${currentSc.targetSentence}"`}</strong>
                <p style={{ marginTop: '4px', fontSize: '0.9rem' }}>Meaning: {currentSc.meaning}</p>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ================= MODE 4: ERROR DETECTIVE ================= */}
      {activeMode === 'errorDetective' && (
        <div className="exercise-workspace">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
            <span style={{ fontSize: '0.82rem', fontWeight: '700', textTransform: 'uppercase', color: 'var(--indigo-500)' }}>
              Case #{edIndex + 1} of {exercises.errorDetective.length} • Spot the Mistake
            </span>
          </div>

          <div className="exercise-progress-bar">
            <div className="progress-fill" style={{ width: `${((edIndex + 1) / exercises.errorDetective.length) * 100}%` }}></div>
          </div>

          <div style={{ background: 'rgba(244, 63, 94, 0.1)', border: '1px solid rgba(244, 63, 94, 0.3)', padding: '18px 24px', borderRadius: 'var(--radius-md)', marginBottom: '24px' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', color: 'var(--rose-500)', display: 'block', marginBottom: '4px' }}>
              Faulty Sentence:
            </span>
            <div style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--rose-500)' }}>
              "{currentEd.flawedSentence}"
            </div>
          </div>

          <h4 style={{ fontSize: '1rem', marginBottom: '14px', color: 'var(--text-main)' }}>
            Choose the grammatically sound correction:
          </h4>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px' }}>
            {currentEd.options.map((opt, idx) => {
              let optClass = 'quiz-option';
              if (edSubmitted) {
                if (idx === currentEd.correctIndex) optClass += ' correct';
                else if (idx === edSelected) optClass += ' incorrect';
              }
              return (
                <button
                  key={idx}
                  className={optClass}
                  onClick={() => handleSelectEd(idx)}
                  disabled={edSubmitted}
                >
                  <span>{opt}</span>
                  {edSubmitted && idx === currentEd.correctIndex && <Check size={18} />}
                </button>
              );
            })}
          </div>

          {edSubmitted && (
            <div className={`feedback-box ${edSelected === currentEd.correctIndex ? 'success' : 'error'}`}>
              <AlertCircle size={22} style={{ flexShrink: 0 }} />
              <div>
                <strong>{edSelected === currentEd.correctIndex ? "Spot On! (+25 XP)" : "Review the Rule"}</strong>
                <p style={{ marginTop: '4px', fontSize: '0.9rem' }}>{currentEd.explanation}</p>
              </div>
            </div>
          )}

          {edSubmitted && (
            <div style={{ marginTop: '24px', display: 'flex', justifyContent: 'flex-end' }}>
              <button className="btn-primary" onClick={handleNextEd}>
                Next Case <ChevronRight size={18} />
              </button>
            </div>
          )}
        </div>
      )}

      {/* ================= MODE 5: ADVERB SLOTTING ================= */}
      {activeMode === 'adverbs' && (
        <div className="exercise-workspace">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
            <span style={{ fontSize: '0.82rem', fontWeight: '700', textTransform: 'uppercase', color: 'var(--indigo-500)' }}>
              Adverb Challenge {advIndex + 1} of {exercises.adverbMastery.length}
            </span>
          </div>

          <div className="exercise-progress-bar">
            <div className="progress-fill" style={{ width: `${((advIndex + 1) / exercises.adverbMastery.length) * 100}%` }}></div>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
              Insert the adverb <strong style={{ color: 'var(--amber-400)', textTransform: 'uppercase' }}>"{currentAdv.adverb}"</strong> into the correct slot:
            </p>
          </div>

          {/* Interactive Slot Sentence */}
          <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '8px', background: 'var(--bg-input)', padding: '24px', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-medium)', fontSize: '1.2rem', fontWeight: '600', marginBottom: '24px' }}>
            {currentAdv.slots.map((item, idx) => {
              if (item.isSlot) {
                const isSelected = advSelectedSlot === item.id;
                const isCorrect = item.id === currentAdv.correctSlot;
                let slotBg = 'rgba(99, 102, 241, 0.2)';
                let slotBorder = '1px dashed var(--indigo-500)';
                if (advSubmitted) {
                  if (isCorrect) {
                    slotBg = 'var(--emerald-500)';
                    slotBorder = '1px solid var(--emerald-500)';
                  } else if (isSelected) {
                    slotBg = 'var(--rose-500)';
                    slotBorder = '1px solid var(--rose-500)';
                  }
                }
                return (
                  <button
                    key={idx}
                    onClick={() => handleSelectSlot(item.id)}
                    disabled={advSubmitted}
                    style={{
                      padding: '6px 14px',
                      borderRadius: 'var(--radius-sm)',
                      background: slotBg,
                      border: slotBorder,
                      color: 'white',
                      fontSize: '0.88rem',
                      fontWeight: '700',
                      cursor: advSubmitted ? 'default' : 'pointer',
                      transition: 'all var(--transition-fast)'
                    }}
                  >
                    {advSubmitted && isCorrect ? `[ ${currentAdv.adverb} ]` : `Slot #${item.id + 1}`}
                  </button>
                );
              }
              return <span key={idx}>{item.text}</span>;
            })}
          </div>

          {advSubmitted && (
            <div className={`feedback-box ${advSelectedSlot === currentAdv.correctSlot ? 'success' : 'error'}`}>
              <AlertCircle size={22} style={{ flexShrink: 0 }} />
              <div>
                <strong>{advSelectedSlot === currentAdv.correctSlot ? "Perfect Syntax! (+25 XP)" : "Syntactic Rule Reminder"}</strong>
                <p style={{ marginTop: '4px', fontSize: '0.9rem' }}>{currentAdv.explanation}</p>
              </div>
            </div>
          )}

          {advSubmitted && (
            <div style={{ marginTop: '24px', display: 'flex', justifyContent: 'flex-end' }}>
              <button className="btn-primary" onClick={handleNextAdv}>
                Next Challenge <ChevronRight size={18} />
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
