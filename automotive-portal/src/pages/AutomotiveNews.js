import React, { useState, useEffect } from 'react';

const AutomotiveNews = () => {

  const [newsItems, setNewsItems] = useState([
    {
      id: 1,
      title: 'Electrica Reveals New Battery Technology',
      summary: 'Electrica has announced a breakthrough in battery technology that promises to significantly increase the range of electric vehicles.',
      date: 'March 15, 2024',
    },
    {
      id: 2,
      title: 'Autonomous Vehicles Gain Regulatory Approval',
      summary: 'Several countries have updated their regulatory frameworks to allow for the broader use of fully autonomous vehicles on public roads.',
      date: 'March 20, 2024',
    },
    {
      id: 3,
      title: 'Global Auto Show Highlights',
      summary: 'The Global Auto Show this year unveiled several highly anticipated models, showcasing the latest in automotive design and technology.',
      date: 'March 25, 2024',
    },
  ]);

  return (
    <div style={styles.container}>
      <h1>Automotive News</h1>
      {newsItems.length > 0 ? (
        <ul style={styles.newsList}>
          {newsItems.map((item) => (
            <li key={item.id} style={styles.newsItem}>
              <h2>{item.title}</h2>
              <p>{item.summary}</p>
              <p style={styles.dateStyle}>{item.date}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No news available at the moment.</p>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
  },
  newsList: {
    listStyleType: 'none',
    padding: 0,
  },
  newsItem: {
    marginBottom: '20px',
    borderBottom: '1px solid #ccc',
    paddingBottom: '10px',
  },
  dateStyle: {
    fontStyle: 'italic',
    color: '#666',
  }
};

export default AutomotiveNews;