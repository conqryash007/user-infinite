import React, { useState } from "react";
import { AuthContext } from "./shared/context/auth-context";
import { Routes, Route } from "react-router-dom";

// IMPORT COMPONENTS
import { Login } from "./components/Login";
import { Main } from "./components/Main";

function App() {
  // STATE VARIABLES

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [name, setName] = useState(null);

  // FUNCTIONS

  const login = (_name) => {
    setName(_name);
    setIsLoggedIn(true);
  };
  const logout = () => {
    setName(null);
    setIsLoggedIn(false);
  };

  // ROUTE SETUP FOR LOGIN AND LOGOUT

  let route;
  if (!isLoggedIn) {
    route = (
      <>
        <Route path="/" element={<Login />} exact></Route>
      </>
    );
  } else {
    route = (
      <>
        <Route path="/" element={<Login />} exact></Route>
        <Route path="/main" element={<Main />} exact></Route>
      </>
    );
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        userName: name,
        logIn: login,
        logOut: logout,
      }}
    >
      <Routes>{route}</Routes>
    </AuthContext.Provider>
  );
}

export default App;
