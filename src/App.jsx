import React, { Component } from "react";
import "./common/reset.scss";
import sty from "./App.module.scss";
import Header from "./components/Header/Header";
import SideDrawer from "./pages/SideDrawer";
import Home from "./pages/Home";
import Artist from "./pages/Artist";

import Footer from "./components/Footer";
export default class App extends Component {
  state = {
    sideMenu: false
  };
  switchToggle = () => {
    this.setState(prevState => {
      return { sideMenu: !prevState.sideMenu };
    });
  };
  render() {
    const { sideMenu } = this.state;
    return (
      <div className={sty.app}>
        <div className={sty.appLayout}>
          <SideDrawer show={sideMenu} switchToggle={this.switchToggle} />
          <Header switchToggle={this.switchToggle} />
          <div className={sty.appContentLayout}>
            {/* <Home /> */}
            <Artist />
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}