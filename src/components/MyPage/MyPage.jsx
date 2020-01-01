import React, { Component } from 'react';
import Header from '../Header/Header';
import sty from '../MyPage/MyPage.module.scss';
import { NavLink } from 'react-router-dom';
import Card from '../MyPage/Card';
import '../../common/reset.scss';

export default class MyPage extends Component {
  render() {
    console.log(this.props)
    return (
      <div className={sty.myPage}>
        <Header />
        <div className={sty.myPageConatiner}>
          <ul className={sty.navLikedAndOrder}>
            <li className={sty.like}>
              <NavLink to="/mypage/like">좋아요</NavLink>
            </li>
            <li className={sty.order}>
              <NavLink to="/mypage/order">주문 및 배송 내역</NavLink>
            </li>
          </ul>
        </div>
        <div className={sty.container}>
          {this.props.location.pathname === '/mypage/like' ? (
            <Card />
          ) : (
            // order
            <></>
          )}
        </div>
      </div>
    );
  }
}
