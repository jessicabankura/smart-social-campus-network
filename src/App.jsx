import React, { useState } from 'react';
import Layout from './components/Layout';
import Feed from './components/Feed';
import Explore from './components/Explore';
import AIInsights from './components/AIInsights';
import Messages from './components/Messages';
import Profile from './components/Profile';

function App() {
  const [currentView, setCurrentView] = useState('Home');

  const renderView = () => {
    switch (currentView) {
      case 'Home': return <Feed />;
      case 'Explore': return <Explore />;
      case 'AI Insights': return <AIInsights />;
      case 'Messages': return <Messages />;
      case 'Profile': return <Profile />;
      default: return <Feed />;
    }
  };

  return (
    <Layout currentView={currentView} setCurrentView={setCurrentView}>
      {renderView()}
    </Layout>
  );
}

export default App;
