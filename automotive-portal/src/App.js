import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import CarReviews from './pages/CarReviews';
import AutomotiveNews from './pages/AutomotiveNews';
import CommunityForum from './pages/CommunityForum';
import TopicPosts from './pages/TopicPosts'; 

function App() {
  return (
    <Router>
      <div style={styles.appStyle}>
        <Header />
        <main style={styles.mainStyle}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/car-reviews" element={<CarReviews />} />
            <Route path="/automotive-news" element={<AutomotiveNews />} />
            <Route path="/community-forum" element={<CommunityForum />} />
            <Route path="/topic/:topicId/posts" element={<TopicPosts />} /> {}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

const styles = {
  appStyle: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  mainStyle: {
    flex: 1,
    padding: '20px',
  },
};

export default App;
