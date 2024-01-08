import  { useEffect, useState } from 'react';
import axiosInstanceLibraryService from '../../utils/axiosInstance';
import '../../css/BookReviews.css'; // Import the CSS file

const BookReviews = ({ bookId }) => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axiosInstanceLibraryService
      .get(`/books/${bookId}/reviews`)
      .then((response) => {
        setReviews(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching reviews:', error);
        setLoading(false);
      });
  }, [bookId]);

  if (loading) {
    return <div className="review-loading">Loading reviews...</div>;
  }

  if (reviews.length === 0) {
    return <div className="no-reviews">No reviews available for this book.</div>;
  }

  return (
    <div className="reviews-container">
      <h2 className="reviews-title">Reviews for Book ID: {bookId}</h2>
      <ul className="reviews-list">
        {reviews.map((review) => (
          <div key={review.reviewId} className="review-item">
            <p className="review-rating">Rating: {review.rating}</p>
            <p className="review-comment">Comment: {review.comment}</p>
            <p className="review-user">By: {review.user.firstName} {review.user.lastName}</p>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default BookReviews;

