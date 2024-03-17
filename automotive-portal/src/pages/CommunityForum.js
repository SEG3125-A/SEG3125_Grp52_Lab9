import React, { useState } from 'react';

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
  ]);

  return (
    <div style={styles.container}>
      <h1>Community Forum</h1>
      <ul style={styles.topicList}>
        {topics.map((topic) => (
          <li key={topic.id} style={styles.topicItem}>
            <h2 style={styles.topicTitle}>{topic.title}</h2>
            <p style={styles.topicInfo}>Posts: {topic.posts} | Last Post: {topic.lastPost}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
  },
  topicList: {
    listStyleType: 'none',
    padding: 0,
  },
  topicItem: {
    marginBottom: '20px',
    borderBottom: '1px solid #ccc',
    paddingBottom: '10px',
  },
  topicTitle: {
    margin: '0',
    color: '#007bff',
    cursor: 'pointer',
  },
  topicInfo: {
    margin: '5px 0 0 0',
    color: '#666',
  }
};

export default CommunityForum;