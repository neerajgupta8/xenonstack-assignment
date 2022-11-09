import React from "react";
import { Link } from "react-router-dom";

function Header() {
  const { name } = localStorage;

  function handleLogout() {
    localStorage.clear();
    window.location.reload();
  }

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light"
      style={{ backgroundColor: "teal" }}
    >
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/contact-us"
                style={{ color: "white", fontSize: 20 }}
              >
                Contact Us
              </Link>
            </li>
          </ul>
          <div className="d-flex">
            {name && name !== "" ? (
              <>
                <h4 style={{ color: "white", fontSize: 18, margin: 10 }}>
                  Welcome {name}
                </h4>

                <Link
                  to="/"
                  className="nav-link active"
                  aria-current="page"
                  style={{ color: "white", fontSize: 18, margin: 7 }}
                  onClick={handleLogout}
                >
                  Logout
                </Link>
              </>
            ) : (
              <>
                <Link
                  to="/"
                  className="nav-link active"
                  aria-current="page"
                  style={{ color: "white", fontSize: 18, margin: 10 }}
                >
                  Register
                </Link>

                <Link
                  to="/login"
                  className="nav-link active"
                  aria-current="page"
                  style={{ color: "white", fontSize: 18, margin: 10 }}
                >
                  Login
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
