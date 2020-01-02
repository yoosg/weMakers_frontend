import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./App";
import Login from "./components/login/Login";
import SignUp from "./components/signUp/SignUp";
import ProductInformation from "./pages/ProductInformation/ProductInformation";
import Artist from "./pages/Artist";
import Test1 from "./pages/Test1";
import Test2 from "./pages/Test2";
import Test3 from "./pages/Test3";
import "../src/common/reset.scss";

function routes() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route exact path="/detail" component={ProductInformation} />
        <Route exact path="/artist" component={Artist} />
        <Route exact path="/new" component={Test1} />
        <Route exact path="/open" component={Test2} />
        <Route exact path="/my" component={Test3} />
        <Route path="/detail/:id" component={ProductInformation} />
        <Route path="/" component={App} />
      </Switch>
    </Router>
  );
}
export default routes;
