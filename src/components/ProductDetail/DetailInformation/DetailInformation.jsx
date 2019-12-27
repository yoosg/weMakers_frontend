import React, { Component } from "react";
import sty from "./DetailInformation.module.scss";

export default class DetailInformation extends Component {
  render() {
    return (
      <p className={sty.detail}>
        <span className={sty.openmark}></span>
        <em>카카오메이커스에서 처음으로 공개되는 제품입니다.</em>
        <em className={sty.period}>
          주문기간 : 12.23 오후 05시 ~ 12.31 오후 05시
        </em>
        <span className={sty.closemark}></span>
      </p>
    );
  }
}
