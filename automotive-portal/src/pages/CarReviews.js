import React, { useState } from 'react';
import './CarReviews.css';

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
      rating: '★★★☆☆',
    },

    {
      id: 4,
      model: '2023 City Compact',
      review: 'The 2023 City Compact is the perfect urban companion, offering efficiency and agility in a compact form factor.',
      rating: '★★★★☆',
    },
    {
      id: 5,
      model: '2024 Future Truck',
      review: 'The 2024 Future Truck redefines what to expect from a pickup, with unparalleled power and a suite of technological advancements.',
      rating: '★★★★★',
    },
  ]);


  const [newReview, setNewReview] = useState({
    model: '',
    review: '',
    rating: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview({ ...newReview, [name]: value });
  };

  const addReview = (e) => {
    e.preventDefault(); 
    const reviewWithId = { ...newReview, id: reviews.length + 1 };
    setReviews([...reviews, reviewWithId]);
    setNewReview({ model: '', review: '', rating: '' }); // Reset form
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
            </li>
          ))}
        </ul>
      ) : (
        <p>No reviews available at the moment.</p>
      )}

      {}
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