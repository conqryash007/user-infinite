import { createContext } from "react";

export const AuthContext = createContext({
  isLoggedIn: false,
  userName: null,
  logIn: () => {},
  logOut: () => {},
});
