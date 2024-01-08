
import { Card, Button } from 'react-bootstrap';
import { useState } from 'react';
import axiosInstanceLibraryService from '../../utils/axiosInstance';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Navigate } from 'react-router-dom';
import "../../css/globalStyles.css"

const DeleteBookCart = ({ book, handleConfirmDelete }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  const [error, setError] = useState();


  const handleDelete = () => {
    setIsLoading(true);
  
    const bookDto = {
      bookId: book.bookId,
      title: book.title,
      author: book.author,
      isbn: book.isbn,
      image: book.image,
    };
  
    axiosInstanceLibraryService
      .delete('/books/delete', {
        data: bookDto,
      })
      .then((resp) => {
        console.log('Book Deleted:', resp.data);
        setIsDeleted(true);
        handleConfirmDelete(book);
        toast.success('Book Deleted successfully!!!');
        Navigate("/books"); 
      })
      .catch((error) => {
        console.error('Error deleting book:', error);
        // toast.error('Error deleting book:', error);
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <Card className="myContainer book-card">
      <Card.Img className="book-card-image" variant="top" src={book.image} alt={book.title} />
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
        <Card.Text>Book ID: {book.bookId}</Card.Text>
        <Card.Text>Author: {book.author}</Card.Text>
        <Card.Text>ISBN: {book.isbn}</Card.Text>
        <Button variant="danger" onClick={handleDelete} disabled={isLoading}>
          {isLoading ? 'Deleting...' : 'Confirm Delete'}
        </Button>
        {isDeleted && <div style={{ color: 'green' }}>Book Deleted Successfully</div>}
      </Card.Body>
      <ToastContainer />
    </Card>
  );
};

export default DeleteBookCart;
