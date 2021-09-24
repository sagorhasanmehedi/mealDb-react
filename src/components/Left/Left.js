import React from "react";
import "./Left.css";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Left = (props) => {
  const element = (
    <FontAwesomeIcon style={{ marginRight: "6px" }} icon={faShoppingCart} />
  );
  const { strMeal, strMealThumb, strInstructions } = props.meal;
  return (
    <div className="">
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col">
          <div class="card">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Left;
