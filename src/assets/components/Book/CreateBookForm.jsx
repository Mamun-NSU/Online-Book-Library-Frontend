
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstanceLibraryService from "../../utils/axiosInstance";
import { Form, Button } from 'react-bootstrap';
import "../../css/globalStyles.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CreateBookForm = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [isbn, setIsbn] = useState("");
  const [image, setImage] = useState("");
  const [isBookCreated, setIsBookCreated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [ setError] = useState();

  const handleCreateBook = (e) => {
    e.preventDefault();

    const data = {
      title: title,
      author: author,
      isbn: isbn,
      image: image,
    };

    setIsLoading(true);
    axiosInstanceLibraryService
      .post("/books/create", data)
      .then((resp) => {
        console.log("The Response", resp);
        setIsBookCreated(true);
        toast.success('Book Created successfully!!!');
        navigate("/books"); 
      })
      .catch((error) => {
        console.log("Error", error);
        toast.error('Error to creating book:', error);
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="myContainer">
      <h1>Create a Book</h1>
      {isBookCreated && (
        <h2 style={{ color: "green" }}>Book Created Successfully</h2>
      )}
      {isLoading && <h1>Loading.....</h1>}
      <Form onSubmit={handleCreateBook}>
        <Form.Group>
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            value={title}
            placeholder="Enter Title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Author</Form.Label>
          <Form.Control
            type="text"
            value={author}
            placeholder="Enter Author"
            onChange={(e) => setAuthor(e.target.value)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>ISBN</Form.Label>
          <Form.Control
            type="text"
            value={isbn}
            placeholder="Enter ISBN"
            onChange={(e) => setIsbn(e.target.value)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Image</Form.Label>
          <Form.Control
            type="text"
            value={image}
            placeholder="Enter Image"
            onChange={(e) => setImage(e.target.value)}
          />
        </Form.Group>

        <Button type="submit"  style={{ marginTop: '20px' }}>Create Book</Button>
      </Form>
      <ToastContainer />
    </div>
  );
};

export default CreateBookForm;
