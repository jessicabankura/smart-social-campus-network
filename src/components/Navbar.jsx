import React from 'react';

function Navbar() {
  return (
    <nav className="navbar glass-panel">
      <div className="navbar-logo">
        <span className="logo-icon">✨</span>
        <h2>SmartConnect</h2>
      </div>
      <div className="navbar-search">
        <input type="text" placeholder="Search the network..." className="search-input" />
      </div>
      <div className="navbar-profile">
        <button className="btn-icon">🔔</button>
        <div className="avatar">U</div>
      </div>
    </nav>
  );
}

export default Navbar;
