import React from "react";
import Input from "../Input/Input";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="Navbar">
      <nav>
        <a href="/chaking">HOME</a>
        <a href="/chaking">OFFER</a>
        <a href="/chaking">ABOUT</a>
        <a href="/chaking">OFFICE</a>
      </nav>
      <Input />
    </div>
  );
};

export default Navbar;
