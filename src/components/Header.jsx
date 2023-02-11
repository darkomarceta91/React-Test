import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="navBar">
        <h1>PlanetSoft Practice by Darkom</h1>
      </Link>
      <div className="linkButtonns">
        <Link to="/home" className="homeButton">
          Home
        </Link>
        <Link to="/createuser" className="createEntryButton">
          New Entry
        </Link>
      </div>
    </div>
  );
};

export default Header;
