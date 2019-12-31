import React, { Component } from "react";
import sty from "./ReferenceElement.module.scss";
export default class ReferenceElement extends Component {
  render() {
    return <span className={sty.noticeStyle}>{this.props.Notice}</span>;
  }
}
