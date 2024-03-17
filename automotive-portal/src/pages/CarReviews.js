import React, { useState, useEffect } from 'react';

const CarReviews = () => {

  const [reviews, setReviews] = useState([
    {
      id: 1,
      model: '2024 Electrica Sedan',
      review: 'The 2024 Electrica Sedan offers an impressive range, cutting-edge technology, and a luxurious interior. It sets a new standard for electric vehicles.',
      rating: '★★★★★',
    },
    {
      id: 2,
      model: '2024 Mountain SUV',
      review: 'Designed for adventure, the 2024 Mountain SUV combines rugged capability with comfort. It’s as at home on the trails as it is on city streets.',
      rating: '★★★★☆',
    },
    {
      id: 3,
      model: '2024 Grand Coupe',
      review: 'The 2024 Grand Coupe blends performance with elegance in a way that few can. Its driving dynamics and luxurious appointments impress.',
      rating: '★★★★½',
    },
  ]);

  return (
    <div style={styles.container}>
      <h1>Car Reviews</h1>
      {reviews.length > 0 ? (
        <ul style={styles.reviewList}>
          {reviews.map((review) => (
            <li key={review.id} style={styles.reviewItem}>
              <h2>{review.model}</h2>
              <p>{review.review}</p>
              <p>Rating: {review.rating}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No reviews available at the moment.</p>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
  },
  reviewList: {
    listStyleType: 'none',
    padding: 0,
  },
  reviewItem: {
    marginBottom: '20px',
    borderBottom: '1px solid #ccc',
    paddingBottom: '10px',
  }
};

export default CarReviews;