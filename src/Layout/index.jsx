import React, { Component } from "react";
import "../common/reset.scss";
import sty from "./index.module.scss";
import Header from "../components/Header/Header";
import SideDrawer from "../pages/SideDrawer";
import Footer from "../components/Footer";

export default class Layout extends Component {
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
          <div className={sty.appContentLayout}>{this.props.children}</div>
          <Footer />
        </div>
      </div>
    );
  }
}
