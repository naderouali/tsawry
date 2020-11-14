import React from "react";
import { NavLink } from "react-router-dom";

const style = {
  siteName: {
    marginRight: "40%",
    fontSize: "xx-large",
    textDecoration: "none",
    letterSpacing: 7,
    color: "red"
  },
  navbar: {
    backgroundColor: "#1d3752",
    textAlign: "center",
    fontSize: "20px",
    padding: 20,
    margin: 0,
    position: "fixed",
    top: 0,
    width: "100%",
    zIndex: 1000,
  }
}

function Navbar() {
  return (
    <ul className="font" style={style.navbar}>
      <NavLink style={style.siteName} to="/home"><b>PICSPICS</b></NavLink>
      <NavLink style={{ color: "white", textDecoration: "none", paddingLeft: 10 }} activeStyle={{ color: "red" }} to="/home" >Home</NavLink>
      <NavLink style={{ color: "white", textDecoration: "none", paddingLeft: 10 }} activeStyle={{ color: "red" }} to="/profile/missions" >Profile</NavLink>
      <NavLink style={{ color: "white", textDecoration: "none", paddingLeft: 10 }} activeStyle={{ color: "red" }} to="/about" >About</NavLink>
      <NavLink style={{ color: "white", textDecoration: "none", paddingLeft: 10 }} activeStyle={{ color: "red" }} to="/login">Login</NavLink>
      <NavLink style={{ color: "white", textDecoration: "none", paddingLeft: 10 }} activeStyle={{ color: "red" }} to="/create" >Sign Up</NavLink>
    </ul>
  );
}

export default Navbar;
