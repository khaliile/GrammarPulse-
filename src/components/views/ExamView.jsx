import React, { useState, useEffect } from 'react';
import { 
  GraduationCap, 
  Sparkles, 
  Award, 
  Check, 
  X, 
  RotateCcw, 
  Printer, 
  Timer, 
  ShieldCheck,
  ChevronRight,
  BookOpen
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { PRESENT_SIMPLE_DATA } from '../../data/presentSimpleData';
import { soundManager } from '../../utils/audio';

export default function ExamView({ onAddXp, onNavigateToResume, tenseData, tenseMeta }) {
  const data = tenseData || PRESENT_SIMPLE_DATA;
  const meta = tenseMeta || data.meta;
  const masteryExam = data.exercises?.masteryExam || PRESENT_SIMPLE_DATA.exercises.masteryExam;

  const [examStarted, setExamStarted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [isFinished, setIsFinished] = useState(false);
  const [secondsRemaining, setSecondsRemaining] = useState(300); // 5 minutes
  const [studentName, setStudentName] = useState('English Scholar');

  // Reset exam whenever active tense changes
  useEffect(() => {
    setExamStarted(false);
    setCurrentIndex(0);
    setSelectedAnswers({});
    setIsFinished(false);
    setSecondsRemaining(300);
  }, [meta?.id]);

  const handleFinishExam = () => {
    setIsFinished(true);
    // Calculate score
    let score = 0;
    masteryExam.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correct) {
        score += 1;
      }
    });

    const percent = Math.round((score / masteryExam.length) * 100);
    if (percent >= 70) {
      soundManager.playComplete();
      onAddXp(150);
      try {
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.5 }
        });
      } catch {
        // Fallback
      }
    } else {
      soundManager.playError();
      onAddXp(30);
    }
  };

  // Timer Effect
  useEffect(() => {
    if (!examStarted || isFinished) return;
    const interval = setInterval(() => {
      setSecondsRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          handleFinishExam();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [examStarted, isFinished, selectedAnswers]);

  const handleStartExam = () => {
    soundManager.playClick();
    setExamStarted(true);
    setCurrentIndex(0);
    setSelectedAnswers({});
    setIsFinished(false);
    setSecondsRemaining(300);
  };

  const handleSelectOption = (qIdx, optIdx) => {
    if (isFinished) return;
    soundManager.playClick();
    setSelectedAnswers((prev) => ({
      ...prev,
      [qIdx]: optIdx,
    }));
  };

  const currentQ = masteryExam[currentIndex];

  const calculateScore = () => {
    let score = 0;
    masteryExam.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correct) score++;
    });
    return score;
  };

  const formatTimer = (secs) => {
    const mins = Math.floor(secs / 60);
    const remainder = secs % 60;
    return `${mins}:${remainder < 10 ? '0' : ''}${remainder}`;
  };

  const score = calculateScore();
  const percentage = Math.round((score / masteryExam.length) * 100);

  return (
    <div className="content-max-width">
      {/* Header */}
      <div className="section-hero">
        <span className="section-tag" style={{ borderColor: meta.accentColor }}>
          <Sparkles size={14} /> {meta.name} • Module 09: Formal Evaluation
        </span>
        <h2>Mastery Exam & Certificate of Competence</h2>
        <p>
          Demonstrate total command over <strong>{meta.name}</strong> across CEFR {meta.level} standards.
        </p>
      </div>

      {!examStarted ? (
        /* Pre-Exam Briefing Card */
        <div className="glass-card" style={{ padding: '40px', textAlign: 'center', maxWidth: '880px', width: '100%', margin: '0 auto' }}>
          <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'var(--grad-hero)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
            <GraduationCap size={32} />
          </div>
          <h3 style={{ fontSize: '1.6rem', marginBottom: '10px' }}>Official {meta.name} Assessment</h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: '24px' }}>
            {masteryExam.length} rigorous questions testing auxiliary agreement, inflection laws, 
            aspect nuances, word order, and real-world usage.
          </p>

          <div style={{ background: 'var(--bg-input)', padding: '16px', borderRadius: 'var(--radius-md)', marginBottom: '24px', display: 'flex', justifyContent: 'space-around', textAlign: 'center' }}>
            <div>
              <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Questions</span>
              <div style={{ fontSize: '1.2rem', fontWeight: '800' }}>10 MCQs</div>
            </div>
            <div>
              <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Time Limit</span>
              <div style={{ fontSize: '1.2rem', fontWeight: '800' }}>5 Minutes</div>
            </div>
            <div>
              <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Pass Mark</span>
              <div style={{ fontSize: '1.2rem', fontWeight: '800', color: 'var(--emerald-400)' }}>70% (7/10)</div>
            </div>
          </div>

          <div style={{ marginBottom: '24px', textAlign: 'left' }}>
            <label style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-secondary)', display: 'block', marginBottom: '6px' }}>
              Candidate Name (for Certificate):
            </label>
            <input
              type="text"
              className="custom-input"
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
              placeholder="Enter your name..."
            />
          </div>

          <button className="btn-primary" onClick={handleStartExam} style={{ width: '100%', padding: '14px' }}>
            Begin Assessment Now
          </button>
        </div>
      ) : !isFinished ? (
        /* Active Exam View */
        <div className="exercise-workspace">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
            <span style={{ fontSize: '0.82rem', fontWeight: '700', textTransform: 'uppercase', color: 'var(--indigo-500)' }}>
              Question {currentIndex + 1} of {masteryExam.length} • Level {currentQ.level}
            </span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: '700', color: secondsRemaining < 60 ? 'var(--rose-500)' : 'var(--amber-400)' }}>
              <Timer size={18} />
              <span>{formatTimer(secondsRemaining)}</span>
            </div>
          </div>

          <div className="exercise-progress-bar">
            <div className="progress-fill" style={{ width: `${((currentIndex + 1) / masteryExam.length) * 100}%` }}></div>
          </div>

          <h3 style={{ fontSize: '1.3rem', marginBottom: '24px', lineHeight: '1.5' }}>
            {currentQ.question}
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '28px' }}>
            {currentQ.options.map((opt, idx) => {
              const isSelected = selectedAnswers[currentIndex] === idx;
              return (
                <button
                  key={idx}
                  className={`quiz-option ${isSelected ? 'correct' : ''}`}
                  onClick={() => handleSelectOption(currentIndex, idx)}
                  style={{
                    background: isSelected ? 'rgba(99, 102, 241, 0.2)' : 'var(--bg-input)',
                    borderColor: isSelected ? 'var(--indigo-500)' : 'var(--border-subtle)',
                    color: isSelected ? 'white' : 'var(--text-main)',
                  }}
                >
                  <span>{opt}</span>
                  {isSelected && <Check size={18} />}
                </button>
              );
            })}
          </div>

          {/* Navigation Controls */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <button
              className="btn-secondary"
              onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
              disabled={currentIndex === 0}
            >
              Previous
            </button>

            {currentIndex < masteryExam.length - 1 ? (
              <button
                className="btn-primary"
                onClick={() => setCurrentIndex((prev) => prev + 1)}
                disabled={selectedAnswers[currentIndex] === undefined}
              >
                Next <ChevronRight size={18} />
              </button>
            ) : (
              <button
                className="btn-primary"
                onClick={handleFinishExam}
                style={{ background: 'var(--emerald-500)' }}
              >
                Submit Exam & Grade
              </button>
            )}
          </div>
        </div>
      ) : (
        /* Exam Results & Certificate */
        <div>
          <div className="glass-card" style={{ padding: '36px', textAlign: 'center', marginBottom: '32px' }}>
            <div style={{ 
              width: '72px', 
              height: '72px', 
              borderRadius: '50%', 
              background: percentage >= 70 ? 'rgba(16, 185, 129, 0.2)' : 'rgba(244, 63, 94, 0.2)', 
              color: percentage >= 70 ? 'var(--emerald-400)' : 'var(--rose-500)', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              margin: '0 auto 16px' 
            }}>
              {percentage >= 70 ? <Award size={36} /> : <X size={36} />}
            </div>

            <h3 style={{ fontSize: '1.8rem', marginBottom: '8px' }}>
              {percentage >= 70 ? 'Congratulations! You Passed!' : 'Review Recommended'}
            </h3>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', marginBottom: '24px' }}>
              You scored <strong style={{ color: 'var(--text-main)' }}>{score} / {masteryExam.length} ({percentage}%)</strong>
            </p>

            <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button className="btn-secondary" onClick={handleStartExam}>
                <RotateCcw size={16} /> Retake Exam
              </button>
              <button className="btn-primary" onClick={() => window.print()}>
                <Printer size={16} /> Print Certificate
              </button>
            </div>
          </div>

          {/* Printable Official Certificate */}
          {percentage >= 70 && (
            <div style={{
              background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.95), rgba(30, 41, 59, 0.98))',
              border: '4px double var(--indigo-500)',
              borderRadius: 'var(--radius-xl)',
              padding: '48px 40px',
              textAlign: 'center',
              boxShadow: 'var(--shadow-lg)',
              position: 'relative',
              overflow: 'hidden',
              marginBottom: '40px'
            }}>
              <div style={{ position: 'absolute', top: '-60px', right: '-60px', width: '180px', height: '180px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(99, 102, 241, 0.3), transparent 70%)' }}></div>

              <span style={{ fontSize: '0.85rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--cyan-400)', fontWeight: '800' }}>
                Certificate of Grammar Mastery
              </span>
              <h2 style={{ fontSize: '2.4rem', margin: '14px 0 6px', fontWeight: '800', background: 'var(--grad-hero)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                {meta.name} Proficiency
              </h2>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                This credential certifies that
              </p>

              <div style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--text-main)', margin: '16px 0', borderBottom: '2px solid var(--border-medium)', display: 'inline-block', padding: '0 32px 8px' }}>
                {studentName || 'Student'}
              </div>

              <p style={{ fontSize: '0.95rem', maxWidth: '820px', width: '100%', margin: '0 auto 28px', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                has demonstrated command of English {meta.name} syntax, auxiliary architecture, time signal calibration, and real-world fluency.
              </p>

              <div style={{ display: 'flex', justifyContent: 'space-around', borderTop: '1px solid var(--border-subtle)', paddingTop: '24px', maxWidth: '820px', width: '100%', margin: '0 auto' }}>
                <div>
                  <div style={{ fontSize: '0.78rem', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Score & Grade</div>
                  <div style={{ fontSize: '1.2rem', fontWeight: '800', color: 'var(--emerald-400)' }}>{percentage}% (Grade A)</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.78rem', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Curriculum Standard</div>
                  <div style={{ fontSize: '1.2rem', fontWeight: '800', color: 'var(--indigo-500)' }}>CEFR {meta.level}</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.78rem', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Status</div>
                  <div style={{ fontSize: '1.2rem', fontWeight: '800', color: 'var(--cyan-400)' }}>Certified</div>
                </div>
              </div>
            </div>
          )}

          {/* Detailed Question Review */}
          <h3 style={{ fontSize: '1.3rem', marginBottom: '16px' }}>Detailed Question Breakdown</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {masteryExam.map((q, idx) => {
              const isCorrect = selectedAnswers[idx] === q.correct;
              return (
                <div key={idx} className="glass-card" style={{ padding: '20px', borderLeft: isCorrect ? '4px solid var(--emerald-500)' : '4px solid var(--rose-500)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span style={{ fontSize: '0.8rem', fontWeight: '700', color: isCorrect ? 'var(--emerald-400)' : 'var(--rose-500)' }}>
                      Q{idx + 1}: {isCorrect ? 'Correct (+15 XP)' : 'Incorrect'}
                    </span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Level {q.level}</span>
                  </div>
                  <div style={{ fontSize: '1.05rem', fontWeight: '600', marginBottom: '8px' }}>
                    {q.question}
                  </div>
                  <div style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                    Your answer: <span style={{ color: isCorrect ? 'var(--emerald-400)' : 'var(--rose-500)', fontWeight: '700' }}>{q.options[selectedAnswers[idx]] || 'None'}</span>
                  </div>
                  {!isCorrect && (
                    <div style={{ fontSize: '0.88rem', color: 'var(--emerald-400)', marginTop: '4px' }}>
                      Correct answer: <strong>{q.options[q.correct]}</strong>
                    </div>
                  )}
                  <p style={{ fontSize: '0.82rem', marginTop: '8px', color: 'var(--text-muted)' }}>
                    Explanation: {q.explanation}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
