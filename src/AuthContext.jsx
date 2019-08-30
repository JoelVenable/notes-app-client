import React, { createContext, useState, useEffect } from "react";
import { Auth } from "aws-amplify";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authResolving, setAuthResolving] = useState(true);

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

  const setAuthentication = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, setAuthentication, authResolving }}>
      {children}
    </AuthContext.Provider>
  );
};
