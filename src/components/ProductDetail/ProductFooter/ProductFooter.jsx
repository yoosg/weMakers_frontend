import React, { Component } from "react";
import sty from "./ProductFooter.module.scss";
export default class ProductFooter extends Component {
  render() {
    return (
      <footer className={sty.kakaoFoot}>
        <span className={sty.kakaoLink}>
          <a href='https://www.kakaocorp.com/main'>
            <span></span>
          </a>
        </span>
        <ul className={sty.infoLinkBox}>
          <li className={sty.infoLink}>
            <a
              href='https://makers.kakao.com/agreement'
              className={sty.linkText}
            >
              이용약관
            </a>
          </li>
          <li className={sty.infoLink}>
            <a
              href='https://buy.kakao.com/about/4/terms'
              className={sty.linkText}
            >
              카카오쇼핑 이용약관
            </a>
          </li>
          <li className={sty.infoLink}>
            <a href='https://makers.kakao.com/biz' className={sty.linkText}>
              사업자정보
            </a>
          </li>
          <li className={sty.infoLink}>
            <a
              href='https://makers-partner.kakao.com/affiliate/brand'
              className={sty.linkText}
            >
              파트너센터
            </a>
          </li>
        </ul>
      </footer>
    );
  }
}
