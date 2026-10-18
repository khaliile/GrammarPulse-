import React, { useState } from 'react';
import { 
  GitFork, 
  Lock, 
  Unlock, 
  Sparkles, 
  ShieldCheck, 
  Layers, 
  AlertCircle, 
  ChevronRight,
  Clock,
  Globe,
  Home,
  Calendar,
  Heart,
  Volume2,
  BookOpen,
  CheckCircle2,
  XCircle
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { soundManager } from '../../utils/audio';

import { TENSES_DATA } from '../../data/chaptersData';

export default function CourseWorkflowView({ onNavigateToSection, activeTense, onSelectTense }) {
  // User requested: "unlock all that to see how it work"
  const [unlockAll, setUnlockAll] = useState(true);
  const [activeWorkflowStep, setActiveWorkflowStep] = useState(1);

  const [selectedAspect, setSelectedAspect] = useState('all');

  // Live Simulator state (Unlocked across multiple English tenses: Past -> Present -> Future)
  const [simTense, setSimTense] = useState('pastSimple');
  const [simSubject, setSimSubject] = useState('he');
  const [simVerb, setSimVerb] = useState('study');
  const [simType, setSimType] = useState('affirmative');
  const [simAdverb, setSimAdverb] = useState('always');

  const handleTenseCardClick = (tense) => {
    soundManager.playClick();
    if (onSelectTense) onSelectTense(tense.id);
    if (onNavigateToSection) onNavigateToSection('previewStudio');
  };

  const computeSimulatedSentence = () => {
    const is3rdSingular = ['he', 'she', 'it', 'my friend', 'the train'].includes(simSubject.toLowerCase());
    const isFirstSingular = simSubject.toLowerCase() === 'i';
    const capSubject = simSubject.charAt(0).toUpperCase() + simSubject.slice(1);

    const getVerbForms = (v) => {
      if (v === 'be') {
        return {
          pres: is3rdSingular ? 'is' : (isFirstSingular ? 'am' : 'are'),
          past: is3rdSingular || isFirstSingular ? 'was' : 'were',
          v3: 'been',
          ing: 'being'
        };
      }
      if (v === 'have') {
        return { pres: is3rdSingular ? 'has' : 'have', past: 'had', v3: 'had', ing: 'having' };
      }
      if (v === 'go') {
        return { pres: is3rdSingular ? 'goes' : 'go', past: 'went', v3: 'gone', ing: 'going' };
      }
      if (v === 'study') {
        return { pres: is3rdSingular ? 'studies' : 'study', past: 'studied', v3: 'studied', ing: 'studying' };
      }
      if (v === 'play') {
        return { pres: is3rdSingular ? 'plays' : 'play', past: 'played', v3: 'played', ing: 'playing' };
      }
      if (v === 'watch') {
        return { pres: is3rdSingular ? 'watches' : 'watch', past: 'watched', v3: 'watched', ing: 'watching' };
      }
      if (v === 'fix') {
        return { pres: is3rdSingular ? 'fixes' : 'fix', past: 'fixed', v3: 'fixed', ing: 'fixing' };
      }
      return { pres: is3rdSingular ? v + 's' : v, past: v + 'ed', v3: v + 'ed', ing: v + 'ing' };
    };

    const forms = getVerbForms(simVerb);

    // 1. Past Simple
    if (simTense === 'pastSimple') {
      if (simType === 'affirmative') {
        if (simVerb === 'be') return `${capSubject} ${forms.past} punctual yesterday.`;
        return `${capSubject} ${forms.past} diligently yesterday afternoon.`;
      }
      if (simType === 'negative') {
        if (simVerb === 'be') return `${capSubject} ${forms.past} not late yesterday.`;
        return `${capSubject} didn't ${simVerb} yesterday.`;
      }
      if (simType === 'question') {
        if (simVerb === 'be') {
          const capPast = forms.past.charAt(0).toUpperCase() + forms.past.slice(1);
          return `${capPast} ${simSubject} ready yesterday?`;
        }
        return `Did ${simSubject} ${simVerb} yesterday?`;
      }
    }

    // 2. Present Simple
    if (simTense === 'presentSimple') {
      if (simType === 'affirmative') {
        if (simVerb === 'be') return `${capSubject} ${forms.pres} ${simAdverb} punctual.`;
        return `${capSubject} ${simAdverb} ${forms.pres} diligently.`;
      }
      if (simType === 'negative') {
        if (simVerb === 'be') return `${capSubject} ${forms.pres} not ${simAdverb} late.`;
        const aux = is3rdSingular ? "doesn't" : "don't";
        return `${capSubject} ${aux} ${simAdverb} ${simVerb} on Sundays.`;
      }
      if (simType === 'question') {
        if (simVerb === 'be') {
          const capBe = forms.pres.charAt(0).toUpperCase() + forms.pres.slice(1);
          return `${capBe} ${simSubject} ${simAdverb} ready for class?`;
        }
        const aux = is3rdSingular ? "Does" : "Do";
        return `${aux} ${simSubject} ${simAdverb} ${simVerb} every morning?`;
      }
    }

    // 3. Future Simple
    if (simTense === 'futureSimple') {
      if (simType === 'affirmative') {
        return `${capSubject} will definitely ${simVerb === 'be' ? 'be punctual' : simVerb + ' diligently'} tomorrow.`;
      }
      if (simType === 'negative') {
        return `${capSubject} won't ${simVerb === 'be' ? 'be late' : simVerb} tomorrow.`;
      }
      if (simType === 'question') {
        return `Will ${simSubject} ${simVerb === 'be' ? 'be ready' : simVerb} tomorrow?`;
      }
    }

    // 4. Past Continuous
    if (simTense === 'pastContinuous') {
      const capPast = forms.past.charAt(0).toUpperCase() + forms.past.slice(1);
      if (simType === 'affirmative') {
        return `${capSubject} ${forms.past} ${simVerb === 'be' ? 'being very patient' : forms.ing + ' diligently'} when the phone rang.`;
      }
      if (simType === 'negative') {
        return `${capSubject} ${forms.past} not ${simVerb === 'be' ? 'being careless' : forms.ing} at that moment.`;
      }
      if (simType === 'question') {
        return `${capPast} ${simSubject} ${simVerb === 'be' ? 'being attentive' : forms.ing} when you called?`;
      }
    }

    // 5. Present Continuous
    if (simTense === 'presentContinuous') {
      const beAux = forms.pres;
      const capBe = beAux.charAt(0).toUpperCase() + beAux.slice(1);
      if (simType === 'affirmative') {
        return `${capSubject} ${beAux} ${simVerb === 'be' ? 'being very helpful' : forms.ing + ' diligently'} right now.`;
      }
      if (simType === 'negative') {
        return `${capSubject} ${beAux} not ${simVerb === 'be' ? 'being noisy' : forms.ing} at this moment.`;
      }
      if (simType === 'question') {
        return `${capBe} ${simSubject} ${simVerb === 'be' ? 'being serious' : forms.ing} right now?`;
      }
    }

    // 6. Future Continuous
    if (simTense === 'futureContinuous') {
      if (simType === 'affirmative') {
        return `${capSubject} will be ${simVerb === 'be' ? 'being tested' : forms.ing + ' diligently'} this time tomorrow.`;
      }
      if (simType === 'negative') {
        return `${capSubject} won't be ${simVerb === 'be' ? 'waiting' : forms.ing} tomorrow morning.`;
      }
      if (simType === 'question') {
        return `Will ${simSubject} be ${simVerb === 'be' ? 'attending' : forms.ing} at 10 AM tomorrow?`;
      }
    }

    // 7. Past Perfect Simple
    if (simTense === 'pastPerfect') {
      if (simType === 'affirmative') {
        return `${capSubject} had already ${forms.v3} before the deadline.`;
      }
      if (simType === 'negative') {
        return `${capSubject} hadn't ${forms.v3} before the announcement.`;
      }
      if (simType === 'question') {
        return `Had ${simSubject} already ${forms.v3} before the meeting started?`;
      }
    }

    // 8. Present Perfect Simple
    if (simTense === 'presentPerfect') {
      const aux = is3rdSingular ? 'has' : 'have';
      const capAux = is3rdSingular ? 'Has' : 'Have';
      const negAux = is3rdSingular ? "hasn't" : "haven't";
      if (simType === 'affirmative') {
        return `${capSubject} ${aux} already ${forms.v3} diligently.`;
      }
      if (simType === 'negative') {
        return `${capSubject} ${negAux} ${forms.v3} yet.`;
      }
      if (simType === 'question') {
        return `${capAux} ${simSubject} ever ${forms.v3} before?`;
      }
    }

    return '';
  };

  return (
    <div className="content-max-width">
      {/* Hero Header */}
      <div className="section-hero">
        <span className="section-tag" style={{ color: '#10b981', borderColor: 'rgba(16, 185, 129, 0.3)', background: 'rgba(16, 185, 129, 0.1)' }}>
          <GitFork size={14} /> Module 10: Course Synthesis & 12-Tense Roadmap
        </span>
        <h2>Mastery Workflow & English Tenses Roadmap</h2>
        <p>
          Pedagogical execution decision tree summarizing Present Simple, and the complete 12-tense English grammar curriculum trajectory.
        </p>

        {/* Global Progress Indicator with Unlock All Switch */}
        <div className="roadmap-global-metric">
          <div className="metric-header">
            <span className="metric-label">Curriculum Progress (Interactive Roadmap)</span>
            <span className="metric-value">
              {unlockAll ? '14 / 14 Chapters Unlocked (100% Full Access Explorer)' : '1 / 14 Tenses Mastered (7.1%)'}
            </span>
          </div>
          <div className="roadmap-progress-track">
            <div 
              className="roadmap-progress-bar" 
              style={{ width: unlockAll ? '100%' : '7.1%' }}
            ></div>
          </div>
          <div className="metric-footer" style={{ alignItems: 'center' }}>
            <span className="status-live">
              {unlockAll ? '✨ All 14 Tense Studios Unlocked (Past → Present → Future Cycles)' : '🟢 Present Simple: Fully Unlocked & Active'}
            </span>
            <button 
              className="unlock-mode-toggle"
              onClick={() => {
                soundManager.playClick();
                setUnlockAll(!unlockAll);
              }}
              title="Toggle all chapters unlocked mode"
            >
              {unlockAll ? <Unlock size={14} /> : <Lock size={14} />}
              <span>{unlockAll ? 'All 14 Tenses Unlocked' : 'Simulate Locked Mode'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* SECTION 1: THE 5-STEP PEDAGOGICAL WORKFLOW */}
      <section className="workflow-summary-section">
        <div className="section-header-compact">
          <div className="title-row">
            <Layers size={20} className="icon-emerald" />
            <h3>Part 1: The Present Simple Master Execution Workflow</h3>
          </div>
          <p className="section-desc">
            The systematic 5-step cognitive framework used by fluent speakers to produce correct Present Simple sentences instantly.
          </p>
        </div>

        {/* Step Tabs */}
        <div className="workflow-step-tabs">
          {[
            { step: 1, title: '1. Reality Trigger', desc: 'Identify Use Case' },
            { step: 2, title: '2. Subject Agreement', desc: 'Singular vs Plural' },
            { step: 3, title: '3. Spelling Engine', desc: '+s, -es, -ies, irreg' },
            { step: 4, title: '4. Polarity & Auxiliary', desc: '+, –, ? Dynamics' },
            { step: 5, title: '5. Adverb Slotting', desc: 'Mid & Post Syntax' },
          ].map((item) => (
            <button
              key={item.step}
              className={`workflow-step-tab ${activeWorkflowStep === item.step ? 'active' : ''}`}
              onClick={() => {
                soundManager.playClick();
                setActiveWorkflowStep(item.step);
              }}
            >
              <span className="step-num">{item.step}</span>
              <div className="step-labels">
                <strong>{item.title}</strong>
                <small>{item.desc}</small>
              </div>
            </button>
          ))}
        </div>

        {/* Active Step Card */}
        <div className="workflow-card-body card">
          {activeWorkflowStep === 1 && (
            <div className="step-content">
              <div className="step-badge">Phase 1: Cognitive Trigger</div>
              <h4>Why use the Present Simple? (The 5 Fundamental Realities)</h4>
              <p>
                Before constructing any sentence, evaluate the nature of reality you want to convey. The Present Simple is strictly reserved for enduring, repeated, or timeless truths:
              </p>
              <div className="realities-grid">
                <div className="reality-pill">
                  <Clock size={16} className="icon-emerald" />
                  <div>
                    <strong>Habits & Routines</strong>
                    <p>Actions repeated on a recurring cycle ("I commute daily").</p>
                  </div>
                </div>
                <div className="reality-pill">
                  <Globe size={16} className="icon-blue" />
                  <div>
                    <strong>Universal Scientific Laws</strong>
                    <p>Timeless physical facts ("Water boils at 100°C").</p>
                  </div>
                </div>
                <div className="reality-pill">
                  <Home size={16} className="icon-purple" />
                  <div>
                    <strong>Permanent Living States</strong>
                    <p>Enduring conditions ("She works at a research lab").</p>
                  </div>
                </div>
                <div className="reality-pill">
                  <Calendar size={16} className="icon-orange" />
                  <div>
                    <strong>Timetables & Fixed Schedules</strong>
                    <p>Official schedules ("The train leaves at 08:30").</p>
                  </div>
                </div>
                <div className="reality-pill">
                  <Heart size={16} className="icon-pink" />
                  <div>
                    <strong>Stative Verbs (Inner States)</strong>
                    <p>Perceptions & thoughts ("I understand the equation").</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeWorkflowStep === 2 && (
            <div className="step-content">
              <div className="step-badge">Phase 2: Grammatical Person & Agreement</div>
              <h4>Subject Classification: The Great Divide</h4>
              <p>English grammar divides all grammatical subjects into two distinct operational groups:</p>
              <div className="agreement-split-grid">
                <div className="agreement-card base-group">
                  <div className="group-header">
                    <span className="pill-group">Group A: Pure Base Form</span>
                    <h4>I / You / We / They + Plural Nouns</h4>
                  </div>
                  <p>The verb remains in its pure, untouched dictionary infinitive.</p>
                  <div className="code-formula">Subject + Base Verb</div>
                  <div className="example-box">"They <strong>live</strong> near the park."</div>
                  <div className="example-box">"My parents <strong>travel</strong> frequently."</div>
                </div>

                <div className="agreement-card singular-group">
                  <div className="group-header">
                    <span className="pill-group-accent">Group B: 3rd Person Suffix</span>
                    <h4>He / She / It + Singular Nouns + Everyone</h4>
                  </div>
                  <p>The verb MUST take the 3rd person singular inflection suffix (-s, -es, -ies).</p>
                  <div className="code-formula">Subject + Verb(-s / -es / -ies)</div>
                  <div className="example-box">"He <strong>lives</strong> near the park."</div>
                  <div className="example-box">"Everybody <strong>wants</strong> happiness."</div>
                </div>
              </div>
            </div>
          )}

          {activeWorkflowStep === 3 && (
            <div className="step-content">
              <div className="step-badge">Phase 3: Spelling Transformation Engine</div>
              <h4>How to Conjugate the 3rd Person Singular Verb</h4>
              <p>Follow this exact chronological flowchart when appending the suffix to any base verb:</p>
              <div className="spelling-rules-list">
                <div className="rule-row">
                  <span className="rule-badge">Rule 1</span>
                  <div className="rule-detail">
                    <strong>Sibilants & Hissing Endings (-ch, -sh, -ss, -x, -z, -o) → Add -es</strong>
                    <p>watch → <em>watches</em> | wash → <em>washes</em> | fix → <em>fixes</em> | go → <em>goes</em> | do → <em>does</em></p>
                  </div>
                </div>
                <div className="rule-row">
                  <span className="rule-badge">Rule 2</span>
                  <div className="rule-detail">
                    <strong>Consonant + Y → Drop Y and Add -ies</strong>
                    <p>study → <em>studies</em> | fly → <em>flies</em> | carry → <em>carries</em> | try → <em>tries</em></p>
                  </div>
                </div>
                <div className="rule-row">
                  <span className="rule-badge">Rule 3</span>
                  <div className="rule-detail">
                    <strong>Vowel + Y → Keep Y and Add -s</strong>
                    <p>play → <em>plays</em> | enjoy → <em>enjoys</em> | buy → <em>buys</em> | stay → <em>stays</em></p>
                  </div>
                </div>
                <div className="rule-row">
                  <span className="rule-badge">Rule 4</span>
                  <div className="rule-detail">
                    <strong>Irregular Verbs (Exceptions)</strong>
                    <p>have → <em>has</em> (never "haves") | be → <em>is / am / are</em></p>
                  </div>
                </div>
                <div className="rule-row">
                  <span className="rule-badge">Rule 5</span>
                  <div className="rule-detail">
                    <strong>All Other Verbs → Add -s</strong>
                    <p>work → <em>works</em> | read → <em>reads</em> | speak → <em>speaks</em> | drink → <em>drinks</em></p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeWorkflowStep === 4 && (
            <div className="step-content">
              <div className="step-badge">Phase 4: Polarity & Auxiliary Absorption</div>
              <h4>The Golden Rule of English Auxiliaries</h4>
              <p>
                In negative and interrogative sentences, the auxiliary verb (<strong>DO / DOES</strong>) acts like a magnet that <strong>absorbs the 3rd person suffix</strong>. The main verb must immediately revert to its pure base infinitive!
              </p>
              <div className="polarity-formulas-grid">
                <div className="polarity-card aff">
                  <h5>Affirmative (+)</h5>
                  <code>Subject + Verb(s)</code>
                  <p>She <strong>works</strong> in Berlin.</p>
                </div>
                <div className="polarity-card neg">
                  <h5>Negative (–)</h5>
                  <code>Subject + DO / DOES + NOT + Bare Verb</code>
                  <p>She <strong>doesn't work</strong> in Berlin. <em>(NOT doesn't works!)</em></p>
                </div>
                <div className="polarity-card int">
                  <h5>Question (?)</h5>
                  <code>(Wh-) + DO / DOES + Subject + Bare Verb ?</code>
                  <p><strong>Does</strong> she <strong>work</strong> in Berlin? <em>(NOT Does she works?)</em></p>
                </div>
              </div>
            </div>
          )}

          {activeWorkflowStep === 5 && (
            <div className="step-content">
              <div className="step-badge">Phase 5: Syntax Slotting (Adverbs of Frequency)</div>
              <h4>Where do "always", "often", "never", "rarely" go?</h4>
              <p>English frequency adverbs follow rigid grammatical placement rules:</p>
              <div className="syntax-rules-grid">
                <div className="syntax-card">
                  <span className="syntax-tag">Standard Action Verbs</span>
                  <h4>BEFORE the Main Verb</h4>
                  <div className="syntax-formula">Subject + [ADVERB] + Main Verb</div>
                  <p className="syntax-ex">"Marco <strong>often drinks</strong> espresso."</p>
                  <p className="syntax-ex">"She <strong>never arrives</strong> late."</p>
                </div>
                <div className="syntax-card">
                  <span className="syntax-tag">The Verb 'TO BE' (is/am/are)</span>
                  <h4>AFTER the Verb TO BE</h4>
                  <div className="syntax-formula">Subject + BE + [ADVERB]</div>
                  <p className="syntax-ex">"The professor is <strong>always</strong> punctual."</p>
                  <p className="syntax-ex">"They are <strong>rarely</strong> tired."</p>
                </div>
                <div className="syntax-card">
                  <span className="syntax-tag">Negative Sentences</span>
                  <h4>BETWEEN Auxiliary and Verb</h4>
                  <div className="syntax-formula">Subject + don't/doesn't + [ADVERB] + Verb</div>
                  <p className="syntax-ex">"We don't <strong>usually</strong> eat after 9 PM."</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Interactive Live Workflow Simulator */}
        <div className="simulator-workflow-card card">
          <div className="sim-header">
            <div className="sim-title">
              <Sparkles size={18} className="icon-emerald" />
              <h4>Live Workflow Sentence Generator</h4>
            </div>
            <span className="sim-subtitle">Test how the 5 workflow phases combine in real time</span>
          </div>

          <div className="sim-controls">
            <div className="control-group" style={{ gridColumn: 'span 2' }}>
              <label>Target English Tense (Unlocked Real-Time Simulator):</label>
              <select value={simTense} onChange={(e) => setSimTense(e.target.value)}>
                <option value="pastSimple">1. Past Simple (Finished Past Action: "Yesterday")</option>
                <option value="presentSimple">2. Present Simple (Habit / Timeless Fact: "Always")</option>
                <option value="futureSimple">3. Future Simple (Instant Decision / Plan: "Tomorrow")</option>
                <option value="pastContinuous">4. Past Continuous (In Progress in Past: "Was studying")</option>
                <option value="presentContinuous">5. Present Continuous (Happening Right Now: "Is studying")</option>
                <option value="futureContinuous">6. Future Continuous (In Progress in Future: "Will be studying")</option>
                <option value="pastPerfect">7. Past Perfect (The Past Before the Past: "Had studied")</option>
                <option value="presentPerfect">8. Present Perfect (Life Experience & Result: "Has studied")</option>
              </select>
            </div>

            <div className="control-group">
              <label>1. Subject:</label>
              <select value={simSubject} onChange={(e) => setSimSubject(e.target.value)}>
                <option value="i">I (1st person)</option>
                <option value="you">You (2nd person)</option>
                <option value="he">He (3rd person sing.)</option>
                <option value="she">She (3rd person sing.)</option>
                <option value="my friend">My friend (Singular noun)</option>
                <option value="we">We (1st person plural)</option>
                <option value="they">They (3rd person plural)</option>
              </select>
            </div>

            <div className="control-group">
              <label>2. Base Verb:</label>
              <select value={simVerb} onChange={(e) => setSimVerb(e.target.value)}>
                <option value="study">study (consonant + y)</option>
                <option value="play">play (vowel + y)</option>
                <option value="watch">watch (-ch ending)</option>
                <option value="fix">fix (-x ending)</option>
                <option value="have">have (irregular)</option>
                <option value="go">go (-o ending)</option>
                <option value="be">be (copula)</option>
              </select>
            </div>

            <div className="control-group">
              <label>3. Polarity:</label>
              <select value={simType} onChange={(e) => setSimType(e.target.value)}>
                <option value="affirmative">Affirmative (+)</option>
                <option value="negative">Negative (–)</option>
                <option value="question">Question (?)</option>
              </select>
            </div>

            <div className="control-group">
              <label>4. Frequency Adverb:</label>
              <select value={simAdverb} onChange={(e) => setSimAdverb(e.target.value)}>
                <option value="always">always (100%)</option>
                <option value="usually">usually (80%)</option>
                <option value="often">often (70%)</option>
                <option value="rarely">rarely (10%)</option>
                <option value="never">never (0%)</option>
              </select>
            </div>
          </div>

          <div className="sim-result-box">
            <div className="result-label">Generated Sentence Result:</div>
            <div className="result-sentence">
              <span>{computeSimulatedSentence()}</span>
              <button 
                className="speak-btn-pill"
                onClick={() => soundManager.speak(computeSimulatedSentence())}
                title="Listen to American pronunciation"
              >
                <Volume2 size={16} /> Listen
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: THE 12-TENSE ENGLISH ROADMAP */}
      <section className="roadmap-grid-section">
        <div className="section-header-compact" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <div>
            <div className="title-row">
              <ShieldCheck size={22} className="icon-emerald" />
              <h3>Part 2: The Complete English Tenses Mastery Journey</h3>
            </div>
            <p className="section-desc">
              Organized in chronological cycles: <strong>Past Simple → Present Simple → Future Simple</strong>, followed by Continuous, Perfect, and Perfect Continuous progressions.
            </p>
          </div>

          <button 
            className="unlock-pill-btn"
            onClick={() => {
              soundManager.playClick();
              setUnlockAll(!unlockAll);
            }}
          >
            {unlockAll ? <Unlock size={14} /> : <Lock size={14} />}
            <span>{unlockAll ? 'All 14 Tenses Unlocked' : 'Curriculum Locked Mode'}</span>
          </button>
        </div>

        {/* Aspect Filter Selector Tabs */}
        <div className="aspect-filter-row" style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', margin: '6px 0 16px' }}>
          {[
            { id: 'all', label: 'All 12 Tenses (+ 2 Capstones)' },
            { id: 'Simple', label: '1. Simple Aspect (Past → Present → Future)' },
            { id: 'Continuous', label: '2. Continuous Aspect (Past → Present → Future)' },
            { id: 'Perfect', label: '3. Perfect Aspect (Past → Present → Future)' },
            { id: 'Perfect Continuous', label: '4. Perfect Continuous (Past → Present → Future)' },
            { id: 'Capstone', label: 'Capstones (Conditionals & Passives)' }
          ].map((tab) => (
            <button
              key={tab.id}
              className={`selector-chip ${selectedAspect === tab.id ? 'selected' : ''}`}
              onClick={() => {
                soundManager.playClick();
                setSelectedAspect(tab.id);
              }}
              style={{ fontSize: '0.8rem', padding: '6px 14px' }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="tenses-grid">
          {TENSES_DATA
            .filter((t) => selectedAspect === 'all' || t.aspect === selectedAspect)
            .map((tense) => {
              const isUnlocked = unlockAll || tense.id === 'presentSimple';
              const isCurrentActive = activeTense === tense.id;
              return (
                <div 
                  key={tense.id} 
                  className={`tense-roadmap-card ${isUnlocked ? 'unlocked' : 'locked'} ${isCurrentActive ? 'active-app-tense' : ''}`}
                  style={{
                    borderTop: `4px solid ${tense.color}`,
                    boxShadow: isCurrentActive ? `0 0 0 2px ${tense.color}, var(--shadow-lg)` : undefined
                  }}
                  onClick={() => handleTenseCardClick(tense)}
                  role="button"
                  tabIndex={0}
                >
                  <div className="card-top">
                    <div 
                      className="tense-status-tag" 
                      style={{ 
                        backgroundColor: isUnlocked ? `${tense.color}18` : 'rgba(255, 255, 255, 0.05)', 
                        color: isUnlocked ? tense.color : 'var(--text-muted)' 
                      }}
                    >
                      {isUnlocked ? <Unlock size={13} /> : <Lock size={13} />}
                      <span>{isCurrentActive ? '🟢 ACTIVE IN ENTIRE APP' : tense.badge}</span>
                    </div>
                    <span className="cefr-badge">{tense.level}</span>
                  </div>

                  <div className="card-body">
                    <h4 className="tense-title">{tense.title}</h4>
                    <p className="tense-summary">{tense.summary}</p>
                    
                    <div className="tense-formula-chip">
                      <code style={{ color: tense.color }}>{tense.formula}</code>
                    </div>
                  </div>

                  <div className="card-footer">
                    {isUnlocked ? (
                      <div className="unlocked-action-bar" style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '100%' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                          <span className="unlocked-chip" style={{ color: tense.color }}>
                            <Sparkles size={13} /> {isCurrentActive ? 'Current Tense' : tense.aspect}
                          </span>
                          <button 
                            className="open-studio-pill"
                            style={{ color: tense.color, borderColor: `${tense.color}60` }}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleTenseCardClick(tense);
                            }}
                          >
                            Preview Studio <ChevronRight size={14} />
                          </button>
                        </div>

                        <button
                          className="switch-app-tense-btn"
                          style={{
                            background: isCurrentActive ? tense.color : 'rgba(255, 255, 255, 0.06)',
                            color: isCurrentActive ? '#ffffff' : 'var(--text-main)',
                            border: `1px solid ${isCurrentActive ? tense.color : 'var(--border-subtle)'}`,
                            padding: '8px 12px',
                            borderRadius: 'var(--radius-sm)',
                            fontSize: '0.82rem',
                            fontWeight: '700',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '6px',
                            width: '100%',
                            transition: 'all var(--transition-fast)'
                          }}
                          onClick={(e) => {
                            e.stopPropagation();
                            soundManager.playSuccess();
                            if (onSelectTense) onSelectTense(tense.id);
                            onNavigateToSection('overview');
                          }}
                        >
                          <Sparkles size={14} />
                          {isCurrentActive ? 'Active: Explore All Modules →' : `Study ${tense.title.split('. ')[1] || tense.title} Across All Pages →`}
                        </button>
                      </div>
                    ) : (
                      <div className="locked-action">
                        <div className="lock-req-row">
                          <Lock size={13} className="lock-icon-amber" />
                          <span className="lock-req-text">Prerequisite Required</span>
                        </div>
                        <span className="preview-pill">Peek Syllabus</span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
        </div>
      </section>

      {/* SECTION 3: FULL-WIDTH 12-TENSE COMPARATIVE MATRIX */}
      <section className="comparative-matrix-card">
        <div className="matrix-header">
          <div className="title-row">
            <BookOpen size={20} className="icon-emerald" />
            <h3>Part 3: Master 12-Tense Quick-Lookup Comparative Matrix</h3>
          </div>
          <p>
            Complete architectural matrix contrasting all tenses side-by-side in chronological order (Past → Present → Future) across formulas, time signals, and authentic spoken audio.
          </p>
        </div>

        <div className="matrix-table-wrap">
          <table className="matrix-table">
            <thead>
              <tr>
                <th>Tense & Level</th>
                <th>Aspect & Time</th>
                <th>When to Use (Core Reality)</th>
                <th>Syntactic Architecture (+ / – / ?)</th>
                <th>Key Time Signals</th>
                <th>Model Sentence & Audio</th>
                <th>Interactive Studio</th>
              </tr>
            </thead>
            <tbody>
              {TENSES_DATA.map((t) => (
                <tr key={t.id}>
                  <td>
                    <div style={{ fontWeight: 800, color: t.color, display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: t.color, flexShrink: 0 }}></span>
                      {t.title}
                    </div>
                    <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>{t.level}</span>
                  </td>
                  <td>
                    <span style={{ 
                      fontSize: '0.74rem', 
                      fontWeight: 700, 
                      padding: '3px 8px', 
                      borderRadius: 'var(--radius-sm)',
                      background: `${t.color}15`,
                      color: t.color,
                      border: `1px solid ${t.color}35`,
                      whiteSpace: 'nowrap'
                    }}>
                      {t.aspect} • {t.time}
                    </span>
                  </td>
                  <td style={{ maxWidth: '280px', whiteSpace: 'normal', fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                    {t.reality || t.summary}
                  </td>
                  <td>
                    <code>{t.formula}</code>
                  </td>
                  <td style={{ maxWidth: '200px', whiteSpace: 'normal', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                    {t.signals.slice(0, 3).join(', ')}
                  </td>
                  <td>
                    <button 
                      className="matrix-audio-btn"
                      onClick={() => soundManager.speak(t.example)}
                      title="Listen to native pronunciation"
                    >
                      <Volume2 size={13} /> Listen Example
                    </button>
                  </td>
                  <td>
                    <button 
                      className="matrix-studio-btn"
                      onClick={() => handleTenseCardClick(t)}
                    >
                      Open Studio <ChevronRight size={13} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
