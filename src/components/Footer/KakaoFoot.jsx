import React from "react";
import sty from "./KakaoFoot.module.scss";
export default function kakaoFoot() {
  return (
    <footer className={sty.footerInfoWrap}>
      <div className={sty.textLogo}>
        <a className={sty.textLogoLink}>
          <span className={sty.imgText}></span>
        </a>
      </div>
      <ul className={sty.listInfo}>
        <li className={sty.info}>
          <a href="" className={sty.infoLink}>
            이용약관
          </a>
        </li>
        <li className={sty.info}>
          <a href="" className={sty.infoLink}>
            카카오쇼핑 이용약관
          </a>
        </li>
        <li className={sty.info}>
          <a href="" className={sty.infoLink}>
            사업자정보
          </a>
        </li>
        <li className={sty.info}>
          <a href="" className={sty.infoLink}>
            파트너센터
          </a>
        </li>
      </ul>
    </footer>
  );
}
