import React, { Component } from "react";
import sty from "./InformationList.module.scss";
export default class InformationList extends Component {
  render() {
    const { title, choice } = this.props.data;
    return (
      <li className={sty.li}>
        <a
          className={`${sty.productinfo} ${choice && sty.select}`}
          onClick={this.props.tabChoice(title)}
        >
          <span className={`${sty.informationTxt} ${choice && sty.select}`}>
            {title}
          </span>
        </a>
      </li>
    );
  }
}
