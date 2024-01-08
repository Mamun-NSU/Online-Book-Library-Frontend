
import "../../css/globalStyles.css"
import { useEffect, useState } from 'react';
import axiosInstanceLibraryService from '../../utils/axiosInstance';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const BookSearch = () => {
  const [searchText, setSearchText] = useState('');
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchAllBooks = () => {
    setLoading(true);
    axiosInstanceLibraryService
      .get('/books/all')
      .then((resp) => {
        const data = resp.data;
        console.log("Search book data", data);
        setBooks(data);
        
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    if (searchText) {
      // Fetch books only if there is a search query
      fetchAllBooks();
    }
  }, [searchText]);

  // Filter books to show only those with status !== "Deleted"
  const availableBooks = books.filter((book) => book.status !== "Deleted");

  console.log("Available book:", availableBooks );

  const filteredBooks = availableBooks.filter((availableBooks) => {
    const titleMatch = availableBooks.title.toLowerCase().includes(searchText.toLowerCase());
    const idMatch = availableBooks.bookId.toString().includes(searchText);

    return titleMatch || idMatch;
  });

  console.log("filteredBooks book:", filteredBooks );

  return (
    <Container className="myContainer"> 
      <h1>Search Books</h1>
      <input
        value={searchText}
        placeholder="Enter search key"
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
      />

      {loading && <h1 style={{ color: 'purple' }}>Loading</h1>}

      {searchText && (
        <Container>
          <h1>The details:</h1>
          <Row>
            {filteredBooks.length > 0 ? (
              filteredBooks.map((book, i) => (
                <Col key={i} lg={4} md={6} sm={12}>
                  <Card >
                  {/* style={{ width: '300px' }} */}
                  <Card.Img  src={book.image} alt={book.name} />
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
                    </Card.Body>
                  </Card>
                </Col>
              ))
            ) : (
              <p>No book details found</p>
            )}
          </Row>
        </Container>
      )}
    </Container>
  );
};

export default BookSearch;

