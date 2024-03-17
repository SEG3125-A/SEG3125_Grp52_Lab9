import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={styles.headerStyle}>
      <h1 style={styles.titleStyle}>Automotive Portal</h1>
      <nav>
        <ul style={styles.navListStyle}>
          <li style={styles.navItemStyle}>
            <Link to="/" style={styles.navLinkStyle}>Home</Link>
          </li>
          <li style={styles.navItemStyle}>
            <Link to="/car-reviews" style={styles.navLinkStyle}>Car Reviews</Link>
          </li>
          <li style={styles.navItemStyle}>
            <Link to="/automotive-news" style={styles.navLinkStyle}>Automotive News</Link>
          </li>
          <li style={styles.navItemStyle}>
            <Link to="/community-forum" style={styles.navLinkStyle}>Community Forum</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

const styles = {
  headerStyle: {
    backgroundColor: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px',
  },
  titleStyle: {
    margin: '0',
  },
  navListStyle: {
    listStyleType: 'none',
    padding: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  navItemStyle: {
    margin: '0 10px',
  },
  navLinkStyle: {
    color: '#fff',
    textDecoration: 'none',
  }
};

export default Header;