import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./App";
import MyPage from "./components/MyPage/MyPage";



function routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/mypage/like" component={MyPage}/>
        <Route path="/mypage/order" component={MyPage}/>
      </Switch>
    </Router>
  );
}
export default routes;
