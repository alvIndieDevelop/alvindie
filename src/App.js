import React from "react";
import { Switch, Route } from "react-router-dom";

// pages
import LandingPage from "./pages/landingPage/LandingPage";

const baseURL = process.env.PUBLIC_URL;

const App = () => (
  <Switch>
    <Route exact path={baseURL + "/"} component={LandingPage} />
  </Switch>
);

export default App;
