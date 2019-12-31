import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProductInformation from "./pages/ProductInformation/ProductInformation";
import Home from "./pages";
class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/detail' component={ProductInformation} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
