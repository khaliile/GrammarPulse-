import React from 'react';
import { AlertTriangle, RotateCcw, Home } from 'lucide-react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
    if (this.props.onReset) {
      this.props.onReset();
    }
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="content-max-width" style={{ padding: '40px 20px', textAlign: 'center' }}>
          <div className="glass-card" style={{ maxWidth: '640px', margin: '0 auto', padding: '40px 32px', borderLeft: '4px solid var(--rose-500)' }}>
            <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'rgba(244, 63, 94, 0.15)', color: 'var(--rose-500)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
              <AlertTriangle size={28} />
            </div>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '12px', color: 'var(--text-main)' }}>
              Module View Error Encountered
            </h3>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', marginBottom: '24px', lineHeight: '1.6' }}>
              An unexpected error occurred while rendering this curriculum module. The rest of the application remains completely operational.
            </p>
            
            <div style={{ background: 'var(--bg-input)', padding: '14px', borderRadius: 'var(--radius-md)', fontFamily: 'var(--font-mono)', fontSize: '0.82rem', color: 'var(--rose-400)', textAlign: 'left', marginBottom: '24px', overflowX: 'auto' }}>
              {this.state.error?.message || 'Unknown runtime error'}
            </div>

            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button className="btn-primary" onClick={this.handleReset} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <RotateCcw size={16} /> Try Reloading View
              </button>
              {this.props.onNavigateHome && (
                <button className="btn-secondary" onClick={this.props.onNavigateHome} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Home size={16} /> Return to Overview
                </button>
              )}
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
