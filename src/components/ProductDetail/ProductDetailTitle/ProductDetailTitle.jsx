import React, { Component } from "react";
import ProductTopImage from "../ProductTopImage/ProductTopImage";

import sty from "./ProductDetailTitle.module.scss";

export default class ProductDetailTitle extends Component {
  render() {
    return (
      <div className={sty.detailTitle}>
        <span className={sty.productCategory}>
          <a href='https://makers.kakao.com/category/8'>문구</a>
          <span className={sty.arrow}>></span>
          <a href='https://makers.kakao.com/category/101'>
            <em className={sty.group}>기타</em>
          </a>
        </span>
      </div>
    );
  }
}
