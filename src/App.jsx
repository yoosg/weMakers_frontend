import React, { Component } from "react";
import "./common/reset.scss";
import sty from "./App.module.scss";
import Header from "./components/Header/Header";
import SideDrawer from "./components/SideDrawer/SideDrawer";

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
        <SideDrawer show={sideMenu} switchToggle={this.switchToggle} />
        <div>
          <Header switchToggle={this.switchToggle} />
        </div>
      </div>
    );
  }
}
