import { useState } from 'react';
import useBookHook from '../../hooks/useBookHook';
import { Container, Row, Col, Modal } from 'react-bootstrap';
import UpdatedBookForm from './UpdatedBookForm';
import BookCartDeleted from './BookCartDeleted';
import "../../css/globalStyles.css"

const BookCartsListDeleted = () => {
  const { books } = useBookHook();
  const [selectedBook, setSelectedBook] = useState(null);

  // Filter books to show only those with status "Deleted"
  const deletedBooks = books.filter((book) => book.status === "Deleted");

  return (
    <Container>
      <h1>Deleted Books</h1>
      <Row>
        {deletedBooks.map((book, i) => {
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
              <BookCartDeleted book={book} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default BookCartsListDeleted;
