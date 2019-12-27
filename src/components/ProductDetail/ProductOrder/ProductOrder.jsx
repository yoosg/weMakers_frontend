import React, { Component } from "react";
import sty from "./ProductOrder.module.scss";

export default class ProductOrder extends Component {
  render() {
    return (
      <div className={sty.orderBtnContainer}>
        <a className={sty.likeBtn}>
          <span className={sty.likeImg}></span>
          좋아요
        </a>
        <a className={sty.orderBtn}>주문하기</a>
      </div>
    );
  }
}
