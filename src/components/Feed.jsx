import React, { useState, useEffect } from 'react';
import Post from './Post';
import Composer from './Composer';

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/posts');
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  const handleNewPost = async (content) => {
    try {
      const response = await fetch('http://localhost:5000/api/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content, author: 'You' })
      });
      if (!response.ok) throw new Error('Failed to create post');
      const newPost = await response.json();
      // Smart sorting: prepend new posts
      setPosts([newPost, ...posts]);
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  return (
    <div className="feed flex-col gap-4">
      <Composer onPost={handleNewPost} />
      <div className="feed-posts flex-col gap-4">
        {posts.map((post) => (
          <Post key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
}

export default Feed;
