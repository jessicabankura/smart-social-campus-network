import React from 'react';

function AIInsights() {
  return (
    <div className="glass-panel animate-fade-in-up" style={{ padding: '2rem' }}>
      <h2>AI Insights Dashboard</h2>
      <p className="text-muted">Analyze the sentiment and reach of your recent activities.</p>
      <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
        <div style={{ flex: 1, padding: '1rem', background: 'rgba(102, 252, 241, 0.1)', borderRadius: '12px', color: 'var(--primary-color)' }}>
          <h3>Sentiment Score</h3>
          <h1 style={{ margin: '0.5rem 0' }}>92%</h1>
          <p style={{ fontSize: '0.85rem', margin: 0 }}>Highly Positive</p>
        </div>
        <div style={{ flex: 1, padding: '1rem', background: 'rgba(255, 255, 255, 0.05)', borderRadius: '12px' }}>
          <h3 style={{ color: '#fff' }}>Reach Estimate</h3>
          <h1 style={{ margin: '0.5rem 0', color: '#fff' }}>4.2k</h1>
          <p className="text-muted" style={{ fontSize: '0.85rem', margin: 0 }}>Potential Impressions</p>
        </div>
      </div>
    </div>
  );
}

export default AIInsights;
