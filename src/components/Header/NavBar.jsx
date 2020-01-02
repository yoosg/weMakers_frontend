import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import sty from "./NavBar.module.scss";
import Tab from "../../atoms/Tab";
export default withRouter(
  class NavBar extends Component {
    state = {
      tabs: [
        { tabName: "홈", link: "", active: false },
        { tabName: "아티스트", link: "artist", active: false },
        { tabName: "신규", link: "new", active: false },
        { tabName: "오픈예정", link: "open", active: false },
        { tabName: "마이", link: "my", active: false }
      ]
    };
    componentDidMount() {
      const newState = this.state.tabs.map(x => {
        if (x.link === this.props.match.url.substr(1))
          return { ...x, active: true };
        return { ...x };
      });
      this.setState({ tabs: [...newState] });
    }
    render() {
      const { tabs } = this.state;
      const tabList = tabs.map(item => {
        return (
          <Tab
            key={item.tabName}
            tabName={item.tabName}
            link={item.link}
            tabLen={tabs.length}
            active={item.active}
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
);
