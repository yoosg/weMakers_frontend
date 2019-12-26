import React from "react";
import sty from "./KakaoHead.module.scss";

export default function KakaoHead() {
  return (
    <header className={sty.kakaoHead}>
      <div className={sty.wrapper}>
        <a href="/" className={sty.menuWrapper}>
          <span className={sty.menuIcon}></span>
        </a>
        <a href="/" className={sty.logo}></a>
        <div className={sty.searchWrapper}>
          <span className={sty.searchIcon}></span>
        </div>
      </div>
    </header>
  );
}
