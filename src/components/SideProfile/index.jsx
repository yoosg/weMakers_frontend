import React from "react";
import sty from "./index.module.scss";

export default function SideProfile() {
  return (
    <div className={sty.Profile}>
      <div className={sty.ProfileAvatar}></div>
      {/* <span className={sty.ProfileInfo}>로그인해주요 ></span> */}
      <div className={sty.ProfileInfoWrapper}>
        <span className={sty.ProfileInfoName}>김형남</span>
        <span className={sty.ProfileInfoPoint}>카카오쇼핑 포인트 ></span>
      </div>
      <div className={sty.ProfileSetting}></div>
    </div>
  );
}
