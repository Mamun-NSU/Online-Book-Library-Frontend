import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import isAdmin from "../Authenticate/isAdmin";
import isCustomer from "../Authenticate/isCustomer";
import "../../css/Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  // const role = localStorage.getItem("role");
  return (
    <div className="container">
      <div
        className="navbar btn-primary"
        style={{ display: "flex", justifyContent: "space-around" }}
      >
        <Link to="/">Home</Link>

        {token && (
          <>
            <Link to="/books">Books</Link>
            <Link to="/book/search">Search</Link>
          </>
        )}

        {isAdmin() && (
          <>
            <Link to="/book/create">Create</Link>
            <Link to="/book/deletedBook">Deleted</Link>
          </>
        )}

        {token && (
          <>
            <Link to="/userDetails">User</Link>
          </>
        )}

        {isAdmin() && (
          <>
            <Link to="/users">Users</Link>
          </>
        )}

        {!token && (
          <>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
          </>
        )}

        {isCustomer() && (
          <>
            <Link to="/history">History</Link>
          </>
        )}

        {token && (
          <>
            <button
              className="btn btn-custom-primary"
              onClick={() => {
                localStorage.removeItem("userId");
                localStorage.removeItem("role");
                localStorage.removeItem("token");

                navigate("/login");
              }}
            >
              Logout
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
