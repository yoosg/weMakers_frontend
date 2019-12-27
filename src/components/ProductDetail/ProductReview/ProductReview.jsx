import React, { Component } from "react";
import sty from "./ProductReview.module.scss";

export default class ProductReview extends Component {
  render() {
    return (
      <p className={sty.detail}>
        <span className={sty.openMark}></span>
        <em>리뷰입니다</em>
        <em className={sty.period}>리뷰리뷰</em>
        <span className={sty.closeMark}></span>
      </p>
    );
  }
}
