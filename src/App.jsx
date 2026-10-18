import React, { useState, useEffect, useMemo, useCallback, Suspense } from 'react';
import Sidebar from './components/Sidebar';
import TenseSelectorDropdown from './components/TenseSelectorDropdown';
import ErrorBoundary from './components/ErrorBoundary';
import { soundManager } from './utils/audio';
import { ALL_TENSES_METADATA, getTenseData } from './data/tensesRegistry';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Statically imported views for instant tab switching and 100% offline desktop reliability
import OverviewView from './components/views/OverviewView';
import UseCasesView from './components/views/UseCasesView';
import FormulasView from './components/views/FormulasView';
import SpellingLabView from './components/views/SpellingLabView';
import FrequencyView from './components/views/FrequencyView';
import TrapsView from './components/views/TrapsView';
import ResumeView from './components/views/ResumeView';
import ExercisesView from './components/views/ExercisesView';
import ExamView from './components/views/ExamView';
import CourseWorkflowView from './components/views/CourseWorkflowView';
import PreviewStudioView from './components/views/PreviewStudioView';

function ViewSkeleton() {
  return (
    <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.25rem', width: '100%', maxWidth: '1000px', margin: '0 auto', opacity: 0.7 }}>
      <div style={{ height: '56px', borderRadius: '14px', background: 'var(--surface-color, rgba(255,255,255,0.04))', animation: 'pulse 1.5s infinite ease-in-out' }} />
      <div style={{ height: '160px', borderRadius: '16px', background: 'var(--surface-color, rgba(255,255,255,0.04))', animation: 'pulse 1.5s infinite ease-in-out' }} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
        <div style={{ height: '180px', borderRadius: '14px', background: 'var(--surface-color, rgba(255,255,255,0.04))', animation: 'pulse 1.5s infinite ease-in-out' }} />
        <div style={{ height: '180px', borderRadius: '14px', background: 'var(--surface-color, rgba(255,255,255,0.04))', animation: 'pulse 1.5s infinite ease-in-out' }} />
      </div>
    </div>
  );
}

export default function App() {
  const [activeTab, setActiveTab] = useState('overview');
  const [theme, setTheme] = useState(() => localStorage.getItem('grammar_theme') || 'dark');
  const [soundEnabled, setSoundEnabled] = useState(() => localStorage.getItem('grammar_sound') !== 'false');
  const [xp, setXp] = useState(() => parseInt(localStorage.getItem('grammar_xp') || '120', 10));
  const [streak, setStreak] = useState(() => parseInt(localStorage.getItem('grammar_streak') || '3', 10));
  const [sidebarCollapsed, setSidebarCollapsed] = useState(() => localStorage.getItem('grammar_sidebar_collapsed') === 'true');

  // App-wide Active Tense (Past Simple -> Present Simple -> Future Simple ...)
  const [activeTense, setActiveTense] = useState(() => localStorage.getItem('grammar_active_tense') || 'pastSimple');

  // Memoized Active Tense Data & Metadata
  const currentTenseData = useMemo(() => getTenseData(activeTense), [activeTense]);
  const currentTenseMeta = currentTenseData.meta;

  const currentTenseIndex = useMemo(() => {
    const idx = ALL_TENSES_METADATA.findIndex((t) => t.id === activeTense);
    return idx >= 0 ? idx : 0;
  }, [activeTense]);

  const prevTense = useMemo(() => {
    return ALL_TENSES_METADATA[(currentTenseIndex - 1 + ALL_TENSES_METADATA.length) % ALL_TENSES_METADATA.length];
  }, [currentTenseIndex]);

  const nextTense = useMemo(() => {
    return ALL_TENSES_METADATA[(currentTenseIndex + 1) % ALL_TENSES_METADATA.length];
  }, [currentTenseIndex]);

  // Sync document title with active tense
  useEffect(() => {
    const tenseName = currentTenseMeta?.name || 'Grammar';
    document.title = `GrammarPulse — English ${tenseName} Studio`;
  }, [currentTenseMeta?.name]);

  // Sync theme with document attribute
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('grammar_theme', theme);
  }, [theme]);

  // Sync sound manager
  useEffect(() => {
    soundManager.setEnabled(soundEnabled);
    localStorage.setItem('grammar_sound', soundEnabled.toString());
  }, [soundEnabled]);

  // Sync XP
  useEffect(() => {
    localStorage.setItem('grammar_xp', xp.toString());
  }, [xp]);

  // Sync Active Tense to localStorage
  const handleSelectTense = useCallback((tenseId) => {
    soundManager.playClick();
    setActiveTense(tenseId);
    localStorage.setItem('grammar_active_tense', tenseId);
  }, []);

  const handleNextTense = useCallback(() => {
    handleSelectTense(nextTense.id);
  }, [handleSelectTense, nextTense.id]);

  const handlePrevTense = useCallback(() => {
    handleSelectTense(prevTense.id);
  }, [handleSelectTense, prevTense.id]);

  const handleToggleSidebar = useCallback(() => {
    soundManager.playClick();
    setSidebarCollapsed((prev) => {
      const next = !prev;
      localStorage.setItem('grammar_sidebar_collapsed', next.toString());
      return next;
    });
  }, []);

  // Keyboard navigation shortcuts (1-9 and Ctrl+B, Arrow keys for tense navigation)
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Toggle sidebar with Ctrl+B
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'b') {
        e.preventDefault();
        handleToggleSidebar();
        return;
      }

      // Don't trigger shortcuts if user is typing in an input
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement?.tagName)) return;

      const keyMap = {
        '1': 'overview',
        '2': 'useCases',
        '3': 'formulas',
        '4': 'spelling',
        '5': 'frequency',
        '6': 'traps',
        '7': 'resume',
        '8': 'exercises',
        '9': 'exam',
        '0': 'workflow',
        'p': 'previewStudio',
        'P': 'previewStudio',
      };

      if (keyMap[e.key]) {
        soundManager.playClick();
        setActiveTab(keyMap[e.key]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleToggleSidebar]);

  const handleToggleTheme = useCallback(() => {
    soundManager.playClick();
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  }, []);

  const handleToggleSound = useCallback(() => {
    setSoundEnabled((prev) => !prev);
  }, []);

  const handleAddXp = useCallback((amount) => {
    setXp((prev) => prev + amount);
  }, []);

  const handleOpenResumePrint = useCallback(() => {
    setActiveTab('resume');
    setTimeout(() => {
      window.print();
    }, 400);
  }, []);

  return (
    <div className="app-container">
      {/* Ambient background glows */}
      <div className="ambient-glow ambient-glow-1"></div>
      <div className="ambient-glow ambient-glow-2"></div>

      {/* Main App Workspace (Full Height Layout) */}
      <div className="workspace">
        <Sidebar 
          activeTab={activeTab} 
          onSelectTab={setActiveTab} 
          collapsed={sidebarCollapsed}
          onToggleCollapse={handleToggleSidebar}
          theme={theme}
          onToggleTheme={handleToggleTheme}
          soundEnabled={soundEnabled}
          onToggleSound={handleToggleSound}
          xp={xp}
          streak={streak}
          onOpenResumePrint={handleOpenResumePrint}
          activeTenseMeta={currentTenseMeta}
        />

        <main className="main-viewport">
          {/* Top Persistent Global Tense Navigation Bar */}
          <header className="global-tense-control-bar" role="region" aria-label="Global Tense Navigation">
            <div className="tense-nav-left">
              <button 
                className="tense-nav-btn prev-tense-btn"
                onClick={handlePrevTense}
                title={`Switch entire application to: ${prevTense.name}`}
              >
                <ChevronLeft size={16} />
                <span className="tense-btn-text">
                  Prev: <strong>{prevTense.name.split('. ')[1] || prevTense.name}</strong>
                </span>
              </button>
            </div>

            <div className="tense-nav-center">
              <TenseSelectorDropdown
                activeTense={activeTense}
                onSelectTense={handleSelectTense}
                currentTenseMeta={currentTenseMeta}
                onOpenRoadmap={() => setActiveTab('workflow')}
              />
            </div>

            <div className="tense-nav-right">
              <button 
                className="tense-nav-btn next-tense-btn"
                onClick={handleNextTense}
                style={{ 
                  background: currentTenseMeta.accentColor, 
                  borderColor: currentTenseMeta.accentColor, 
                  color: '#ffffff' 
                }}
                title={`Switch entire application to: ${nextTense.name}`}
              >
                <span className="tense-btn-text">
                  Next: <strong>{nextTense.name.split('. ')[1] || nextTense.name}</strong>
                </span>
                <ChevronRight size={16} />
              </button>
            </div>
          </header>

          {/* Current Module Content (Dynamically Rendered for the Selected Tense) */}
          <div className="module-view-container">
            <ErrorBoundary 
              key={`${activeTense}_${activeTab}`} 
              onReset={() => setActiveTab('overview')} 
              onNavigateHome={() => setActiveTab('overview')}
            >
              <Suspense fallback={<ViewSkeleton />}>
                {activeTab === 'overview' && (
                  <OverviewView
                    tenseData={currentTenseData}
                    tenseMeta={currentTenseMeta}
                    activeTense={activeTense}
                    onNavigateToCases={() => setActiveTab('useCases')}
                    onNavigateToExercises={() => setActiveTab('exercises')}
                  />
                )}

                {activeTab === 'useCases' && (
                  <UseCasesView 
                    tenseData={currentTenseData}
                    tenseMeta={currentTenseMeta}
                    activeTense={activeTense}
                  />
                )}

                {activeTab === 'formulas' && (
                  <FormulasView 
                    tenseData={currentTenseData}
                    tenseMeta={currentTenseMeta}
                    activeTense={activeTense}
                  />
                )}

                {activeTab === 'spelling' && (
                  <SpellingLabView 
                    tenseData={currentTenseData}
                    tenseMeta={currentTenseMeta}
                    activeTense={activeTense}
                  />
                )}

                {activeTab === 'frequency' && (
                  <FrequencyView 
                    tenseData={currentTenseData}
                    tenseMeta={currentTenseMeta}
                    activeTense={activeTense}
                  />
                )}

                {activeTab === 'traps' && (
                  <TrapsView 
                    tenseData={currentTenseData}
                    tenseMeta={currentTenseMeta}
                    activeTense={activeTense}
                    onNavigateToExercises={() => setActiveTab('exercises')} 
                  />
                )}

                {activeTab === 'resume' && (
                  <ResumeView 
                    tenseData={currentTenseData}
                    tenseMeta={currentTenseMeta}
                    activeTense={activeTense}
                  />
                )}

                {activeTab === 'exercises' && (
                  <ExercisesView 
                    tenseData={currentTenseData}
                    tenseMeta={currentTenseMeta}
                    activeTense={activeTense}
                    onAddXp={handleAddXp} 
                  />
                )}

                {activeTab === 'exam' && (
                  <ExamView
                    tenseData={currentTenseData}
                    tenseMeta={currentTenseMeta}
                    activeTense={activeTense}
                    onAddXp={handleAddXp}
                    onNavigateToResume={() => setActiveTab('resume')}
                  />
                )}

                {activeTab === 'workflow' && (
                  <CourseWorkflowView 
                    onNavigateToSection={setActiveTab} 
                    activeTense={activeTense}
                    onSelectTense={handleSelectTense}
                  />
                )}

                {activeTab === 'previewStudio' && (
                  <PreviewStudioView 
                    activeTense={activeTense}
                    onSelectTense={handleSelectTense}
                    onNavigateToSection={setActiveTab}
                    tenseData={currentTenseData}
                    tenseMeta={currentTenseMeta}
                  />
                )}
              </Suspense>
            </ErrorBoundary>
          </div>
        </main>
      </div>
    </div>
  );
}
