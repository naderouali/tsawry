import React from "react";
import { Link } from "react-router-dom";

export default function Mission({ mission, deleteMission }) {
  return (
    <>
      <div className="missionTabBody">
        <div style={{ backgroundColor: "#dddddd", padding: 10, gridColumn: "1/2"  }}>
          {mission.email.length > 8 ? mission.email.substring(0, 5) + "..." : mission.email}
        </div>
        <div style={{ backgroundColor: "#dddddd", padding: 10, gridColumn: "2/3"  }}>
          {mission.title.length > 8 ? mission.title.substring(0, 5) + "..." : mission.title }
        </div>
        <div style={{ backgroundColor: "#dddddd", padding: 10, gridColumn: "3/4"  }}>
          {mission.description.length > 8 ? mission.description.substring(0, 5) + "..." : mission.description }
        </div>
        <div style={{ backgroundColor: "#dddddd", padding: 10, gridColumn: "4/5"  }}>
          {mission.date.substring(0, 10)}
        </div>
        <div style={{ backgroundColor: "#dddddd", padding: 10, gridColumn: "5/6"  }}>
          {mission.city.length > 8 ? mission.city.substring(0, 5) + "..." : mission.city }
        </div>
        <div style={{ backgroundColor: "#dddddd", padding: 10, gridColumn: "6/8"  }}>
          <Link to={"/profile/missions/update/" + mission._id}>mofidfier</Link>
          <button
            onClick={() => {
              deleteMission(mission._id);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
}
