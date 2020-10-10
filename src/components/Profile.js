import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MissionNavbar from "./missions/MissionNavbar";
import MissionList from "./missions/MissionList";
import MissionCreate from "./missions/MissionCreate";

class Profile extends Component {
  render() {
    return (
      <Router>
        <h2>My name is.. </h2>
        <MissionNavbar />
        <Route path="/profile/missions" component={MissionList} />
        <Route path="/profile/missionCreate" component={MissionCreate} />
      </Router>
    );
  }
}
export default Profile;
