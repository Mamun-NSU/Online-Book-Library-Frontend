
import { Card } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import "../../css/card.css"

const BookCartDeleted = ({ book }) => {
  return (
    <Card className="book-card">
      <Card.Img className="book-card-image" variant="top" src={book.image} alt={book.title} />
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
        <Card.Text>Book ID: {book.bookId}</Card.Text>
        <Card.Text>Author: {book.author}</Card.Text>
        <Card.Text>ISBN: {book.isbn}</Card.Text>
        <Card.Text className="text-danger">Status: {book.status}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default BookCartDeleted;
