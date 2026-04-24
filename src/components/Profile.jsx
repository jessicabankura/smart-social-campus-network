import React from 'react';

function Profile() {
  return (
    <div className="glass-panel animate-fade-in-up" style={{ padding: '2rem', textAlign: 'center' }}>
      <div className="avatar" style={{ width: '100px', height: '100px', fontSize: '3rem', margin: '0 auto 1rem' }}>U</div>
      <h2>Your Profile</h2>
      <p className="text-muted" style={{ marginBottom: '1.5rem' }}>@user_123</p>
      <button className="btn-primary">Edit Profile</button>
      
      <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '2rem', borderTop: '1px solid var(--glass-border)', paddingTop: '1.5rem' }}>
        <div>
          <h3 style={{ color: 'var(--primary-color)', margin: 0 }}>12</h3>
          <p className="text-muted" style={{ margin: 0 }}>Posts</p>
        </div>
        <div>
          <h3 style={{ color: 'var(--primary-color)', margin: 0 }}>340</h3>
          <p className="text-muted" style={{ margin: 0 }}>Followers</p>
        </div>
        <div>
          <h3 style={{ color: 'var(--primary-color)', margin: 0 }}>150</h3>
          <p className="text-muted" style={{ margin: 0 }}>Following</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
