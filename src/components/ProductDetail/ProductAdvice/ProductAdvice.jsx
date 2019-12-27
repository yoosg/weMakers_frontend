import React, { Component } from "react";
import sty from "./ProductAdvice.module.scss";
export default class ProductAdvice extends Component {
  render() {
    return (
      <div>
        <div className={sty.channelBox}>
          <h3 className={sty.adviceTitle}>메이커스 채널을 추가하세요</h3>
          <p className={sty.adviceContent}>
            신제품과 다양한 브랜드 소식을 제일 먼저 알려드려요.
          </p>

          <div className={sty.channelBtnBox}>
            <a className={sty.adviceBtn}>
              <span className={sty.channelBtnTxt}></span>채널추가
            </a>
          </div>
        </div>
        <div className={sty.adviceBox}>
          <h3 className={sty.adviceTitle}>무엇을 도와드릴까요?</h3>
          <p className={sty.adviceContent}>
            서비스 이용에 불편함이 있다면 채팅 상담, 문의글 남기기를
            이용하시거나 {"\n"} 고객센터(1644-2284)로 전화주세요.
          </p>
          <div className={sty.period}>
            (채팅/전화 상담 가능 시간: 평일 10시 ~ 18시 30분)
          </div>
          <div className={sty.adviceBtnBox}>
            <a className={sty.adviceBtn}>
              <span className={sty.adviceBtnTxt}></span>채팅 상담하기
            </a>
          </div>
        </div>
      </div>
    );
  }
}
