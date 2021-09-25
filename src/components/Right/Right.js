import React from "react";
import "./Right.css";

const Right = (props) => {
  const { buttondata } = props;

  return (
    <div className="rightcart">
      {buttondata.map((meal) => (
        <li>{meal.strMeal}</li>
      ))}
    </div>
  );
};

export default Right;
