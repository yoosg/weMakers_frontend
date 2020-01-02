import React from "react";
import sty from "./index.module.scss";
export default function MakersMoreInfo() {
  return (
    <div className={sty.contactWrap}>
      <div className={sty.contactAsk}>
        <a className={sty.a}>대량 구매 문의하기</a>
        <a className={sty.a}>입점 문의하기</a>
      </div>
      <div className={sty.contactMakers}>
        <a className={sty.a}>카카오메이커스 소개</a>
        <div className={sty.a}>
          공유하기
          <ul className={sty.ul}>
            <li className={sty.li}>
              <a className={sty.shareWrap}>
                <span className={sty.shareKaKao}></span>
              </a>
            </li>
            <li className={sty.li}>
              <a className={sty.shareWrap}>
                <span className={sty.shareFacebook}></span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
