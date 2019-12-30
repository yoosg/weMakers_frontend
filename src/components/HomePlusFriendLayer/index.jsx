import React from "react";
import sty from "./index.module.scss";
export default function PlusFriendLayer({ plusFriendToggle }) {
  return (
    <>
      <div className={sty.plusFriendWrap}>
        <div className={sty.plusFriendLayer}>
          <div className={sty.body}>
            <strong className={sty.h1}>'좋아요 하셨군요!</strong>
            <p className={sty.desc}>
              메이커스 채널을 추가해야
              <br></br>
              추가주문 시작 알림을 톡으로 받을 수 있어요
            </p>
            <a className={sty.link}>
              <span class={sty.icon}></span>
              채널 추가 및 알림 동의
            </a>
            <p className={sty.desc2}>
              메이커스 채널의 정보와 이벤트에 대한 알림을
              <br></br>
              카카오톡으로 받을 수 있습니다.
            </p>
          </div>
          <div className={sty.foot}>
            <a className={sty.xBtn} onClick={plusFriendToggle}>
              닫기
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
