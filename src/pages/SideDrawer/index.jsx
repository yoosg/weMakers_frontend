//SideDrawer
import React from "react";
import sty from "./index.module.scss";
import SideMenu from "../../components/SideMenu";
import SideProfile from "../../components/SideProfile";
import PlusFriendLayer from "../../components/HomePlusFriendLayer";
const menuList1 = [
  "주문 배송 내역",
  "후기 내역",
  "1:1문의 내역",
  "제품 문의 내역"
];
const menuList2 = ["공지 센터", "공지 사항", "도움말 문의"];
const menuList3 = [
  "카카오 메이커스 소개",
  "브랜드 스토리",
  "브랜드 전체 보기",
  "입점 문의하기"
];

export default function SideDrawer({ show, switchToggle }) {
  return (
    <>
      <section className={`${sty.sideDrawer} ${show && sty.open}`}>
        <div className={sty.sideWrapper}>
          <SideProfile />
          <SideMenu menuList={menuList1} />
          <SideMenu menuList={menuList2} />
          <SideMenu menuList={menuList3} />

          <div className={sty.downApp}>
            <p className={sty.downAppTitle}>메이커스앱 다운로드</p>
          </div>
          <div className={sty.logOut}>
            <p className={sty.logOutTitle}>로그아웃</p>
          </div>
        </div>
      </section>
      {show && <div className={sty.sideBackDrop} onClick={switchToggle}></div>}
    </>
  );
}
