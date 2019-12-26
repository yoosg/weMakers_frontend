import React, { Component } from "react";
import sty from "./ProductContent.module.scss";
export default class ProductContent extends Component {
  render() {
    return (
      <div className={sty.order_count_box}>
        <div className={sty.count_info}>
          <span className={sty.order_set}>주문종료 8일 남음</span>
          <div className={sty.order_graph}>
            <span className={sty.order_text}>133명 주문중</span>
            <div className={sty.graph}>
              <div className={sty.sell_line}></div>
              <div className={sty.max_point}>
                <span className={sty.max}></span>
                <span className={sty.count}>4,740</span>
              </div>
              <div className={sty.min_point}>
                <span className={sty.min}></span>
                <span className={sty.count}>1</span>
              </div>
            </div>
            <p className={sty.order_count}>
              <span className={sty.min_color}></span>포장/배송에 필요한 최소
              수량
            </p>
            <p className={sty.order_count}>
              <span className={sty.max_color}></span>기간 내 배송 가능한 최대
              주문 수량
            </p>
          </div>
        </div>
      </div>
    );
  }
}
