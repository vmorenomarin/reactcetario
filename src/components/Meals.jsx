import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Meals = () => {
  const [meals, setMeals] = useState([{ idMeal: "", strMealThumb: "" }]);

  useEffect(() => {
    getMeals();
  }, []);

  const getMeals = async () => {
    const { data } = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/search.php?s=meat"
    );
    setMeals(data.meals);
  };

  const searchMeal = (e) => {};

  return (
    <div className="container-fluid">
      

      <div className="container d-flex flex-column bg-light">
        <div id="searchbar" className="col-6 mt-3 mx-auto">
          <input
            type="text"
            placeholder="Type for a meal"
            className="form-control border-warning"

            // onChange = {(e) => search(e)}
          />
        </div>
        <hr className="bg-dark" />
        <div className="row">
          {meals.map(meal => (
            <Link
              to="/"
              className="col-md-3 my-3 text-decoration-none"
              key={meal.idMeal}
            >
              <div id="card-meal" className="card shadow p-2">
                <div>
                  <img
                    src={meal.strMealThumb}
                    alt="meal.strMeal"
                    className="card-img-top"
                  />
                </div>
                <div className="card-body">
                  <div className="card-text">
                    <div className="card-title text-dark fw-bold text-truncate">
                      {meal.strMeal}
                    </div>
                    <div className="card-subtitle text-muted">
                      {meal.strArea}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
