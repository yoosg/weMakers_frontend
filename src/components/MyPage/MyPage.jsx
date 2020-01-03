import React, { Component } from "react";
import Header from "../Header/Header";
import sty from "../MyPage/MyPage.module.scss";
import { NavLink } from "react-router-dom";
import Card from "../MyPage/Card";
import Reject from "../../pages/Reject";
import "../../common/reset.scss";
import Order from "./Order";

export default class MyPage extends Component {
  render() {
    console.log(this.props);
    return localStorage.getItem("auth_token") ? (
      <div className={sty.myPage}>
        <Header />
        <div className={sty.myPageConatiner}>
          <ul className={sty.navLikedAndOrder}>
            <li className={sty.like}>
              <NavLink to="/mylike">좋아요</NavLink>
            </li>
            <div className={sty.bar}></div>
            <li className={sty.order}>
              <NavLink to="/myorder">주문 및 배송 내역</NavLink>
            </li>
          </ul>
        </div>
        <div className={sty.container}>
          {this.props.location.pathname === "/mylike" ? <Card /> : <Order />}
        </div>
      </div>
    ) : (
      <Reject />
    );
  }
}
