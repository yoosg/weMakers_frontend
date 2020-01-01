import React, { Component } from 'react';
import sty from '../MyPage/Info.module.scss';

export default class Info extends Component {
  render() {
    return (
      <div className={sty.wrap}>
        <div className={sty.itemName}></div>
        <div className={sty.itemPrice}>17800원</div>
        <div className={sty.orderStatus}>주문종료 D-day 3</div>
        <button className={sty.orderBtn}>주문하기</button>
      </div>
    );
  }
}
