import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './TopicPosts.css';

const TopicPosts = () => {
  const { topicId } = useParams();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(`http://localhost:3001/api/posts?topicId=${topicId}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Could not fetch posts:", error);
      }
    };

    fetchPosts();
  }, [topicId]);

  const deletePost = async (postId) => {
    try {
      const response = await fetch(`http://localhost:3001/api/posts/${postId}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      setPosts(posts.filter(post => post.id !== postId));
    } catch (error) {
      console.error("Could not delete post:", error);
    }
  };

  return (
    <div className="posts-container">
      <h2>Posts for Topic ID: {topicId}</h2>
      <div>
        {posts.map(post => (
          <div key={post.id} className="post-item">
            <p><strong>Post ID:</strong> {post.id}</p>
            <label htmlFor={`content-${post.id}`}><strong>Content:</strong></label>
            <p><textarea id={`content-${post.id}`} name={`content-${post.id}`} value={post.content} readOnly /></p>
            <button onClick={() => deletePost(post.id)}>Delete Post</button>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopicPosts;
