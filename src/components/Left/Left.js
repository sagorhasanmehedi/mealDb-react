import React from "react";
import "./Left.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faShoppingBasket,
} from "@fortawesome/free-solid-svg-icons";

const Left = (props) => {
  const element = (
    <FontAwesomeIcon style={{ marginRight: "6px" }} icon={faShoppingCart} />
  );
  const { strMeal, strMealThumb, strInstructions } = props.meal;
  return (
    <div className="col mb-4">
      <div class="card shadow">
        <img src={strMealThumb} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{strMeal}</h5>
          <p class="card-text">{strInstructions.slice(0, 200)}</p>
          <button
            onClick={() => props.ButtonClick(props.meal)}
            className="Button"
          >
            {element}
            Detail
          </button>
          <br />
          <button
            onClick={() => props.localstor(props.meal)}
            className="Button"
          >
            {
              <FontAwesomeIcon
                style={{ marginRight: "6px" }}
                icon={faShoppingBasket}
              />
            }{" "}
            add to curt
          </button>
        </div>
      </div>
    </div>
  );
};

export default Left;
