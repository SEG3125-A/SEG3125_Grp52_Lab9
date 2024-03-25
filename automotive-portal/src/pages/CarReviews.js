import React, { useState, useEffect } from 'react';
import './CarReviews.css';

const CarReviews = () => {
  const [reviews, setReviews] = useState([]);

  const [newReview, setNewReview] = useState({
    model: '',
    review: '',
    rating: '',
  });

  useEffect(() => {
    fetch('http://localhost:3001/api/reviews')
      .then(response => response.json())
      .then(data => setReviews(data))
      .catch(error => console.error('Error fetching reviews:', error));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview({ ...newReview, [name]: value });
  };

  const addReview = (e) => {
    e.preventDefault();
    const review = { model: newReview.model, review: newReview.review, rating: newReview.rating };

    fetch('http://localhost:3001/api/reviews', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(review),
    })
    .then(response => {
      if (response.ok) {
        return fetch('http://localhost:3001/api/reviews');
      } else {
        throw new Error('Failed to submit review');
      }
    })
    .then(response => response.json())
    .then(data => {
      setReviews(data);
      setNewReview({ model: '', review: '', rating: '' });
    })
    .catch(error => console.error('Error:', error));
  };

  const deleteReview = (id) => {
    fetch(`http://localhost:3001/api/reviews/${id}`, {
      method: 'DELETE',
    })
    .then(response => {
      if (response.ok) {
        setReviews(reviews.filter(review => review.id !== id));
      } else {
        throw new Error('Failed to delete review');
      }
    })
    .catch(error => console.error('Error:', error));
  };

  return (
    <div className="container">
      <h1>Car Reviews</h1>
      {reviews.length > 0 ? (
        <ul className="reviewList">
          {reviews.map((review) => (
            <li key={review.id} className="reviewItem">
              <h2>{review.model}</h2>
              <p>{review.review}</p>
              <p>Rating: {review.rating}</p>
              <button onClick={() => deleteReview(review.id)} className="deleteButton">Delete Review</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No reviews available at the moment.</p>
      )}

      <form onSubmit={addReview} className="formStyle">
        <h2>Add Your Review</h2>
        <input
          type="text"
          name="model"
          className="inputStyle"
          value={newReview.model}
          onChange={handleInputChange}
          placeholder="Model"
          required
        />
        <textarea
          name="review"
          className="textareaStyle"
          value={newReview.review}
          onChange={handleInputChange}
          placeholder="Review"
          required
        />
        <input
          type="text"
          name="rating"
          className="inputStyle"
          value={newReview.rating}
          onChange={handleInputChange}
          placeholder="Rating"
          required
        />
        <button type="submit" className="buttonStyle">Submit Review</button>
      </form>
    </div>
  );
};

export default CarReviews;
