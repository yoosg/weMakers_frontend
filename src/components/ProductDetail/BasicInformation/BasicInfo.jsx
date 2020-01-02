import React, { Component } from "react";
import sty from "./BasicInfo.module.scss";
export default class BasicInfo extends Component {
  render() {
    const { title, content } = this.props.info;
    return (
      <div>
        <p className={sty.infoTitle}>{title}</p>
        <p className={sty.infoContent}>{content}</p>
      </div>
    );
  }
}
