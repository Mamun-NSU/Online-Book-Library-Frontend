import { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import axiosInstanceLibraryService from '../../utils/axiosInstance';
import { Navigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UpdatedBookForm = ({ book, onUpdate }) => {
  const [updatedBook, setUpdatedBook] = useState(book);
  const [isLoading, setIsLoading] = useState(false);
  const [isUpdated, setIsUpdated] = useState(false);
  const [ setError] = useState();

  // Handle changes to the form inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedBook({ ...updatedBook, [name]: value });
  };

  // Function to update the book
  const handleUpdateBook = (e) => {
    e.preventDefault();

    setIsLoading(true);
    axiosInstanceLibraryService
      .put(`/books/update`, updatedBook)
      .then((resp) => {
        console.log('Book Updated:', resp);
        setIsUpdated(true);
        onUpdate(updatedBook);
        toast.success('Book Updated successfully!!!');
        Navigate("/books"); 
      })
      .catch((error) => {
        console.log('Error', error);
        // toast.error('Error to Updating book:', error);
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

 
  useEffect(() => {
    setUpdatedBook(book);
  }, [book]);

  return (
    <Form onSubmit={handleUpdateBook}>
      <Form.Group>
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          name="title"
          value={updatedBook.title}
          onChange={handleInputChange}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Author</Form.Label>
        <Form.Control
          type="text"
          name="author"
          value={updatedBook.author}
          onChange={handleInputChange}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>ISBN</Form.Label>
        <Form.Control
          type="text"
          name="isbn"
          value={updatedBook.isbn}
          onChange={handleInputChange}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Image</Form.Label>
        <Form.Control
          type="text"
          name="image"
          value={updatedBook.image}
          onChange={handleInputChange}
        />
      </Form.Group>

      <Button type="submit" disabled={isLoading}>
        {isLoading ? 'Updating...' : 'Update Book'}
      </Button>

      {isUpdated && <div style={{ color: 'green', marginTop: '20px' }}>Book Updated Successfully</div>}
      <ToastContainer />
    </Form>
  );
};

export default UpdatedBookForm;

