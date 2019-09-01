import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthProvider } from './AuthContext';


export const AuthenticatedRoute = (props) => {
  const { status: { isAuthenticated } } = useContext(AuthContext);

  return isAuthenticated ? (
    <Route {...props} />
  ) : <Redirect to="/login" />
};

// TODO:  Capture desired endpoint and redirect on login.
