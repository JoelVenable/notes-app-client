import React from "react";
import { Route, Switch } from "react-router-dom";
import { Home } from "./components/Home";
import { NotFound } from "./components/NotFound";
import { Login } from "./components/AuthPages/Login";
import { SignUp } from "./components/AuthPages/SignUp";
import { RecoverPasswordManager } from "./components/AuthPages/RecoverPasswordManager";

export const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/login" exact component={Login} />
    <Route path="/signup" exact component={SignUp} />
    <Route path="/recover" exact component={RecoverPasswordManager} />
    <Route component={NotFound} />
  </Switch>
);
