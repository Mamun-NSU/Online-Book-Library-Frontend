// LoggedUserInfo.js
// import React from 'react';
import "../../css/globalStyles.css"

const LoggedUserInfo = ({ userData }) => {
  return (
    <div className="myContainer">
      <h2>User Information</h2>
      <p><strong>User ID:</strong> {userData.userId}</p>
      <p><strong>First Name:</strong> {userData.firstName}</p>
      <p><strong>Last Name:</strong> {userData.lastName}</p>
      <p><strong>Email:</strong> {userData.email}</p>
      <p><strong>Address:</strong> {userData.address}</p>
      <p><strong>Role:</strong> {userData.role}</p>
    </div>
  );
};

export default LoggedUserInfo;
