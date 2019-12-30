<<<<<<< HEAD
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./App";
import Login from './components/login/Login'
import './common/reset.scss'
=======
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../src/common/reset.scss';
import SignUp from './components/signUp/SignUp';
>>>>>>> 9d9329415d5c84d58aa1a45cfb0b7a713125aeab

function routes() {
  return (
    <Router>
      <Switch>
<<<<<<< HEAD
        <Route path="/login" component={Login} />
        <Route exact path="/" component={App} />
        {/* <Route exact path="/signup" component={Signup} /> */}
=======
        {/* <Route exact path="/" component={App} /> */}
        <Route path="/signup" component={SignUp} />
>>>>>>> 9d9329415d5c84d58aa1a45cfb0b7a713125aeab
      </Switch>
    </Router>
  );
}
export default routes;
