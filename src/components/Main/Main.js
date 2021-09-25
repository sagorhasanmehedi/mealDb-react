import React, { useEffect, useState } from "react";
import Left from "../Left/Left";
import Right from "../Right/Right";
import "./Main.css";
import Input from "../Input/Input";
import { chaking } from "../../utilitieys/Utilitieus";

const Main = () => {
  const [meal, sertmeal] = useState([]);
  const [Bdata, setBdata] = useState([]);
  const [Inputdata, setinputdata] = useState([]);

  const localstor = (info) => {
    chaking(info);
  };
  const inputfild = (event) => {
    const storage = event.target.value;
    const chaking = meal.filter((x) => x.strMeal.includes(storage));
    setinputdata(chaking);
  };

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=a`)
      .then((res) => res.json())
      .then((data) => {
        sertmeal(data.meals);
        setinputdata(data.meals);
      });
  }, []);

  const ButtonClick = (meal) => {
    const newele = [...Bdata, meal];
    setBdata(newele);
  };

  return (
    <>
      <Input inputfild={inputfild} />
      <div className="mainsection">
        <div className="Lefrcard row row-cols-1 row-cols-md-3 gx-5 ">
          {Inputdata.map((m) => (
            <Left
              meal={m}
              key={m.idMeal}
              ButtonClick={ButtonClick}
              localstor={localstor}
            />
          ))}
        </div>
        <div>{<Right buttondata={Bdata} />}</div>
      </div>
    </>
  );
};

export default Main;
