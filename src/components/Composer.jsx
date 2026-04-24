import React, { useState } from 'react';

function Composer({ onPost }) {
  const [content, setContent] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleSmartSuggest = () => {
    setIsGenerating(true);
    // Mock AI suggestion
    setTimeout(() => {
      setContent(prev => prev + " This is truly fascinating! The implications for the future are massive. 🚀 #Tech #Innovation");
      setIsGenerating(false);
    }, 1000);
  };

  const handleSubmit = () => {
    if (content.trim()) {
      onPost(content);
      setContent('');
    }
  };

  return (
    <div className="composer glass-panel animate-fade-in-up">
      <div className="composer-header">
        <div className="avatar small">U</div>
        <textarea 
          placeholder="What's on your mind? Use AI to enhance your post."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="composer-input"
        />
      </div>
      <div className="composer-actions">
        <div className="action-buttons">
          <button className="btn-icon" title="Add Image">🖼️</button>
          <button className="btn-icon" title="Add Video">🎬</button>
          <button 
            className="btn-icon ai-btn" 
            title="Smart Suggest"
            onClick={handleSmartSuggest}
            disabled={isGenerating}
          >
            {isGenerating ? '⏳' : '✨'}
          </button>
        </div>
        <button className="btn-primary" onClick={handleSubmit}>Post</button>
      </div>
    </div>
  );
}

export default Composer;
