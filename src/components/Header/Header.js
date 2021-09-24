import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <Navbar />
      <h1>THE MEAL DB</h1>
    </div>
  );
};

export default Header;
