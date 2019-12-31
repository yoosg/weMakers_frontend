import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./App";
import Login from './components/login/Login'
import '../src/common/reset.scss';


function routes() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route exact path="/" component={App} />
        {/* <Route exact path="/signup" component={Signup} /> */}
      </Switch>
    </Router>
  );
}
export default routes;
