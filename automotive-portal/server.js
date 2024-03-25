require('dotenv').config();
const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  next();
});

app.use(cors());
app.use(express.json());

const REVIEWS_FILE = path.join(__dirname, 'reviews.json');
const POSTS_FILE = path.join(__dirname, 'posts.json');

app.get('/api/reviews', async (req, res) => {
  try {
    const data = await fs.readFile(REVIEWS_FILE, 'utf8');
    res.json(JSON.parse(data));
  } catch (err) {
    console.error(err);
    res.status(500).send('Error reading reviews file.');
  }
});

app.post('/api/reviews', async (req, res) => {
  console.log("Received review:", req.body);
  try {
    const data = await fs.readFile(REVIEWS_FILE, 'utf8');
    const reviews = JSON.parse(data);
    reviews.push({ ...req.body, id: reviews.length + 1, timestamp: new Date().toISOString() });
    await fs.writeFile(REVIEWS_FILE, JSON.stringify(reviews, null, 2));
    res.status(201).send('Review added.');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error processing your request.');
  }
});

app.delete('/api/reviews/:id', async (req, res) => {
  const reviewId = parseInt(req.params.id, 10);

  try {
    const data = await fs.readFile(REVIEWS_FILE, 'utf8');
    let reviews = JSON.parse(data);
    
    reviews = reviews.filter(review => review.id !== reviewId);

    await fs.writeFile(REVIEWS_FILE, JSON.stringify(reviews, null, 2));
    res.status(200).send(`Review with id ${reviewId} deleted.`);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error processing your request.');
  }
});

app.get('/api/posts', async (req, res) => {
  try {
    const data = await fs.readFile(POSTS_FILE, 'utf8');
    let posts = JSON.parse(data);

    const { topicId } = req.query;
    if (topicId) {
      posts = posts.filter(post => post.topicId.toString() === topicId);
    }

    res.json(posts);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error reading posts file.');
  }
});

app.post('/api/posts', async (req, res) => {
  console.log("Received post:", req.body);
  try {
    const data = await fs.readFile(POSTS_FILE, 'utf8');
    const posts = JSON.parse(data) || [];
    posts.push({ ...req.body, id: posts.length + 1, timestamp: new Date().toISOString() });
    await fs.writeFile(POSTS_FILE, JSON.stringify(posts, null, 2));
    res.status(201).send('Post added.');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error processing your request.');
  }
});

app.delete('/api/posts/:id', async (req, res) => {
  const postId = parseInt(req.params.id, 10); 

  try {
    const data = await fs.readFile(POSTS_FILE, 'utf8');
    let posts = JSON.parse(data);

    const filteredPosts = posts.filter(post => post.id !== postId);

    await fs.writeFile(POSTS_FILE, JSON.stringify(filteredPosts, null, 2));
    res.status(200).send(`Post with id ${postId} deleted.`);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error processing your request.');
  }
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'build')));
  
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
