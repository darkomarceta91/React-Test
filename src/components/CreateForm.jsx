import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
const CreateForm = () => {
  const [data, setData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    gender: "",
    ip_address: "",
  });
  const navigate = useNavigate();
  const inputListener = (e) => {
    const { name, value } = e.target;
    setData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setData({
      first_name: "",
      last_name: "",
      email: "",
      gender: "",
      ip_address: "",
    });

    fetch("http://localhost:8000/data", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then(() => {
      navigate("/home");
    });
  };
  return (
    <div>
      <Header></Header>
      <form id="myForm">
        <div className="firstNameContainer">
          <input
            onChange={inputListener}
            className="inputField"
            type="text"
            id="first_name"
            name="first_name"
            placeholder="First Name"
            value={data.first_name}
            required
          ></input>
        </div>
        <div className="lastNameContainer">
          <input
            onChange={inputListener}
            className="inputField"
            type="text"
            id="last_name"
            name="last_name"
            placeholder="Last Name"
            value={data.last_name}
            required
          ></input>
        </div>
        <div className="emailContainer">
          <input
            onChange={inputListener}
            className="inputField"
            type="email"
            id="email"
            name="email"
            value={data.email}
            placeholder="Email"
            required
          ></input>
        </div>

        <div className="genderContainer">
          <div className="male">
            <input
              onChange={inputListener}
              type="radio"
              id="male"
              name="gender"
              value="male"
            ></input>
            <p>Male</p>
          </div>
          <div className="female">
            <input
              onChange={inputListener}
              type="radio"
              id="female"
              name="gender"
              value="female"
            ></input>
            <p>Female</p>
          </div>
        </div>

        <textarea
          onChange={inputListener}
          id="ip_address"
          name="ip_address"
          placeholder="ip_address"
          value={data.ip_address}
          rows="4"
          cols="20"
        ></textarea>
        <input
          className="submitButton"
          type="submit"
          value="Submit"
          onClick={submitHandler}
          required
        ></input>
      </form>
    </div>
  );
};

export default CreateForm;
