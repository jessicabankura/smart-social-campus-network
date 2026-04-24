import React from 'react';

function Messages() {
  return (
    <div className="glass-panel animate-fade-in-up" style={{ padding: '2rem' }}>
      <h2>Messages</h2>
      <p className="text-muted">Your private conversations.</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
        {[1,2,3].map(i => (
          <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'center', padding: '1rem', background: 'rgba(255,255,255,0.02)', borderRadius: '12px', cursor: 'pointer', transition: 'background 0.2s' }} className="message-item">
            <div className="avatar small">U{i}</div>
            <div>
              <h4 style={{ margin: 0, color: '#fff' }}>User {i}</h4>
              <p className="text-muted" style={{ fontSize: '0.9rem', margin: 0 }}>Hey, how's the prototype going?</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Messages;
