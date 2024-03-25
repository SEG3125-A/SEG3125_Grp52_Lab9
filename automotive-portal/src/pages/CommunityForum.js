import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './CommunityForum.css';

const CommunityForum = () => {
  const [topics, setTopics] = useState([

    { id: 1, title: 'Best Electric Cars 2024', lastPost: 'Today at 10:45 AM' },
    { id: 2, title: 'Upcoming Automotive Shows', lastPost: 'Yesterday at 6:20 PM' },
    { id: 3, title: 'DIY Maintenance Tips', lastPost: 'March 15, 2024' },
    { id: 4, title: 'How to Choose Your First Electric Vehicle', lastPost: '2 hours ago' },
    { id: 5, title: 'Future of Self-Driving Cars', lastPost: 'April 10, 2024' },
  ]);

  useEffect(() => {
    const fetchPostsAndUpdateTopics = async () => {
      try {
        const response = await fetch(`http://localhost:3001/api/posts`);
        const posts = await response.json();
  
        const updatedTopics = topics.map(topic => {
          const topicPosts = posts.filter(post => post.topicId === topic.id);
          const postsCount = topicPosts.length;
          const mostRecentPost = topicPosts.reduce((latest, current) => {
            return new Date(latest.timestamp) < new Date(current.timestamp) ? current : latest;
          }, topicPosts[0]);
  
          return {
            ...topic,
            posts: postsCount,
            lastPost: mostRecentPost ? new Date(mostRecentPost.timestamp).toLocaleString() : topic.lastPost,
          };
        });
  
        setTopics(updatedTopics);
      } catch (error) {
        console.error('Error fetching posts count:', error);
      }
    };
  
    fetchPostsAndUpdateTopics();
  }, []);

  const addPost = async (topicId, postContent) => {
    try {
      const response = await fetch('http://localhost:3001/api/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ topicId, content: postContent }),
      });
  
      if (response.ok) {
        console.log('Post added successfully');
          const newPostTimestamp = new Date().toLocaleString();
  
        setTopics(prevTopics => prevTopics.map(topic => {
          if (topic.id === topicId) {
            return { ...topic, posts: topic.posts + 1, lastPost: newPostTimestamp };
          }
          return topic;
        }));
      } else {
        console.error('Failed to add post');
      }
    } catch (error) {
      console.error('Error adding post:', error);
    }
  };

  return (
    <div className="forum-container">
      <h1>Community Forum</h1>
      <p className="forum-introduction">
        Welcome to the Automotive Community Forum. Dive into discussions on your favorite automotive topics, share your experiences, and get advice from fellow enthusiasts.
      </p>
      <ul className="topic-list">
        {topics.map((topic) => (
          <li key={topic.id} className="topic-item">
            <h2 className="topic-title">{topic.title}</h2>
            <p className="topic-info">Posts: {topic.posts} | Last Post: {topic.lastPost}</p>
            <form onSubmit={(e) => {
              e.preventDefault();
              const postContent = e.target.elements.postContent.value;
              addPost(topic.id, postContent);
              e.target.elements.postContent.value = '';
            }}>
              <input type="text" name="postContent" className="post-input" placeholder="Write a post..." required />
              <button type="submit" className="post-submit">Add Post</button>
            </form>
            <Link to={`/topic/${topic.id}/posts`} className="view-posts-btn">View Posts</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommunityForum;
