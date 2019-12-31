import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./App";
import MyPage from "./components/MyPage/MyPage";
import Card from "./components/MyPage/CardEntry";
import Info from "./components/MyPage/Info"


function routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/mypage" component={MyPage}/>
        <Route path="/card" component={Card}/>
        <Route path='/info' component={Info}/>
      </Switch>
    </Router>
  );
}
export default routes;
