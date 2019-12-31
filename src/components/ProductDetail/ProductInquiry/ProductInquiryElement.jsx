import React, { Component } from "react";
import sty from "./ProductInquiryElement.module.scss";
export default class ProductInquiryElement extends Component {
  render() {
    const { review, name, time, answer, id } = this.props.inquiry;
    const first = id !== 0;
    return (
      <li
        className={`${sty.inquiryElementContainer} ${first && sty.topLineNone}`}
      >
        <div className={sty.inquiryElementBox}>
          <p className={sty.inquiryReview}>{review}</p>
          <div className={sty.inquiryUserInfo}>
            <span className={sty.inquiryUser}>
              {name}
              <span className={sty.inquiryTime}>{time}</span>
            </span>
          </div>
          <div className={sty.inquiryAnswerBox}>
            <strong>답변</strong>
            <p className={sty.inquiryAnswer}>
              안녕하세요, 카카오메이커스입니다. <br />
              먼저 카카오메이커스를 이용해주시고 ‘153 ID 스페셜 에디션 키워드
              펜’에 관심을 가져주셔서 진심으로 감사합니다.
              <br />
              <br />
              {answer}
              <br />
              <br />
              앞으로도 카카오메이커스에 많은 관심과 응원을 부탁드리며, 추운
              날씨에 감기 조심하시길 바랍니다. 감사합니다.
            </p>
          </div>
        </div>
      </li>
    );
  }
}
