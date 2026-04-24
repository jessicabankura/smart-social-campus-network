import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

function Layout({ children, currentView, setCurrentView }) {
  return (
    <div className="layout">
      <Navbar />
      <div className="layout-body">
        <Sidebar currentView={currentView} setCurrentView={setCurrentView} />
        <main className="layout-main">
          {children}
        </main>
        <aside className="layout-right">
          <div className="glass-panel trending-panel">
            <h3>Trending Topics</h3>
            <p className="text-muted">#ArtificialIntelligence</p>
            <p className="text-muted">#WebDevelopment</p>
            <p className="text-muted">#FutureOfTech</p>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default Layout;
