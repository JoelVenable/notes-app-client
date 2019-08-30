import React, { createContext, useState, useEffect } from "react";
import { Auth } from "aws-amplify";
import { withRouter } from "react-router-dom";

export const AuthContext = createContext();

const Provider = ({ children, history }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authResolving, setAuthResolving] = useState(true);

  const setLoggedIn = () => {
    setIsAuthenticated(true);
    history.push("/");
  };

  const getAuth = async () => {
    try {
      await Auth.currentSession();
      setIsAuthenticated(true);
    } catch (e) {
      if (e !== "No current user") {
        alert(e);
      }
    }
    setAuthResolving(false);
  };

  useEffect(() => getAuth(), []);

  const handleLogout = async () => {
    await Auth.signOut();
    setIsAuthenticated(false);
    history.push("/login");
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, handleLogout, authResolving, setLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export const AuthProvider = withRouter(Provider);
