import React, { Component } from 'react';
import sty from '../MyPage/Info.module.scss';

export default class Info extends Component {
  render() {
    const { card } = this.props;
    return (
      <div className={sty.wrap}>
        <div className={sty.itemName}>{card.name}</div>
        <div className={sty.itemPrice}>{card.price}원</div>
        <div className={sty.orderStatus}>주문종료 D-day {card.end_date}</div>
        <button className={sty.orderBtn}>주문하기</button>
      </div>
    );
  }
}
