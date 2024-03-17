import React, { useState } from 'react';
import './CommunityForum.css'; 

const CommunityForum = () => {
  const [topics, setTopics] = useState([
    {
      id: 1,
      title: 'Best Electric Cars 2024',
      posts: 152,
      lastPost: 'Today at 10:45 AM',
    },
    {
      id: 2,
      title: 'Upcoming Automotive Shows',
      posts: 89,
      lastPost: 'Yesterday at 6:20 PM',
    },
    {
      id: 3,
      title: 'DIY Maintenance Tips',
      posts: 230,
      lastPost: 'March 15, 2024',
    },
    {
      id: 4,
      title: 'How to Choose Your First Electric Vehicle',
      posts: 115,
      lastPost: '2 hours ago',
    },
    {
      id: 5,
      title: 'Future of Self-Driving Cars',
      posts: 198,
      lastPost: 'April 10, 2024',
    },
  ]);

  const addPost = (topicId, postContent) => {
    setTopics((prevTopics) =>
      prevTopics.map((topic) => {
        if (topic.id === topicId) {
          return {
            ...topic,
            posts: topic.posts + 1,
            lastPost: 'Just now',
          };
        }
        return topic;
      })
    );
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
            {}
            <form onSubmit={(e) => {
              e.preventDefault();
              const postContent = e.target.elements.postContent.value;
              addPost(topic.id, postContent);
              e.target.elements.postContent.value = ''; 
            }}>
              <input type="text" name="postContent" className="post-input" placeholder="Write a post..." required />
              <button type="submit" className="post-submit">Add Post</button>
            </form>
            {}
            <button className="view-posts-btn">View Posts</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommunityForum;