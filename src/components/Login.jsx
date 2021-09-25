import React from "react";
import { useHistory } from "react-router";
import { useState } from "react/cjs/react.development";
import Swal from "sweetalert2";
import { useUser } from "../context/UserContext";

export const Login = () => {
  const history = useHistory(); // Uso el hook de react-router-dom para el manejo de las URL.
  const [username, setUsername] = useState("admin@admin.com");
  const [psw, setPsw] = useState("");
  const { setLogin } = useUser();

  const loginUser = (e) => {
    // Esta función me permite manjar lo que sucede cuando el usuario realiza un logeo con los datos correctos o si se equivoca al ingrersar las credenciales.

    e.preventDefault(); // Evita que al oprimir el botón de logue se me cargue la página.
    if (username === "admin@admin.com" && psw === "123") {
      localStorage.setItem("login", true)
      setLogin(true);
      history.push("/meals");
    } else {
      setLogin(false);
      localStorage.setItem("login", false)
      Swal.fire({
        title: "<span class='text-warning'>Incorrect data</span>",
        html: "<span class='text-white'>Typed username or password are wrong. Please, try again.</span>",
        icon: "warning",
        iconColor: "#ffc107",
        confirmButtonColor: "#ffc107",
        background: "#212529",
        allowEscapeKey: true,
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
