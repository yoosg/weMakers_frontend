import React, { Component } from "react";
import sty from "./ProductInquiry.module.scss";
export default class ProductInquiry extends Component {
  render() {
    return (
      <div className={sty.inquiryBtn}>
        <a>제작사에 제품 문의하기</a>
      </div>
    );
  }
}
