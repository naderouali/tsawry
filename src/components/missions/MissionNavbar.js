import React from "react";

const style = {
  buttons: {
    backgroundColor: "#2b6dd4",
    color: "white",
    borderWidth: 0,
    padding: 20,
    fontSize: 20,
  },
};

function MissionNavbar({ toggle, setToggle }) {
  return (
    <div
      className="MissionsNavbarGrid grid-container"
      style={style.MissionNavbar}
    >
      <button
        className="item1"
        style={style.buttons}
        onClick={() => {
          setToggle(0);
        }}
      >
        My missions
      </button>
      <button
        className="item2"
        style={style.buttons}
        onClick={() => {
          setToggle(1);
        }}
      >
        Create mission
      </button>
      <button
        className="item3"
        style={style.buttons}
        onClick={() => {
          setToggle(3);
        }}
      >
        Do nothing
      </button>
    </div>
  );
}
export default MissionNavbar;
