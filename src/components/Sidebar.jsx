import React from 'react';

function Sidebar({ currentView, setCurrentView }) {
  const menuItems = [
    { icon: '🏠', label: 'Home' },
    { icon: '🔍', label: 'Explore' },
    { icon: '🤖', label: 'AI Insights' },
    { icon: '✉️', label: 'Messages' },
    { icon: '👤', label: 'Profile' },
  ];

  const handleCreatePost = () => {
    setCurrentView('Home');
    // Wait for the Home view to render, then focus the composer
    setTimeout(() => {
      const input = document.querySelector('.composer-input');
      if (input) {
        input.focus();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <aside className="sidebar">
      <ul className="sidebar-menu">
        {menuItems.map((item, index) => (
          <li 
            key={index} 
            className={`menu-item ${currentView === item.label ? 'active' : ''}`}
            onClick={() => setCurrentView(item.label)}
          >
            <span className="menu-icon">{item.icon}</span>
            <span className="menu-label">{item.label}</span>
          </li>
        ))}
      </ul>
      <div className="sidebar-footer">
        <button className="btn-primary w-full" onClick={handleCreatePost}>Create Post</button>
      </div>
    </aside>
  );
}

export default Sidebar;
