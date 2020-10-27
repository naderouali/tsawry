import React from "react";

const style = {
  buttons: {
    backgroundColor: "#2b6dd4",
    color: "white",
    borderWidth: 0,
    padding: 20,
    fontSize: 20,
    cursor: "pointer",
  },
};

function MissionNavbar({ toggle, setToggle }) {
  return (
    <div className="MissionsNavbarGrid" style={{marginTop: 50}} >
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
