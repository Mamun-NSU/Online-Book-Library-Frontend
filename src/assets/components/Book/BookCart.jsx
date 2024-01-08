import  { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "../../css/card.css";
import isAdmin from '../Authenticate/isAdmin';
import isCustomer from '../Authenticate/isCustomer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReviewForm from '../Review/ReviewForm';

const BookCart = ({ book, handleUpdateClick, handleDeleteClick, handleBorrowClick, handleReserveClick, handleCancelReserveClick, handleReturnClick, status, isBorrowed }) => {
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [newReviewData, setNewReviewData] = useState({ rating: 0, comment: "" });

  const isCustomerUser = isCustomer();
  const showBorrowButton = isCustomerUser && status === "Available";
  const showReturnButton = isCustomerUser && status === "Borrowed" && isBorrowed;
  const showReserveButton = isCustomerUser && status === "Borrowed" && !showReturnButton;
  const showCancelReserveButton = isCustomerUser && !showReserveButton && !showBorrowButton && !showReturnButton;

  const handleAddReviewClick = () => {
    setShowReviewForm(true);
  };

  return (
    <Card className="book-card">
      <Card.Img className="book-card-image" variant="top" src={book.image} alt={book.title} />
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
        <Card.Text>Book ID: {book.bookId}</Card.Text>
        <Card.Text>Author: {book.author}</Card.Text>
        <Card.Text>ISBN: {book.isbn}</Card.Text>
        <Link to={`/books/${book.bookId}`} style={{ textDecoration: 'none' }}>
          <Button variant="primary" style={{ marginRight: '10px' }}>
            Details
          </Button>
        </Link>
        {isAdmin() && (
          <>
            <Button variant="warning" onClick={() => handleUpdateClick(book)}>
              Update
            </Button>
            <Button variant="danger" onClick={() => handleDeleteClick(book)}>
              Delete
            </Button>
          </>
        )}
        {isCustomerUser && (
          <>
            {showBorrowButton && (
              <Button variant="secondary" onClick={() => handleBorrowClick(book)}>
                Borrow
              </Button>
            )}
            {showReturnButton && (
              <Button variant="success" onClick={() => handleReturnClick(book)}>
                Return
              </Button>
            )}
            {showReserveButton && (
              <Button variant="warning" onClick={() => handleReserveClick(book)}>
                Reserve
              </Button>
            )}
            {showCancelReserveButton && (
              <Button variant="secondary" onClick={() => handleCancelReserveClick(book)}>
                Cancel Reserve
              </Button>
            )}
            <Button variant="info" onClick={handleAddReviewClick}>
              Add Review
            </Button>
          </>
        )}
      </Card.Body>
      {showReviewForm && (
        <ReviewForm
          book={book}
          newReviewData={newReviewData}
          setNewReviewData={setNewReviewData}
          setShowReviewForm={setShowReviewForm}
        />
      )}
      <ToastContainer />
    </Card>
  );
};

export default BookCart;

