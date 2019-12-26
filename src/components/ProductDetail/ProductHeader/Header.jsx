import React, { Component } from "react";
import sty from "./Header.module.scss";
export default class Header extends Component {
  render() {
    return (
      <header className={sty.product_head}>
        <div className={sty.title_container}>
          <h2 className={sty.title_box}>
            <span className={sty.header_title}>제품 정보</span>
          </h2>
        </div>
        <div className={sty.tool_container}>
          <div className={sty.left_tool_box}>
            <a
              href='https://makers.kakao.com/#NOJ1293073'
              className={sty.back_btn}
            >
              <span className={sty.back_img}></span>
            </a>
            <a href='https://makers.kakao.com/' className={sty.home_btn}>
              <span className={sty.home_img}></span>
            </a>
          </div>
          <div className={sty.right_tool_box}>
            <a
              href='https://makers.kakao.com/search'
              className={sty.search_btn}
            >
              <span className={sty.search_img}></span>
            </a>
          </div>
        </div>
      </header>
    );
  }
}
