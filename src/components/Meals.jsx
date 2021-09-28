import axios from "axios";
import { parse } from "query-string";
import React, { useEffect, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";

export const Meals = () => {
  const [meals, setMeals] = useState([{}]);
  const history = useHistory();
  const location = useLocation();
  useEffect(() => {
    const { q = "" } = parse(location.search);
    if (q === "") {
      return ([{}]);
    }
    getMeals(q);
  }, [location.search]);

  const getMeals = async (q) => {
    try {
      const { data } = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${q}`
      );
      setMeals(data.meals);
    } catch (error) {
      console.log("Error in getMovies.", error.message);
    }
  };

  const searchMeal = (e) => {
    history.push("?q=" + e.target.value);
    getMeals(e.target.value);
  };

  return (
    <div className="container-fluid">
      <div className="container d-flex flex-nowrap flex-column bg-light">
        <div id="searchbar" className="input-group col-4 mt-3 mx-auto form-group">
          <input
            type="text"
            placeholder="Type for a meal"
            className="form-control border-warning"
            onChange={(e) => searchMeal(e)}
          />
          <button className="btn btn-warning" onChange={(e) => searchMeal(e)}><span className="bi bi-search"></span></button>
        </div>
        <hr className="bg-dark" />
        <div className="row">
          <h3 className="fw-bold">Your results: </h3>
          {meals !== null && meals.map((meal) => (
            <Link
              to={`/meal/${meal.idMeal}`}
              className="col-md-4 my-3 text-decoration-none"
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
                  <div className="text-center"><button className=" btn btn-warning rounded-pill" >Detail <span className="bi bi-eye-fill align-middle"></span></button></div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
