import React, { Component } from "react";
import sty from "./BrandInformation.module.scss";
import makers from "./makers.jpg";
export default class BrandInformation extends Component {
  render() {
    return (
      <div className={sty.brandInformation}>
        <h3>브랜드 정보</h3>
        <a
          href='https://makers.kakao.com/brand/37461'
          className={sty.brandLink}
        >
          <span className={sty.brandImg}>
            <img src={makers} className={sty.makersImg} alt='' />
          </span>
          <span className={sty.brandName}>
            카카오메이커스
            <span className={sty.shopButton}></span>
          </span>
        </a>
        <p>우리는 필요한만큼 만듭니다.</p>
        <a className={sty.brandLike}>
          <span></span>좋아요
        </a>
      </div>
    );
  }
}
