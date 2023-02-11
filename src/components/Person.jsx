import React from "react";
import { Link } from "react-router-dom";
const Person = (props) => {
  return (
    <div className="personContainer">
      {props.data.map((el) => {
        return (
          <Link to={`/data/${el.id}`} key={el.id}>
            <div className="input">
              <h5>#{el.id}</h5>
              <h5>{el.first_name}</h5>
              <h5>{el.last_name}</h5>
              <h5>{el.email}</h5>
              <h5>{el.gender}</h5>
              <h5>{el.ip_address}</h5>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Person;
