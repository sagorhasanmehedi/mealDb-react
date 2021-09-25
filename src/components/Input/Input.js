import React from "react";
import "./Input.css";

const Input = (props) => {
  return (
    <div className="inputfild">
      <input
        onChange={props.inputfild}
        type="text"
        placeholder="serch meal by name"
      />
    </div>
  );
};

export default Input;
