import React, { Component } from "react";
import axios from "axios";

class signupForm extends Component {
  constructor(props) {
    super(props);

    this.onChangeFirstname = this.onChangeFirstname.bind(this);
    this.onChangeLastname = this.onChangeLastname.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeBirthday = this.onChangeBirthday.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      birthday: new Date(),
    };
  }

  onChangeFirstname(e) {
    this.setState({
      firstname: e.target.value,
    });
  }
  onChangeLastname(e) {
    this.setState({
      lastname: e.target.value,
    });
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
  onChangeBirthday(e) {
    this.setState({
      birthday: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const user = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
      password: this.state.password,
      birthday: this.state.birthday,
    };
    console.log(user);
    axios
      .post("http://localhost:5000/users/register", user)
      .then((res) => console.log(res.data));
    //window.location = "/";
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <h1>Sign Up</h1>
          <label htmlFor="firstname">First name</label>
          <input
            name="firstname"
            type="text"
            value={this.state.firstname}
            onChange={this.onChangeFirstname}
          />
          <br />
          <label htmlFor="lastname">Last name</label>
          <input
            name="lastname"
            type="text"
            value={this.state.lastname}
            onChange={this.onChangeLastname}
          />
          <br />
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
            type="text"
            value={this.state.password}
            onChange={this.onChangePassword}
          />
          <br />
          <label htmlFor="birthday">Birthday</label>
          <input
            name="birthday"
            type="date"
            value={this.state.birthday}
            onChange={this.onChangeBirthday}
          />
          <br />
          <input
            type="submit"
            value="Create account"
            className="btn btn-primary"
          />
        </form>
      </div>
    );
  }
}

export default signupForm;
