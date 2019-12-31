import React, { Component } from "react";
import sty from "./index.module.scss";
import CategoryTab from "../../atoms/CategoryTab";

export default class ArtistCatgoryTabs extends Component {
  state = {
    tabs: [
      { tabName: "전체", active: true },
      { tabName: "NEW", active: false },
      { tabName: "아트 커버", active: false },
      { tabName: "에코백", active: false },
      { tabName: "맨투맨/후디", active: false },
      { tabName: "인테리어 매트", active: false },
      { tabName: "핸드폰 케이스", active: false },
      { tabName: "기타 소품", active: false }
    ]
  };
  render() {
    const allTabs = this.state.tabs.map(x => {
      return (
        <CategoryTab tabName={x.tabName} tabLen={this.state.tabs.length} />
      );
    });
    return (
      <div className={sty.rowTabAll}>
        <div className={sty.tabBtnWrap}>{allTabs}</div>
      </div>
    );
  }
}
