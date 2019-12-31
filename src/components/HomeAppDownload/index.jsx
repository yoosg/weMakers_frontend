import React from "react";
import sty from "./index.module.scss";
export default function AppDownload() {
  return (
    <div className={sty.appDownWrap}>
      <a className={sty.a}>
        <span className={sty.logoImg}></span>
        <span>카카오메이커스</span>앱 다운로드
        <span></span>
      </a>
    </div>
  );
}
