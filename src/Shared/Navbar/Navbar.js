import React, { useContext } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./Navbar.css";
const Navbar = () => {
  const { user, logOut, admin } = useAuth();
  {
    console.log("registration user is ", user);
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light " style={{
        backgroundColor:'#1C1C1C'
      }}>
        <div className="container">
          <a className="navbar-brand" href="#">
            <span
              style={{
                color: "#EE5624",
              }}
            >
              {" "}
              bD{" "}
            </span>
            -car
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <Link to="/home">
                <li className="nav-item">
                  <a className="nav-link">Home</a>
                </li>
              </Link>
              <Link to="/about">
                <li className="nav-item">
                  <a className="nav-link">About</a>
                </li>
              </Link>
              <Link to="/products">
                <li className="nav-item">
                  <a className="nav-link">Products</a>
                </li>
              </Link>

              <Link to="/contact">
                <li className="nav-item">
                  <a className="nav-link">Contact</a>
                </li>
              </Link>

              <Link to="/allnews">
                <li className="nav-item">
                  <a className="nav-link">News</a>
                </li>
              </Link>

              {/* {admin && (
                <Link to="/dashbord">
                  <li className="nav-item">
                    <a className="nav-link">DashBord</a>
                  </li>
                </Link>
              )} */}

              {user?.email && (
                <Link to="/dashbord">
                  <li className="nav-item">
                    <a className="nav-link">DashBord</a>
                  </li>
                </Link>
              )}

              {user?.email ? (
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={logOut}
                >
                  {" "}
                  Logout{" "}
                </button>
              ) : (
                <Link to="/login">
                  <button type="button"
                  className="btn btn-danger"> Login </button>
                </Link>
              )}
            </ul>
           
           
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
