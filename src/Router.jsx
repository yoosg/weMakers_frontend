import React from "react";
import "./common/reset.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignUp from "./components/signUp/SignUp";
import Login from "./components/login/Login";
//import Signup from "./components/signUp/Signup";

function routes() {
  return (
    <Router>
      <Switch>
        <Route path="/signup" component={SignUp} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </Router>
  );
}
export default routes;
//스위치 태그하면 한번에 오직 하나 라우트만 렌더.