import React from "react";
import { Link } from "react-router-dom";

export default function Mission({ mission, deleteMission }) {
  return (
    <tr>
      <td>{mission.email}</td>
      <td>{mission.title}</td>
      <td>{mission.description}</td>
      <td>{mission.date.substring(0, 10)}</td>
      <td>{mission.city}</td>
      <td>
        <Link to={"/profile/missions/update/" + mission._id}>Edit</Link>
        <Link to="/profile/missions/update">
          <button>Edit</button>
        </Link>
        <button
          onClick={() => {
            deleteMission(mission._id);
          }}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}
