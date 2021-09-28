import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";

export const Meal = () => {
  const { id } = useParams();
  const [meal, setMeal] = useState([{}]);

  useEffect(() => {
    const search = async () => {
      try {
        const { data } = await axios.get(
          `www.themealdb.com/api/json/v1/1/lookup.php?i=52927`
        );
        setMeal(data.meals);
      } catch (error) {
        console.log("Error en search", error.message);
      }
    };
    search();
  }, [id]);

  return (
    <div>
      <img src={meal.strMealThumb} alt="img" className="card-img-top" />
    </div>
  );
};
