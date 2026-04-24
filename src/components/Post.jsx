import React, { useState } from 'react';

function Post({ author, time, content, likes, comments, relevance }) {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikeCount(isLiked ? likeCount - 1 : likeCount + 1);
  };

  return (
    <div className="post glass-panel animate-fade-in-up">
      {relevance && (
        <div className="post-relevance">
          <span className="relevance-icon">🔥</span> Highly relevant to your interests
        </div>
      )}
      <div className="post-header">
        <div className="avatar">{author.charAt(0)}</div>
        <div className="post-meta">
          <h4>{author}</h4>
          <span className="text-muted">{time}</span>
        </div>
      </div>
      <div className="post-content">
        <p>{content}</p>
      </div>
      <div className="post-actions">
        <button className={`action-btn ${isLiked ? 'liked' : ''}`} onClick={handleLike}>
          <span className="icon">❤️</span> {likeCount}
        </button>
        <button className="action-btn">
          <span className="icon">💬</span> {comments}
        </button>
        <button className="action-btn">
          <span className="icon">🔄</span> Share
        </button>
      </div>
    </div>
  );
}

export default Post;
