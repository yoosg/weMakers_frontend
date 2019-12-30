import React from 'react';
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom';
import '../src/common/reset.scss'
import SignUp from './components/signUp/SignUp';

function routes() {
  return (
    <Router>
      <Switch>
        {/* <Route exact path="/" component={App} /> */}
        <Route path="/signup" component={SignUp} />
        {/* <Route path="/like" component={MyPage} /> */}
        {/* <Route path="/order" component={MyPage} /> */}
      </Switch>
    </Router>
  );
}
export default routes;
