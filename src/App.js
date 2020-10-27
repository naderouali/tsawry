import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar";
import LoginForm from "./components/loginForm";
import SignupForm from "./components/signupForm";
import Home from "./components/home";
import About from "./components/about";
import Profile from "./components/Profile";
import Footer from "./components/footer";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{position:"absolute",  height: 150, width: "100vw",top:0, backgroundImage: `linear-gradient(to top, rgba(255,0,0,0), rgba(0, 99, 228, 0.65))`, }}/>
      <div className="font" >
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/profile" component={Profile} />
          <Route path="/about" component={About} />
          <Route path="/login" component={LoginForm} />
          <Route path="/create" component={SignupForm} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
