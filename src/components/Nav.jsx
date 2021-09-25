import React from "react";
import { NavLink } from "react-router-dom";

export const Nav = () => {
  return (
    // <div>

    <header className="text-white px-3  border-bottom border-warning border-2">
      <nav className="container navbar px-3">
        <div className="d-flex justify-content-between align-items-center col-12">
          <NavLink className="navbar-brand text-white" to="/">
            <img src="img/cook.png" alt="" /> React-cetario
          </NavLink>

          <button className="  text-decoration-none btn btn-outline-warning btn-sm  ">
            Log-out
          </button>
        </div>
      </nav>
      <section className="d-flex justify-content-center align-items-center">
        <div className="mx-5">
          <h2 className="display-5">
            Find appetite, <br />
            <span className="text-warning">Feed your taste</span>
          </h2>
        </div>
        <div className="mx-5">
          <h1 className="text-danger display-2 fw-bold">
            MY <i className="bi bi-egg-fried text-warning"></i>
            <br /> <span style={{ color: "orange" }}>MEALS</span>
          </h1>
        </div>
      </section>
    </header>
    // </div>
  );
};
