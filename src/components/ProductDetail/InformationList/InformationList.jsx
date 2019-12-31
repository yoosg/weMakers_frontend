import React, { Component } from "react";
import sty from "./InformationList.module.scss";
export default class InformationList extends Component {
  render() {
    const { data, choice } = this.props;
    const { title, id } = data;

    return (
      <li className={sty.li}>
        <a
          className={`${sty.productinfo} ${choice && sty.select}`}
          onClick={this.props.tabChoice(id)}
        >
          <span className={`${sty.informationTxt} ${choice && sty.select}`}>
            {title}
          </span>
        </a>
      </li>
    );
  }
}
