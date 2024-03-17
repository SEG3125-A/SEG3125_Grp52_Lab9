import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Welcome to Automotive Portal</h1>
      <p style={styles.introduction}>
        Your ultimate destination for in-depth car reviews, the latest automotive news, and a vibrant community forum.
      </p>
      <div style={styles.features}>
        <div style={styles.feature}>
          <h2>Car Reviews</h2>
          <p>Get the latest insights and detailed analyses of the newest car models on the market.</p>
          <Link to="/car-reviews" style={styles.link}>Explore Car Reviews</Link>
        </div>
        <div style={styles.feature}>
          <h2>Automotive News</h2>
          <p>Stay up-to-date with the latest news in the automotive industry, including innovations, car shows, and regulatory changes.</p>
          <Link to="/automotive-news" style={styles.link}>Read Automotive News</Link>
        </div>
        <div style={styles.feature}>
          <h2>Community Forum</h2>
          <p>Join the discussion with fellow automotive enthusiasts. Share experiences, advice, and engage in discussions on various automotive topics.</p>
          <Link to="/community-forum" style={styles.link}>Visit the Forum</Link>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
  },
  heading: {
    margin: '0',
    marginBottom: '20px',
  },
  introduction: {
    fontSize: 'larger',
    margin: '0',
    marginBottom: '20px',
  },
  features: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: '20px 0',
  },
  feature: {
    width: '30%',
    padding: '10px',
  },
  link: {
    textDecoration: 'none',
    color: '#007bff',
    marginTop: '10px',
    display: 'inline-block',
  }
};

export default Home;