import React from "react";
import sty from "./KakaoHead.module.scss";

export default function KakaoHead({ switchToggle }) {
  return (
    <header className={sty.kakaoHead}>
      <div className={sty.wrapper}>
        <div className={sty.menuWrapper} onClick={switchToggle}>
          <span className={sty.menuIcon}></span>
        </div>
        <span className={sty.logo}></span>
        <div className={sty.searchWrapper}>
          <span className={sty.searchIcon}></span>
        </div>
      </div>
    </header>
  );
}
