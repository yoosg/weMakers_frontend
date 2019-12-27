import React, { Component } from "react";
import sty from "./ProductOrder.module.scss";

export default class ProductOrder extends Component {
  render() {
    return (
      <div className={sty.order_btn_container}>
        <a className={sty.like_btn}>
          <span className={sty.like_img}></span>
          좋아요
        </a>
        <a className={sty.order_btn}>주문하기</a>
      </div>
    );
  }
}
