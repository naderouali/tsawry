import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Mission = (props) => (
  <tr>
    <td>{props.mission.email}</td>
    <td>{props.mission.title}</td>
    <td>{props.mission.description}</td>
    <td>{props.mission.date.substring(0, 10)}</td>
    <td>{props.mission.city}</td>
    <td>
      <Link to={"/profile/missions/" + props.mission._id}>Edit</Link>
      <button
        onClick={() => {
          props.deleteMission(props.mission._id);
        }}
      >
        Delete
      </button>
    </td>
  </tr>
);

class MissionList extends Component {
  constructor(props) {
    super(props);

    this.deleteMission = this.deleteMission.bind(this);
    this.state = { missions: [] };
  }
  componentDidMount() {
    axios
      .get("http://localhost:5000/api/profile/missions/")
      .then((response) => {
        this.setState({ missions: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  deleteMission(id) {
    axios
      .delete("http://localhost:5000/api/profile/missions/" + id)
      .then((res) => console.log(res.data));
    this.setState({
      missions: this.state.missions.filter((el) => el._id !== id),
    });
  }

  missionsList() {
    return this.state.missions.map((currentmission) => {
      return (
        <Mission
          mission={currentmission}
          deleteMission={this.deleteMission}
          key={currentmission._id}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <h2>Missions list:</h2>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Email</th>
              <th>Title</th>
              <th>Desc</th>
              <th>Date</th>
              <th>City</th>
              <th>actions</th>
            </tr>
          </thead>
          <tbody>{this.missionsList()}</tbody>
        </table>
      </div>
    );
  }
}

export default MissionList;
