import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/" className="navbar-brand" href="#">
          Rasil Store
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link to="/" className="nav-item nav-link active">
              Home <span className="sr-only">(current)</span>
            </Link>
            <Link to="/register" className="nav-item nav-link" href="#">
              Register
            </Link>
            <Link to="/login" className="nav-item nav-link" href="#">
              Login
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}
