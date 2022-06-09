import React, { useContext } from "react";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";
import { AuthContext } from "./../../shared/context/auth-context";

export default function NavLinks() {
  const auth = useContext(AuthContext);

  return (
    <>
      <NavLink to="/">
        <Button color="inherit">LOGIN PAGE</Button>
      </NavLink>
      {auth.isLoggedIn && (
        <NavLink to={`/main`}>
          <Button color="inherit">USERS PAGE</Button>
        </NavLink>
      )}
      {auth.isLoggedIn && (
        <NavLink to="/">
          <Button onClick={auth.logOut} color="inherit">
            Log Out
          </Button>
        </NavLink>
      )}
    </>
  );
}
