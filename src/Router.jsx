import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../src/common/reset.scss";
import SignUp from "./components/signUp/SignUp";
import Newest from "./pages/Newest";
import App from "./App";

function routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/newest" component={Newest} />
      </Switch>
    </Router>
  );
}
export default routes;
