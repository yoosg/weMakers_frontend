
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./App";
import Login from "./components/login/Login";
import SignUp from "./components/signUp/SignUp";
import ProductInformation from "./pages/ProductInformation/ProductInformation";
import MyPage from "./components/MyPage/MyPage";
import "../src/common/reset.scss";

function routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route exact path="/detail" component={ProductInformation} />
        <Route path="/mypage/like" component={MyPage}/>
        <Route path="/mypage/order" component={MyPage}/>
      </Switch>
    </Router>
  );
}
export default routes;
