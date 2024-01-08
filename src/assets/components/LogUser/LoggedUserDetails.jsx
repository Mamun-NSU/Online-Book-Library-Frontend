import { useEffect, useState } from 'react';
import axios from 'axios';
import LoggedUserInfo from './LoggedUserInfo';

const LoggedUserDetails = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const userId = localStorage.getItem("userId");

    if (!userId) {
      // Handle the case where the user ID is not available in localStorage
      return (
        <div>
          <h2>User Information</h2>
          <p>User ID not found. Please log in.</p>
        </div>
      );
    }

    // Fetch user information from the API using the user ID
    axios.get(`http://localhost:8080/all`)
      .then((response) => {
        const data = response.data;
        // Find the user with the matching ID in the API response
        const user = data.find(user => user.userId === Number(userId));

        if (user) {
          console.log("Data in LoggedUserDetails: ", user);
          setUserData(user);
        } else {
          console.error('User not found.');
        }
      })
      .catch((error) => {
        console.error('Error fetching user data: ', error);
      });
  }, []);

  if (!userData) {
    return <div>Loading user information...</div>;
  }

  return (
    <LoggedUserInfo userData={userData} />
  );
};

export default LoggedUserDetails;

