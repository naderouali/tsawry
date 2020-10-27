import React, { useEffect, useState } from "react";
import axios from "axios";
import Mission from "./Mission";

export default function MissionList() {
  const [missions, setMissions] = useState([]);

  const deleteMission = (id) => {
    axios
      .delete("http://localhost:5000/api/profile/missions/" + id)
      .then((res) => console.log(res.data));

    setMissions(missions.filter((el) => el._id !== id));
  };

  // const missionsList = () => {
  //   return missions.map((currentmission) => {
  //     return (
  //       <Mission
  //         mission={currentmission}
  //         deleteMission={deleteMission}
  //         key={currentmission._id}
  //       />
  //     );
  //   });
  // };

  useEffect(() => {
    const getMissions = () => {
      axios
      .get("http://localhost:5000/api/profile/missions/")
      .then((response) => {
        setMissions(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    }

    getMissions();
  }, []);

  return (
    <>
      <h2 style={{ marginTop: 30, marginBottom: 15 }}>Mission list</h2>
      <div className="rad" style={{ overflow: "hidden" }}>
        <div className="missionTabHead" style={{ marginBottom: 5 }}>
          <div
            className="emailTab"
            style={{ backgroundColor: "#2b6dd4", padding: 10, gridColumn: "1/2" }}
          >
            Email
          </div>
          <div
            className="titleTab"
            style={{ backgroundColor: "#2b6dd4", padding: 10, gridColumn: "2/3"  }}
          >
            Title
          </div>
          <div
            className="descTab"
            style={{ backgroundColor: "#2b6dd4", padding: 10, gridColumn: "3/4"  }}
          >
            Description
          </div>
          <div
            className="dateTab"
            style={{ backgroundColor: "#2b6dd4", padding: 10, gridColumn: "4/5"  }}
          >
            Date
          </div>
          <div
            className="cityTab"
            style={{ backgroundColor: "#2b6dd4", padding: 10, gridColumn: "5/6"  }}
          >
            City
          </div>
          <div
            className="actionsTab"
            style={{ backgroundColor: "#2b6dd4", padding: 10, gridColumn: "6/8" }}
          >
            Actions
          </div>
        </div>
        <div>
          {missions.map((currentMission) => (
            <Mission
              mission={currentMission}
              deleteMission={deleteMission}
              key={currentMission._id}
            />
          ))}
        </div>
      </div>
    </>
  );
}
