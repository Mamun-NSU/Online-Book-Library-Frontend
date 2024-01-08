
// BookCartsList.js
import { useEffect, useState } from 'react';
import useBookHook from '../../hooks/useBookHook';
import { Container, Row, Col, Modal } from 'react-bootstrap';

import BookCart from './BookCart';
import DeleteBookCart from './DeleteBookCart';
import UpdatedBookForm from './UpdatedBookForm';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axiosInstanceLibraryService from '../../utils/axiosInstance';

const BookCartsList = () => {
  const { books, handleDeleteBook } = useBookHook();
  const [selectedBook, setSelectedBook] = useState(null);
  const [confirmDeleteBook, setConfirmDeleteBook] = useState(null);
  const [userBorrowedBooks, setUserBorrowedBooks] = useState([]); // State to store user's borrowed books
  // const [isReservied, setIsReservied] = useState([]);

  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("userId"); // Replace with the actual user's ID

  useEffect(() => {
    // Fetch the user's borrowed books
    fetch(`http://localhost:8080/users/${userId}/borrowed-books`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setUserBorrowedBooks(data))
      .catch((error) => console.error('Error fetching user\'s borrowed books:', error));
  }, [userId, token]);

  // Function to set the selected book when "Update Book" is clicked
  const handleUpdateClick = (book) => {
    setSelectedBook(book);
  };

  // Function to set the book to be confirmed for deletion
  const handleDeleteClick = (book) => {
    setConfirmDeleteBook(book);
  };

  // Function to confirm and perform book deletion
  const handleConfirmDelete = async (book) => {
    // Perform the DELETE API request here using the book data
    try {
      await handleDeleteBook(book); // You need to implement handleDeleteBook
      // Optionally, update the state or perform other actions after successful deletion
    } catch (error) {
      console.error('Error deleting book:', error);
    }

    // Reset the selected book and confirmed delete book
    setSelectedBook(null);
    setConfirmDeleteBook(null);
  };




// Function to handle borrowing a book
const handleBorrowClick = async (book) => {
  try {
    const response = await axiosInstanceLibraryService.post(`/books/${book.bookId}/borrow`);

    if (response.status === 200) {
      console.log('Book borrowed successfully');
      toast.success('Book borrowed successfully');
    } else {
      console.error('Return your book first!');
      toast.error('Return your book first!');
    }
  } catch (error) {
    console.error('Error borrowing book:', error);
    toast.error('Error borrowing book:', error);
  }
};

// Function to handle returning a book
const handleReturnClick = async (book) => {
  try {
    const response = await axiosInstanceLibraryService.put(`/books/${book.bookId}/return`, {
      bookId: book.bookId
    });

    console.log('Response for return: ', response);
    if (response.status === 200) {
      console.log('Book returned successfully');
      toast.success('Book returned successfully');
    } else {
      console.error('Error returning book');
      toast.error('Something happening to return this book');
    }
  } catch (error) {
    console.error('Error returning book:', error);
    toast.error('Error returning book:', error);
  }
};

// Function to handle reserving a book
const handleReserveClick = async (book) => {
  try {
    const response = await axiosInstanceLibraryService.post(`/books/${book.bookId}/reserve`);

    if (response.status === 200) {
      console.log('Book reserved successfully');
      toast.success('Book reserved successfully');
    } else {
      console.error('Error reserving book');
      toast.error('Something happening to reserving this book');
    }
  } catch (error) {
    console.error('Error reserving book:', error);
    toast.error('Error reserving book');
  }
};

// Function to handle canceling a reservation
const handleCancelReserveClick = async (book) => {
  try {
    const response = await axiosInstanceLibraryService.put('/cancel-reservation', {
      bookId: book.bookId
    });

    console.log('Response for cancel reservation: ', response);
    if (response.status === 200) {
      console.log('Reservation canceled successfully');
      toast.success('Reservation canceled successfully');
      // Optionally, update the state or perform other actions after successful cancellation
    } else {
      console.error('Error canceling reservation');
      toast.error('Something happening to canceling reservation this book');
    }
  } catch (error) {
    console.error('Error canceling reservation:', error);
    toast.error('Error canceling reservation:', error);
  }
};



  // Filter books to show only those with status !== "Deleted"
  const filteredBooks = books.filter((book) => book.status !== "Deleted");


  return (
    <Container>
      <h1>Book List</h1>
      <Row>
        {filteredBooks.map((book, i) => {
          // Check if the book is in the user's borrowed books
          const isBorrowed = userBorrowedBooks.some((borrowedBook) => borrowedBook.bookId === book.bookId);
          return (
            <Col key={i} lg={4} md={6} sm={12}>
                            {selectedBook && (
                <Modal show={selectedBook !== null} onHide={() => setSelectedBook(null)}>
                  <Modal.Header closeButton>
                    <Modal.Title>Update Book</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <UpdatedBookForm book={selectedBook} />
                  </Modal.Body>
                </Modal>
              )}
              {confirmDeleteBook === book ? (
                <DeleteBookCart book={book} handleConfirmDelete={handleConfirmDelete} />
              ) : (
                <BookCart
                  book={book}
                  handleUpdateClick={handleUpdateClick}
                  handleDeleteClick={handleDeleteClick}
                  handleBorrowClick={handleBorrowClick}
                  handleReserveClick={handleReserveClick}
                  handleCancelReserveClick={handleCancelReserveClick}
                  handleReturnClick={handleReturnClick}
                  status={book.status}
                  isBorrowed={isBorrowed} // Pass the isBorrowed flag
                />
              )}
            </Col>
          );
        })}
      </Row>
      <ToastContainer />
    </Container>
  );

};

export default BookCartsList;
