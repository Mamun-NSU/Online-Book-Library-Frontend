// import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const Authenticate = () => {
  const token = localStorage.getItem("token");
  console.log("token is ", token);

  return <div>{token ? <Outlet /> : <Navigate to="/login" />}</div>;
};

export default Authenticate;


// import { Navigate, Outlet } from "react-router-dom";

// const Authenticate = ({ expectedRole }) => {
//   const token = localStorage.getItem("token");
//   const role = localStorage.getItem("role");
//   console.log("token is ", token);
//   console.log("Role from auth is ", role);


//   if (token && role === expectedRole) {
//     return <Outlet />;
//   } else {
//     <Navigate to="/login" />;
//   }
// };
// export default Authenticate;