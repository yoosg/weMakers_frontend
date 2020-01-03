import React from "react";
import { Link } from "react-router-dom";
import sty from "./index.module.scss";

export default function SideProfile({ nickName, userImage, point }) {
  return (
    <div className={sty.Profile}>
      <div className={sty.ProfileAvatar}></div>
      {!nickName ? (
        <Link to="/login">
          <span className={sty.ProfileInfo}>로그인해주세요 ></span>
        </Link>
      ) : (
        <div className={sty.ProfileInfoWrapper}>
          <span className={sty.ProfileInfoName}>{nickName}</span>
          <span className={sty.ProfileInfoPoint}>
            카카오쇼핑 포인트 >{point}
          </span>
        </div>
      )}

      <div className={sty.ProfileSetting}></div>
    </div>
  );
}
