import React, { createContext, useContext } from "react";
import { useEffect, useState } from "react/cjs/react.development";

const UserContext = createContext();

// Con este módulo se crea un estado global que permite la validación de logueo de un usuario y así poder determinar si se le muestra el resto de contenido de al aplicación.

export const UserProvider = (props) => {
  const [login, setLogin] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("login")==="true") {
      setLogin(true);
    } else {
      setLogin(false);
    }
  },[]);

  //   El siguiente objeto es el que será compartido a los demás componentes.
  const value = {
    login,
    setLogin,
  };
  return <UserContext.Provider value={value} {...props} />;
};

export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be in userProvider provider");
  }
  return context;
}
