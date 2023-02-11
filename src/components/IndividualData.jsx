import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "./Header";
import useFetch from "./useFetch";

const IndividualData = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const data = useFetch("http://localhost:8000/data/" + [id]);

  const removeHandler = () => {
    fetch("http://localhost:8000/data/" + [id], {
      method: "DELETE",
    }).then(() => {
      navigate("/home");
    });
  };
  return (
    <div>
      <Header></Header>
      {data && (
        <div className="individualContainer">
          <div className="individualData">
            <div className="userData">
              <h2>{data.first_name}</h2>
              <h2>{data.last_name}</h2>
              <h2>{data.email}</h2>
              <h2>{data.gender}</h2>
              <h2>{data.ip_address}</h2>
            </div>
          </div>
          <button onClick={removeHandler} className="deleteUserButton">
            <img className="removeIcon" src="/deleteIcon.png" alt="" />
          </button>
          <h2 className="detailsHeader">
            Details for <span className="spanName"> {data.first_name}</span>{" "}
          </h2>
        </div>
      )}
    </div>
  );
};

export default IndividualData;
