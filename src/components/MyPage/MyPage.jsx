import React, { Component } from 'react';
import Header from '../Header/Header';
import sty from '../MyPage/MyPage.module.scss';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Card from './CardEntry';

export default class MyPage extends Component {
  render() {
    return (
      <div className={sty.myPage}>
        <Header />
        <div className={sty.navLikedAndOrderWrap}>
          <ul className={sty.navLikedAndOrder}>
            <li className={sty.like}>좋아요</li>
            <li className={sty.order}>주문 및 배송 내역</li>
          </ul>
        </div>
        <div className={sty.container}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          </div>
        </div>
    );
  }
}
