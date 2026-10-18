import React, { useState, useRef, useEffect } from 'react';
import { 
  ChevronDown, 
  Check, 
  Sparkles, 
  Clock, 
  Layers, 
  Zap, 
  GitFork,
  ArrowRight,
  BookmarkCheck
} from 'lucide-react';
import { ALL_TENSES_METADATA } from '../data/tensesRegistry';
import { soundManager } from '../utils/audio';

// Categorized group definitions in pedagogical chronological order
const CATEGORIES = [
  {
    id: 'all',
    label: 'All Tenses',
    badge: '14 Chapters',
    icon: Layers,
    color: '#6366f1'
  },
  {
    id: 'Simple',
    label: '1. Simple Aspect',
    sub: 'Past → Present → Future',
    badge: '3 Tenses',
    icon: Zap,
    color: '#10b981',
    description: 'Finished past actions, timeless universal truths, and spontaneous future commitments.'
  },
  {
    id: 'Continuous',
    label: '2. Continuous Aspect',
    sub: 'Past → Present → Future',
    badge: '3 Tenses',
    icon: Clock,
    color: '#ec4899',
    description: 'Actions actively in progress at specific reference moments across time.'
  },
  {
    id: 'Perfect',
    label: '3. Perfect Aspect',
    sub: 'Past → Present → Future',
    badge: '3 Tenses',
    icon: BookmarkCheck,
    color: '#f59e0b',
    description: 'Chronological precedence, past-present experiential bridges, and future deadlines.'
  },
  {
    id: 'Perfect Continuous',
    label: '4. Perfect Continuous',
    sub: 'Past → Present → Future',
    badge: '3 Tenses',
    icon: Sparkles,
    color: '#06b6d4',
    description: 'Emphasizing ongoing duration, process, and physical evidence leading up to benchmarks.'
  },
  {
    id: 'Capstone',
    label: '5. Capstone Systems',
    sub: 'Conditionals & Passives',
    badge: '2 Systems',
    icon: GitFork,
    color: '#ef4444',
    description: 'Hypothetical counterfactual scenarios and agentless formal discourse architecture.'
  }
];

function TenseSelectorDropdown({ 
  activeTense, 
  onSelectTense, 
  currentTenseMeta,
  onOpenRoadmap 
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const dropdownRef = useRef(null);

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const handleToggle = () => {
    soundManager.playClick();
    setIsOpen(!isOpen);
  };

  const handleChooseTense = (tenseId) => {
    soundManager.playSuccess();
    onSelectTense(tenseId);
    setIsOpen(false);
  };

  const cleanLevel = (levelStr) => {
    if (!levelStr) return 'A1';
    return levelStr.replace(/CEFR/g, '').trim();
  };

  // When 'all' is selected, group them by category for structured scanning
  const groupsToDisplay = selectedCategory === 'all'
    ? CATEGORIES.filter(c => c.id !== 'all')
    : CATEGORIES.filter(c => c.id === selectedCategory);

  return (
    <div className="custom-tense-selector-wrapper" ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        type="button"
        className={`custom-tense-trigger-btn ${isOpen ? 'active-open' : ''}`}
        onClick={handleToggle}
        aria-expanded={isOpen}
        aria-haspopup="dialog"
        title="Click to browse and switch English tenses by category"
        style={{
          borderColor: currentTenseMeta?.accentColor ? `${currentTenseMeta.accentColor}70` : undefined,
          boxShadow: isOpen 
            ? `0 0 20px ${currentTenseMeta?.accentColor}35, var(--shadow-md)` 
            : undefined
        }}
      >
        <span 
          className="tense-status-glow-dot" 
          style={{ background: currentTenseMeta?.accentColor || '#10b981' }}
        />
        
        <span className="tense-trigger-label">ACTIVE TENSE:</span>

        <span className="tense-trigger-title">
          {currentTenseMeta?.chapterNumber ? `${currentTenseMeta.chapterNumber}. ` : ''}
          {currentTenseMeta?.name || 'Present Simple'}
        </span>

        <span 
          className="tense-trigger-aspect-pill"
          style={{
            color: currentTenseMeta?.accentColor || 'var(--indigo-400)',
            background: currentTenseMeta?.accentColor ? `${currentTenseMeta.accentColor}18` : 'var(--bg-input)',
            borderColor: currentTenseMeta?.accentColor ? `${currentTenseMeta.accentColor}40` : 'var(--border-subtle)'
          }}
        >
          {currentTenseMeta?.aspect || 'Simple'}
        </span>

        <span className="tense-trigger-cefr-pill">
          {cleanLevel(currentTenseMeta?.level)}
        </span>

        <ChevronDown 
          size={16} 
          className={`tense-trigger-chevron ${isOpen ? 'rotated' : ''}`} 
        />
      </button>

      {/* Floating Categorized Menu Panel */}
      {isOpen && (
        <div className="custom-tense-menu-panel" role="dialog" aria-label="English Tenses Menu">
          {/* Menu Header with Category Pills */}
          <div className="menu-header-bar">
            <div className="menu-header-title-row">
              <div className="title-with-icon">
                <Sparkles size={16} color="var(--indigo-400)" />
                <h4>Select Tense & Aspect Category</h4>
              </div>
              <span className="menu-subtitle-meta">14 Tenses • Chronological Cycle</span>
            </div>

            {/* Category Filter Chips */}
            <div className="category-filter-chips-row">
              {CATEGORIES.map((cat) => {
                const IconComponent = cat.icon;
                const isSelected = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    className={`cat-chip-btn ${isSelected ? 'selected' : ''}`}
                    onClick={() => {
                      soundManager.playClick();
                      setSelectedCategory(cat.id);
                    }}
                    style={{
                      borderColor: isSelected ? cat.color : undefined,
                      color: isSelected ? cat.color : undefined
                    }}
                  >
                    <IconComponent size={13} />
                    <span>{cat.label}</span>
                    <span className="cat-chip-count">{cat.badge}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Categorized Tenses List */}
          <div className="menu-categories-scroll-area">
            {groupsToDisplay.map((group) => {
              const groupTenses = ALL_TENSES_METADATA.filter(t => t.aspect === group.id);
              if (groupTenses.length === 0) return null;

              return (
                <div key={group.id} className="category-group-block">
                  {/* Category Section Header */}
                  <div className="category-group-header">
                    <div className="cat-header-left">
                      <span className="cat-color-bar" style={{ background: group.color }} />
                      <div className="cat-title-text">
                        <strong style={{ color: group.color }}>{group.label}</strong>
                        {group.sub && <span className="cat-sub-text">• {group.sub}</span>}
                      </div>
                    </div>
                    <span className="cat-desc-hint">{group.description}</span>
                  </div>

                  {/* Tenses Grid for this category: Past -> Present -> Future */}
                  <div className="category-tenses-grid">
                    {groupTenses.map((tense) => {
                      const isCurrent = tense.id === activeTense;
                      return (
                        <div
                          key={tense.id}
                          className={`tense-menu-card ${isCurrent ? 'is-active' : ''}`}
                          onClick={() => handleChooseTense(tense.id)}
                          role="button"
                          tabIndex={0}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault();
                              handleChooseTense(tense.id);
                            }
                          }}
                          style={{
                            borderColor: isCurrent ? tense.color : undefined,
                            boxShadow: isCurrent ? `0 0 16px ${tense.color}25` : undefined
                          }}
                        >
                          {/* Left indicator bar */}
                          <div 
                            className="card-accent-indicator" 
                            style={{ background: tense.color }}
                          />

                          <div className="card-main-content">
                            <div className="card-top-row">
                              <span className="tense-chapter-pill">
                                Ch. {tense.chapterNumber || tense.id}
                              </span>

                              <span 
                                className="tense-time-pill"
                                style={{
                                  background: `${tense.color}15`,
                                  color: tense.color,
                                  borderColor: `${tense.color}35`
                                }}
                              >
                                {tense.time}
                              </span>

                              <span className="tense-level-badge-compact">
                                {cleanLevel(tense.level)}
                              </span>

                              {isCurrent && (
                                <span className="active-checkmark-pill" style={{ background: tense.color }}>
                                  <Check size={12} color="white" />
                                  <span>Active</span>
                                </span>
                              )}
                            </div>

                            <div className="tense-card-name">
                              {tense.title}
                            </div>

                            <div className="tense-card-formula">
                              <code>{tense.formula}</code>
                            </div>

                            <p className="tense-card-summary">
                              {tense.summary}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Menu Footer with Roadmap Link */}
          <div className="menu-footer-bar">
            <span className="menu-footer-hint">
              Click any tense to switch the entire application, all rules, and exercises.
            </span>

            <button
              type="button"
              className="btn-roadmap-view-link"
              onClick={() => {
                soundManager.playClick();
                setIsOpen(false);
                if (onOpenRoadmap) onOpenRoadmap();
              }}
            >
              <GitFork size={15} />
              <span>Open Comparative 14-Tense Matrix & Roadmap</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default React.memo(TenseSelectorDropdown);

