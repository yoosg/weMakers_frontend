//SideDrawer
import React from "react";
import sty from "./SideDrawer.module.scss";

export default function SideDrawer({ show, switchToggle }) {
  return (
    <>
      <div className={`${sty.sideDrawer} ${show && sty.open}`}>
        <div className={sty.sideWrapper}>
          <div className={sty.Profile}>
            <div className={sty.ProfileAvatar}></div>
            <div className={sty.ProfileInfo}>로그인해주세요</div>
          </div>
          <div className={sty.rowMenu}>
            <ul>
              <li>주문 배송 내역</li>
              <li>후기 내역</li>
              <li>1:1 문의 내역</li>
              <li>제품 문의 내역</li>
            </ul>
            
            <ul>
              <li>공지 센터</li>
              <li>공지 사항</li>
              <li>도움말/문의</li>
            </ul>
            <ul>
              <li>카카오메이커스 소개</li>
              <li>브랜드 스토리</li>
              <li>브랜드 전체보기</li>
              <li>입점 문의하기</li>
            </ul>
          </div>
          <div className={sty.rowDownApp}>메이커스앱 다운로드</div>
        </div>
      </div>
      {show && <div className={sty.sideBackDrop} onClick={switchToggle}></div>}
    </>
  );
}
