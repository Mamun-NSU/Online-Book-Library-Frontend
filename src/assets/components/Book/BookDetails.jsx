
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const BookDetails = ({ bookDetails }) => {
  return (
    <div>
      {bookDetails ? (
      <Card className="book-card">
          <Card.Img
            variant="top"
            src={bookDetails.image}
            alt={bookDetails.name}
            className="book-card-image"
          />
          <Card.Body>
            <Card.Title>{bookDetails.title}</Card.Title>
            <Card.Text>Book ID: {bookDetails.bookId}</Card.Text>
            <Card.Text>Author: {bookDetails.author}</Card.Text>
            <Card.Text>ISBN: {bookDetails.isbn}</Card.Text>
            <Card.Text>Status: {bookDetails.status}</Card.Text>
            <Link to="/books">
              <Button variant="primary">Back</Button>
            </Link>
          </Card.Body>
        </Card>
      ) : (
        <p>Book not found</p>
      )}
    </div>
  );
};

export default BookDetails;