
import { useEffect, useState } from "react";
import  axiosInstanceLibraryService from "../utils/axiosInstance";

const useBookHook = () => {
  const [books, setBooks] = useState([]);
  const [errors, setErrors] = useState();

  useEffect(() => {
    axiosInstanceLibraryService
      .get("/books/all")
      .then((resp) => {
        const data = resp.data;

        console.log("My Data ", data);
        setBooks(data);
      })
      .catch((error) => {
        console.log(error);
        setErrors(errors);
      });
  }, []);

  const handleSubmit = () => {
    console.log("Submitting from custom hook");
  };

  return { books, handleSubmit, errors };
};

export default useBookHook;

