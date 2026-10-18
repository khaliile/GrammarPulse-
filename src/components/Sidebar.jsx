import React from 'react';
import { 
  Sparkles,
  Compass, 
  Layers, 
  Code2, 
  Wand2, 
  BarChart2, 
  AlertTriangle, 
  FileText, 
  CheckCircle2, 
  GraduationCap,
  Sun,
  Moon,
  Volume2,
  VolumeX,
  Printer,
  Flame,
  Award,
  GitFork,
  BookOpen
} from 'lucide-react';
import { soundManager } from '../utils/audio';

const NAV_ITEMS = [
  { id: 'overview', label: '1. Overview & Intuition', icon: Compass, badge: 'Core' },
  { id: 'useCases', label: '2. All 6 Use Cases', icon: Layers, badge: 'Crucial' },
  { id: 'formulas', label: '3. Formulas & Rules', icon: Code2, badge: '+/–/?' },
  { id: 'spelling', label: '4. Spelling Lab', icon: Wand2, badge: 'AI Lab' },
  { id: 'frequency', label: '5. Frequency Adverbs', icon: BarChart2, badge: 'Syntax' },
  { id: 'traps', label: '6. Common Pitfalls', icon: AlertTriangle, badge: 'Traps' },
  { id: 'resume', label: '7. Quick Cheat-Sheet', icon: FileText, badge: 'Summary' },
  { id: 'exercises', label: '8. Practice Studio', icon: CheckCircle2, badge: '80+ Qs' },
  { id: 'exam', label: '9. Final Mastery Exam', icon: GraduationCap, badge: 'Diploma' },
  { id: 'workflow', label: '10. Master Roadmap', icon: GitFork, badge: '12 Tenses' },
  { id: 'previewStudio', label: '11. Preview Studio', icon: BookOpen, badge: 'Studio' },
];

function Sidebar({ 
  activeTab, 
  onSelectTab, 
  collapsed, 
  onToggleCollapse,
  theme,
  onToggleTheme,
  soundEnabled,
  onToggleSound,
  xp,
  streak,
  onOpenResumePrint,
  activeTenseMeta
}) {
  const handleNavClick = (id) => {
    soundManager.playClick();
    onSelectTab(id);
  };

  return (
    <aside className={`sidebar-nav ${collapsed ? 'collapsed' : ''}`}>
      {/* Brand Header — Clicking the logo directly toggles expand/collapse */}
      <div className="sidebar-brand-section">
        <div 
          className="sidebar-brand-row"
          onClick={onToggleCollapse}
          title={collapsed ? "Click logo to expand sidebar (Ctrl+B)" : "Click logo to collapse sidebar (Ctrl+B)"}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              onToggleCollapse();
            }
          }}
        >
          <div className="app-logo-badge logo-toggle-badge">
            <Sparkles size={20} />
          </div>
          {!collapsed && (
            <div className="sidebar-brand-text">
              <h1 className="brand-title">GrammarPulse</h1>
              <p className="brand-subtitle" style={{ color: activeTenseMeta?.accentColor || 'var(--emerald-400)', fontWeight: '700' }}>
                {activeTenseMeta?.name || 'Present Simple'}
              </p>
            </div>
          )}
        </div>

        {/* Gamification Stats */}
        {!collapsed && (
          <div className="sidebar-stats-row">
            <div className="stats-pill" title="Mastery Experience Points">
              <Award size={14} className="xp" />
              <span>{xp} XP</span>
            </div>
            <div className="stats-pill" title="Learning Streak">
              <Flame size={14} className="streak" />
              <span>{streak}d Streak</span>
            </div>
          </div>
        )}
      </div>

      <div className="sidebar-divider"></div>
      
      {/* Section Title */}
      {!collapsed && <div className="nav-section-title">Curriculum Modules</div>}

      {/* Navigation Items */}
      <div className="nav-items-container">
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              className={`nav-item ${isActive ? 'active' : ''}`}
              onClick={() => handleNavClick(item.id)}
              aria-selected={isActive}
              title={collapsed ? `${item.label} (${item.badge})` : undefined}
            >
              <div className="nav-item-content">
                <Icon size={18} className="nav-icon" />
                {!collapsed && <span className="nav-label">{item.label}</span>}
              </div>
              {!collapsed && item.badge && <span className="nav-badge">{item.badge}</span>}
            </button>
          );
        })}
      </div>

      {/* Sidebar Footer with Quick Actions & Theme Toggle */}
      <div className="sidebar-footer">
        {/* Quick Utilities Row */}
        <div className="sidebar-actions-bar">
          <button
            className="sidebar-action-btn theme-btn"
            onClick={onToggleTheme}
            title={theme === 'dark' ? "Switch to Light Mode" : "Switch to Dark Mode"}
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
            {!collapsed && <span>{theme === 'dark' ? 'Light' : 'Dark'}</span>}
          </button>

          <button
            className="sidebar-action-btn"
            onClick={onToggleSound}
            title={soundEnabled ? "Mute Sound Effects" : "Enable Sound Effects"}
            aria-label="Toggle Sound"
          >
            {soundEnabled ? <Volume2 size={17} /> : <VolumeX size={17} />}
          </button>

          <button
            className="sidebar-action-btn"
            onClick={onOpenResumePrint}
            title="Print / Save Cheat-Sheet PDF"
            aria-label="Print Cheat-Sheet"
          >
            <Printer size={17} />
          </button>
        </div>

        {/* Teacher Persona Badge */}
        <div 
          className="teacher-card" 
          title={collapsed ? "English Pro Studio — Interactive Pedagogical UI" : undefined}
        >
          <div className="teacher-avatar">EP</div>
          {!collapsed && (
            <div className="teacher-info">
              <h4>English Pro Studio</h4>
              <p>Pedagogical AI Engine</p>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}

export default React.memo(Sidebar);

