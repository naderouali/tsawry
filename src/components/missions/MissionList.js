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
    axios
      .get("http://localhost:5000/api/profile/missions/")
      .then((response) => {
        setMissions(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
        <tbody>
          {/*missionsList()*/}
          {missions.map((currentmission) => (
            <Mission
              mission={currentmission}
              deleteMission={deleteMission}
              key={currentmission._id}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
