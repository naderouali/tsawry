import React, { useState } from "react";
import axios from "axios";
//import { useHistory } from "react-router-dom";

export default function MissionCreate({ setToggle }) {
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [city, setCity] = useState("");
  const [date, setDate] = useState(new Date());

  const [titleError, setTitleError] = useState("");

  //var history = useHistory();

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangeTitle = (e) => {
    if (e.target.value.length >= 5) {
      setTitleError("more than 5");
    } else if (e.target.value.includes("!")) {
      setTitleError("dont write ! in title");
    } else {
      setTitleError("");
    }
    setTitle(e.target.value);
  };

  const onSubmit = () => {
    const missions = {
      email: email,
      title: title,
      description: description,
      date: date,
      city: city,
    };
    console.log(missions);
    axios
      .post("http://localhost:5000/api/profile/missionCreate", missions)
      .then((res) => console.log(res.data));

    //history.push("/profile/missions");
    setToggle(0);
  };

  return (
    <div style={{ marginTop: 80 }}>
      <h4>Create a new mission</h4>

      <label htmlFor="email">Email</label>
      <input
        placeholder="Email"
        name="email"
        type="text"
        value={email}
        onChange={onChangeEmail}
      />
      <br />

      <label htmlFor="title">title</label>
      <input name="title" type="text" value={title} onChange={onChangeTitle} />
      {titleError !== "" && <p style={{ color: "red" }}>{titleError}</p>}
      <br />

      <label htmlFor="description">description</label>
      <input
        name="description"
        type="text"
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <br />

      <label htmlFor="date">date</label>
      <input
        name="date"
        type="date"
        value={date}
        onChange={(e) => {
          setDate(e.target.value);
        }}
      />
      <br />

      <label htmlFor="city">city</label>
      <input
        name="city"
        type="text"
        value={city}
        onChange={(e) => {
          setCity(e.target.value);
        }}
      />
      <br />

      <button onClick={onSubmit} className="btn btn-primary">
        Add mission
      </button>
    </div>
  );
}
