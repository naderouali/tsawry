import React from "react";

const MissionCreate = () => {
  return (
    <div>
      <h4>Create a new mission</h4>

      <label htmlFor="email">Email</label>
      <input name="email" type="email" />
      <br />
      <label htmlFor="title">title</label>
      <input name="title" type="title" />
      <br />
      <label htmlFor="description">description</label>
      <input name="description" type="description" />
      <br />
      <label htmlFor="date">date</label>
      <input name="date" type="date" />
      <br />
      <label htmlFor="city">city</label>
      <input name="city" type="city" />
      <br />
      <button>Add mission</button>
    </div>
  );
};

export default MissionCreate;
