import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <ul className="navbar font">
      <NavLink className="siteName" to="/">
        <b>Tsawry</b>
      </NavLink>
      <NavLink
        to="/home"
        style={{ color: "black" }}
        activeStyle={{ color: "red" }}
      >
        Home
      </NavLink>
      <NavLink
        style={{ color: "black" }}
        activeStyle={{ color: "red" }}
        to="/profile/missions"
      >
        Profile
      </NavLink>
      <NavLink
        style={{ color: "black" }}
        activeStyle={{ color: "red" }}
        to="/about"
      >
        About
      </NavLink>
      <NavLink
        style={{ color: "black" }}
        activeStyle={{ color: "red" }}
        to="/login"
      >
        Login
      </NavLink>
      <NavLink
        style={{ color: "black" }}
        activeStyle={{ color: "red" }}
        to="/create"
      >
        Sign Up
      </NavLink>
    </ul>
  );
}

export default Navbar;
