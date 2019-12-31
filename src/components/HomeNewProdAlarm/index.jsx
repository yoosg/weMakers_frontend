import React from "react";
import sty from "./index.module.scss";
export default function HomeNewProdAlarm() {
  return (
    <div className={sty.newProdAlarmWrap}>
      <h2 className={sty.h2}>신제품 소식을 알려드려요!</h2>
      <p className={sty.p}>지금 메이커스 채널을 추가하세요.</p>
      <a className={sty.a}>
        <span className={sty.logo}></span>채널 추가 및 동의알림
      </a>
      <p className={sty.p2}>
        메이커스 채널 정보와 이벤트에 대한 알림을
        <br /> 카카오톡으로 받을 수 있습니다.
      </p>
    </div>
  );
}
