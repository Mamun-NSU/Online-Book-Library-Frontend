import  { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axiosInstanceLibraryService from '../../utils/axiosInstance';
import BookReviews from '../Review/BookReviews';
import BookDetails from "./BookDetails";



const BookDetailsComponent = () => {
  const { bookId } = useParams();

  const [bookDetails, setBookDetails] = useState();
  const [errors, setErrors] = useState();

  useEffect(() => {
    axiosInstanceLibraryService
      .get(`/books/${bookId}`)
      .then((resp) => {
        const data = resp.data;
        console.log('Book Detail data: ', data);
        setBookDetails(data);
      })
      .catch((errors) => {
        setErrors(errors);
      });
  }, [bookId]);

  return (
    <div className='myContainer'>
      <h1>Book details of ID: {bookId}</h1>
      <BookDetails bookDetails={bookDetails} />
      <BookReviews bookId={bookId} />
    </div>
  );
};

export default BookDetailsComponent;
