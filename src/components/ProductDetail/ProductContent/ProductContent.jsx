import React, { Component } from "react";
import sty from "./ProductContent.module.scss";
export default class ProductContent extends Component {
  state = {
    maxOrder: 4740,
    minOrder: 1,
    orderCount: 133
  };
  render() {
    const initialValue =
      Math.round((this.state.orderCount / this.state.maxOrder) * 100) < 70
        ? this.state.orderCount >= 1
          ? 30
          : 0
        : 0;

    const graphStyle = {
      width:
        Math.round((this.state.orderCount / this.state.maxOrder) * 100) +
        initialValue +
        "%"
    };
    return (
      <div className={sty.orderCountBox}>
        <div className={sty.countInfo}>
          <span className={sty.orderSet}>주문종료 8일 남음</span>
          <div className={sty.orderGraph}>
            <span className={sty.orderText}>133명 주문중</span>
            <div className={sty.graph}>
              <div className={sty.sellLine} style={graphStyle}></div>
              <div className={sty.maxPoint}>
                <span className={sty.max}></span>
                <span className={sty.count}>4,740</span>
              </div>
              <div className={sty.minPoint}>
                <span className={sty.min}></span>
                <span className={sty.count}>1</span>
              </div>
            </div>
            <p className={sty.orderCount}>
              <span className={sty.minColor}></span>포장/배송에 필요한 최소 수량
            </p>
            <p className={sty.orderCount}>
              <span className={sty.maxColor}></span>기간 내 배송 가능한 최대
              주문 수량
            </p>
          </div>
        </div>
      </div>
    );
  }
}
