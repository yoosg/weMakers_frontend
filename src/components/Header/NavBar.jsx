import React, { Component } from "react";
import sty from "./NavBar.module.scss";
import Tab from "../../atoms/Tab";
export default class NavBar extends Component {
  state = {
    tabs: [
      { tabName: "홈", active: true },
      { tabName: "아티스트", active: false },
      { tabName: "신규", active: false },
      { tabName: "오픈예정", active: false },
      { tabName: "마이", active: false }
    ]
  };

  //change tab focus
  changeTabActive = target => () => {
    const { tabs } = this.state;
    const preActiveIndex = tabs.findIndex(x => x.active === true);
    const newActiveState = tabs.map((x, idx) => {
      if (idx === preActiveIndex && x.tabName !== target)
        return { ...x, active: false };
      if (x.tabName === target) return { ...x, active: true };
      return x;
    });
    //set new tabs state
    this.setState({
      tabs: [...newActiveState]
    });
  };

  render() {
    const { tabs } = this.state;
    const tabList = tabs.map(item => {
      return (
        <Tab
          key={item.tabName}
          tabName={item.tabName}
          tabLen={tabs.length}
          active={item.active}
          changeTabActive={this.changeTabActive}
        />
      );
    });

    return (
      <>
        <ul className={sty.ulWrapper}>{tabList}</ul>
      </>
    );
  }
}
