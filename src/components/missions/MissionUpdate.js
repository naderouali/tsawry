import React, { Component } from "react";
import axios from "axios";

class MissionUpdate extends Component {
  constructor(props) {
    super(props);

    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onChangeCity = this.onChangeCity.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      email: "",
      title: "",
      description: "",
      date: new Date(),
      city: "",
    };
  }
  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }
  onChangeTitle(e) {
    this.setState({
      title: e.target.value,
    });
  }
  onChangeDescription(e) {
    this.setState({
      description: e.target.value,
    });
  }
  onChangeDate(e) {
    this.setState({
      date: e.target.value,
    });
  }
  onChangeCity(e) {
    this.setState({
      city: e.target.value,
    });
  }
  onSubmit(e) {
    e.preventDefault();
    const missions = {
      email: this.state.email,
      title: this.state.title,
      description: this.state.description,
      date: this.state.date,
      city: this.state.city,
    };
    console.log(missions);
    axios
      .put(
        `http://localhost:5000/api/profile/missions/update/${missions._id}`,
        missions
      )
      .then((res) => {
        this.setState({ missions: res.data });
        this.props.history.push("/missions");
      });
    //window.location = "/profile/missions";
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <h4>Update mission: {this.state.title}</h4>

          <label htmlFor="email">Email</label>
          <input
            placeholder="Email"
            name="email"
            type="text"
            value={this.state.email}
            onChange={this.onChangeEmail}
          />
          <br />
          <label htmlFor="title">title</label>
          <input
            name="title"
            type="text"
            value={this.state.title}
            onChange={this.onChangeTitle}
          />
          <br />
          <label htmlFor="description">description</label>
          <input
            name="description"
            type="text"
            value={this.state.description}
            onChange={this.onChangeDescription}
          />
          <br />
          <label htmlFor="date">date</label>
          <input
            name="date"
            type="date"
            value={this.state.date}
            onChange={this.onChangeDate}
          />
          <br />
          <label htmlFor="city">city</label>
          <input
            name="city"
            type="text"
            value={this.state.city}
            onChange={this.onChangeCity}
          />
          <br />
          <button type="submit" className="btn btn-primary">
            add mission
          </button>
        </form>
      </div>
    );
  }
}

export default MissionUpdate;
