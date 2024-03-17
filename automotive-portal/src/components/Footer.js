import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footerStyle}>
      <p style={styles.textStyle}>© 2024 Automotive Portal. All rights reserved.</p>
      <p style={styles.contactInfo}>Email: contact@automotiveportal.com | Phone: +1 (555) 123-4567</p>
    </footer>
  );
};

const styles = {
  footerStyle: {
    backgroundColor: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '20px 10px', 
    position: 'fixed',
    left: '0',
    bottom: '0',
    width: '100%',
  },
  textStyle: {
    margin: '0',
    marginBottom: '5px', 
  },
  contactInfo: {
    margin: '0',
    fontSize: 'smaller',
  }
};

export default Footer;