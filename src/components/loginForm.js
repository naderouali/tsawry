import React, { useState } from "react";
import axios from "axios";

export default function LoginForm() {
    
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  

const onSubmit = () => {
  const user = {
    email: email,
    password: password,
  };
  axios
  .post("http://localhost:5000/users/login", user)
  .then((res) => console.log(res.data))
  //window.location = "/";
}

const style = {
  container: {

  }
}

    return (
      <div  style={{paddingLeft: "12%", paddingRight: "12%" ,paddingTop:20, backgroundColor: "red", width: "100%", minHeight: "100vh"}}>
        <div >
          <h2>Login</h2>
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="text"
            value={email}
            onChange={(e) => { setEmail(e.target.value); }}
          />
          <br />
          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="password"
            value={password}
            onChange={(e) => { setPassword(e.target.value); }}
          />
          <br />
          <button onClick={onSubmit} className="btn btn-primary">
            Log in
          </button>
        </div>
      </div>
    );
}