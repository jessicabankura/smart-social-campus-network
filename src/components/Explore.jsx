import React from 'react';

function Explore() {
  return (
    <div className="glass-panel animate-fade-in-up" style={{ padding: '2rem' }}>
      <h2>Explore Trending</h2>
      <p className="text-muted">Discover what the AI algorithm thinks you'll like.</p>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1rem' }}>
        <div style={{ height: '150px', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><span style={{fontSize: '2rem'}}>🌌</span></div>
        <div style={{ height: '150px', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><span style={{fontSize: '2rem'}}>🚀</span></div>
        <div style={{ height: '150px', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><span style={{fontSize: '2rem'}}>💡</span></div>
        <div style={{ height: '150px', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><span style={{fontSize: '2rem'}}>📈</span></div>
      </div>
    </div>
  );
}

export default Explore;
