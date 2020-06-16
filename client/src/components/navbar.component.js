import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">
          FitTracker
        </Link>
        <Link to="/create" className="nav-link">
          Log Exercise
        </Link>

        <Link to="/user" className="nav-link">
          Create User
        </Link>
      </nav>
    );
  }
}
