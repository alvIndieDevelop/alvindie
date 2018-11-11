import React from "react";
import { Switch, Route } from "react-router-dom";

// pages
import LandingPage from "./pages/landingPage/LandingPage";

const App = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
  </Switch>
);

export default App;
