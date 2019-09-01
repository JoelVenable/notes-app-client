import React from "react";
import { Route, Switch } from "react-router-dom";
import { Home } from "./components/Home";
import { NotFound } from "./components/NotFound";
import { Login } from "./components/AuthPages/Login";
import { SignUp } from "./components/AuthPages/SignUp";
import { RecoverPasswordManager } from "./components/AuthPages/RecoverPasswordManager";
import { SettingsPage } from "./components/SettingsPage";
import { AuthenticatedRoute } from "./AuthenticatedRoute";

export const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/login" exact component={Login} />
    <Route path="/signup" exact component={SignUp} />
    <Route path="/recover" exact component={RecoverPasswordManager} />
    <AuthenticatedRoute path="/settings" exact component={SettingsPage} />
    <Route component={NotFound} />
  </Switch>
);
