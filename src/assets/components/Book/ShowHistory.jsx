import  { useState, useEffect } from "react";
import axiosInstanceLibraryService from "../../utils/axiosInstance"; // Import your axios instance
import { ToastContainer, toast } from 'react-toastify';
import "../../css/globalStyles.css"

const ShowHistory = () => {
  const [history, setHistory] = useState([]);
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    axiosInstanceLibraryService
      .get(`/users/${userId}/history`)
      .then((response) => {
        setHistory(response.data);
      })
      .catch((error) => {
        console.error("Error fetching history:", error);
        toast.error("Error fetching history:", error);
      });
  }, [userId]);

  return (
    <div className="myContainer">
      <h1>Borrowing History</h1>
      {history.map((item) => (
        <div key={item.borrowedId}>
          <h3>{item.book.title}</h3>
          <p>Borrowed Date: {item.borrowedDate}</p>
          <p>Due Date: {item.dueDate}</p>
          {item.status === "Returned" ? (
            <p>Return Date: {item.returnDate}</p>
          ) : (
            <p>Status: {item.status}</p>
          )}
        </div>
      ))}
      <ToastContainer />
    </div>
  );
};

export default ShowHistory;
