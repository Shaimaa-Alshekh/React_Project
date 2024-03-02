import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import logo from "./logo.png";
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary ">
      <div className="container">
        <NavLink className="navbar-brand" to="#">
          <img
            src={logo}
            alt="Bootstrap"
            width={250}
            className="d-inline-block align-text-top "
          />
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse "
          id="navbarSupportedContent"
        ></div>
        <div
          className="collapse navbar-collapse navbar-nav me-auto mb-2 mb-lg-0"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/home">
                HOME
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/categories">
                Categories
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/product">
                Product
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/cart">
                Cart
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/signin">
                sign in
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/signup">
                sign up
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
