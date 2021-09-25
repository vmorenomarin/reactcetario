import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import { useUser } from "../context/UserContext";

export const Nav = () => {
  const history = useHistory();
  const { login, setLogin } = useUser();

  const logout = () => {
    setLogin(false);
    sessionStorage.setItem("login", false)
    history.push("/");
  };
  return (
    <header className="text-white px-3  border-bottom border-warning border-2">
      <nav className="container navbar px-3">
        {login ? (
          <div className="d-flex justify-content-between align-items-center col-12">
            <NavLink className="navbar-brand text-white" to="/">
              <img
                src="img/chef.svg"
                className="align-baseline"
                style={{ width: "16px" }}
                alt=""
              />{" "}
              React-cetario
            </NavLink>
            <button
              className="text-decoration-none btn btn-outline-warning btn-sm"
              onClick={logout}
            >
              Log-out
            </button>
          </div>
        ) : (
          <div className="d-flex justify-content-between align-items-center col-12">
            <NavLink className="navbar-brand text-white" to="/">
              <img
                src="img/chef.svg"
                className="align-baseline"
                style={{ width: "16px" }}
                alt=""
              />{" "}
              React-cetario
            </NavLink>
          </div>
        )}
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
  );
};
