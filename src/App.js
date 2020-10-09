import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import LoginForm from "./components/loginForm";
import SignupForm from "./components/signupForm";
import Home from "./components/home";
import About from "./components/about";
import Profile from "./components/Profile";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Route path="/" exact component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/profile" component={Profile} />
        <Route path="/about" component={About} />
        <Route path="/login" component={LoginForm} />
        <Route path="/create" component={SignupForm} />
      </div>
    </Router>
  );
}

export default App;
