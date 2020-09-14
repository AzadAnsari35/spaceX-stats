import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { Home, History, Payload, PayloadPage } from "../pages";
import Header from "../components/Header";

const Routes = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/history" exact>
          <History />
        </Route>
        <Route path="/payload" exact>
          <Payload />
        </Route>
        <Route path="/payload/:id" exact>
          <PayloadPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
