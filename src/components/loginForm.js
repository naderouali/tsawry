import React, { Component } from "react";
import axios from "axios";

class loginForm extends Component {
  constructor(props) {
    super(props);

    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      email: "",
      password: "",
    };
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }
  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const user = {
      email: this.state.email,
      password: this.state.password,
    };
    console.log(user);
    axios
      .post("http://localhost:5000/users/login", user)
      .then((res) => console.log(res.data));
    //window.location = "/";
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <h1>Login</h1>
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="text"
            value={this.state.email}
            onChange={this.onChangeEmail}
          />
          <br />
          <label htmlFor="password">password</label>
          <input
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.onChangePassword}
          />
          <br />
          <button type="submit" className="btn btn-primary">
            create
          </button>
        </form>
      </div>
    );
  }
}
export default loginForm;
