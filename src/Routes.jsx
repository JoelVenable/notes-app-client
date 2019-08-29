import React from "react";
import { Route, Switch } from "react-router-dom";
import { Home } from "./components/Home";
import { NotFound } from "./components/NotFound";
import { Login } from "./components/Login";

export const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/login" exact component={Login} />
    <Route component={NotFound} />
  </Switch>
);
