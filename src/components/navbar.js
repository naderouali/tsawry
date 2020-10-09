import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <ul className="navbar">
      <Link className="siteName" to="/">
        <b>Tsawry</b>
      </Link>
      <Link to="/home">Home</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/about">About</Link>
      <Link to="/login">Login</Link>
      <Link to="/create">Sign Up</Link>
    </ul>
  );
}

export default Navbar;
