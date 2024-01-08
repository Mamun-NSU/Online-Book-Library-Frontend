// import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axiosInstanceLibraryService from '../../utils/axiosInstance';

const ReviewForm = ({ book, newReviewData, setNewReviewData, setShowReviewForm }) => {
  const { rating, comment } = newReviewData;

  const handleRatingChange = (e) => {
    setNewReviewData({ ...newReviewData, rating: e.target.value });
  };

  const handleCommentChange = (e) => {
    setNewReviewData({ ...newReviewData, comment: e.target.value });
  };

  const handleSubmitReview = async (e) => {
    e.preventDefault();
    try {
      // Make a POST request to submit the review
      const response = await axiosInstanceLibraryService.post(`/books/${book.bookId}/reviews/create`, newReviewData);
      if (response.status === 201) {
        // Review submitted successfully
        toast.success('Review submitted successfully');
        setShowReviewForm(false); // Hide the review form
        setNewReviewData({ rating: 0, comment: "" }); // Clear the review data
      } else {
        // Handle any errors here
        console.error('Error submitting review');
        toast.error('Error submitting review');
      }
    } catch (error) {
      console.error('Error submitting review:', error);
      toast.error('Error submitting review:', error);
    }
  };

  const handleCancelReview = () => {
    setShowReviewForm(false); // Hide the review form
  };

  return (
    <Modal show={true} onHide={handleCancelReview}>
      <Modal.Header closeButton>
        <Modal.Title>Add Review for {book.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmitReview}>
          <div>
            <label>Rating:</label>
            <input type="number" value={rating} onChange={handleRatingChange} />
          </div>
          <div>
            <label>Comment:</label>
            <textarea value={comment} onChange={handleCommentChange} />
          </div>
          <div>
            <button type="submit">Submit Review</button>
            <button type="button" onClick={handleCancelReview}>Cancel</button>
          </div>
        </form>
      </Modal.Body>
      <ToastContainer />
    </Modal>
  );
};

export default ReviewForm;
