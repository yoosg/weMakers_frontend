import React, { Component } from "react";
import ProductInquiryElement from "./ProductInquiryElement";
import inquiryData from "./InquiryData";
import sty from "./ProductInquiry.module.scss";
export default class ProductInquiry extends Component {
  render() {
    const { data } = inquiryData;
    const list = data.map((element, index) => (
      <ProductInquiryElement key={index} inquiry={element} />
    ));
    return (
      <div>
        <div className={sty.inquiryBtn}>
          <a>제작사에 제품 문의하기</a>
        </div>
        <ul>
          {/* <ProductInquiryElement /> */}
          {list}
        </ul>
      </div>
    );
  }
}
