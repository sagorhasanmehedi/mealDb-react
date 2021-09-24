import React, { useEffect, useState } from "react";
import Left from "../Left/Left";
import Right from "../Right/Right";
import "./Main.css";

const Main = () => {
  const [meal, sertmeal] = useState([]);
  const [Bdata, setBdata] = useState([]);
  console.log(Bdata);
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
      .then((res) => res.json())
      .then((data) => sertmeal(data.meals));
  }, []);

  const ButtonClick = (meal) => {
    const newele = [...Bdata, meal];
    setBdata(newele);
  };

  return (
    <div className="mainsection">
      <div className="Lefrcard">
        {meal.map((m) => (
          <Left meal={m} key={m.idMeal} ButtonClick={ButtonClick} />
        ))}
      </div>
      {<Right buttondata={Bdata} />}
    </div>
  );
};

export default Main;
