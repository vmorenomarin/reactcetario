import React from "react";
import { useHistory } from "react-router";
import { useState } from "react/cjs/react.development";

import Swal from "sweetalert2";

export const Login = () => {
  const history = useHistory(); // Uso el hook de react-router-dom
  const [username, setUsername] = useState("admin@admin.com");
  const [psw, setPsw] = useState("");

  const loginUser = (e) => {
    e.preventDefault(); // Evira que al oprimir el botón de logue se me cargue la página.
    if (username === "admin@admin.com" && psw === "123") {
      history.push("/meals");
    } else {
      Swal.fire({
        title: "Incorrect data",
        text: "Typed username or password are wrong. Please, try again.",
        icon: 'warning',
        iconColor: '#ffc107',
        confirmButtonColor: "#ffc107",
        background: "#212529",
        
      });
    }
  };

  return (
    <div
      id="login-page"
      className="container-fluid d-flex flex-column justify-content-center align-items-center"
    >
      <div className="card col-6 col-xl-4 p-3 bg-dark text-white">
        <h1 className="display-5">
          <strong>Please, login.</strong>
        </h1>
        <form onSubmit={loginUser}>
          <label>Type your e-mail</label>
          <input
            type="email"
            className="form-control mb-3 border-warning"
            autoFocus
            value={username}
            placeholder="E-mail"
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Type your password</label>
          <input
            type="password"
            className="form-control mb-3 border-warning "
            autoFocus
            placeholder="Password"
            onChange={(e) => setPsw(e.target.value)}
          />
          <button
            type="submit"
            id="login-btn"
            className="btn btn-outline-warning form-control"
          >
            <strong>Log-in</strong>
          </button>
        </form>
      </div>
    </div>
  );
};
