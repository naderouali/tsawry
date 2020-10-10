import React from "react";
import { Link } from "react-router-dom";

function MissionNavbar() {
  return (
    <div className="MissionNavbar">
      <Link to="/profile/missions">
        <button className="btn btn-primary btn-lg active" aria-pressed="true">
          My missions
        </button>
      </Link>
      <Link to="/profile/missionCreate">
        <button className="btn btn-primary btn-lg active" aria-pressed="true">
          Create mission
        </button>
      </Link>
    </div>
  );
}
export default MissionNavbar;
