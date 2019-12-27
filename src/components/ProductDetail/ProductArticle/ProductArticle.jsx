import React, { Component } from "react";
import ProductDetailTitle from "../ProductDetailTitle/ProductDetailTitle";
import ProductTopImage from "../ProductTopImage/ProductTopImage";
import ProductContent from "../ProductContent/ProductContent";
import DetailInformation from "../DetailInformation/DetailInformation";
import BasicInformation from "../BasicInformation/BasicInformation";
import ProductInquiry from "../ProductInquiry/ProductInquiry";
import sty from "./ProductArticle.module.scss";

export default class ProductArticle extends Component {
  /* constructor(props) {
    super(props);
    this.state = {
      myClassNames: []
    };
  }

  addClass = () => {
    const classNames =
      this.state.myClassNames.length < 2 ? ["foo", "bar"] : ["foo"];
    this.setState({
      myClassNames: classNames
    });
  };
 */
  constructor(props) {
    super(props);
    this.state = {
      first: false,
      second: false,
      third: false
    };
  }

  handleClick1 = e => {
    const { first, second, third } = this.state;
    this.setState({
      first: true,
      second: false,
      third: false,
      myClassName: item =>
        item ? sty.productinfo : `${sty.productinfo} ${sty.infoblock}`
    });
  };
  handleClick2 = e => {
    this.setState({
      first: false,
      second: true,
      third: false,
      myClassName: item =>
        item ? sty.productinfo : `${sty.productinfo} ${sty.infoblock}`
    });

    console.log(this.state.myClassName);
  };
  handleClick3 = e => {
    const { first, second, third } = this.state;
    this.setState({
      first: false,
      second: false,
      third: true,
      myClassName: item =>
        item ? sty.productinfo : `${sty.productinfo} ${sty.infoblock}`
    });
  };

  render() {
    return (
      <article className={sty.Article}>
        {/* <button
          onClick={this.addClass}
          className={this.state.myClassNames.join(" ")}
        >
          aaaa
        </button> */}
        <ProductDetailTitle />
        <ProductTopImage />
        <div className={sty.tit_box}>
          <a className={sty.tit_name}> 153 ID 스페셜 에디션 키워드 펜</a>
          <span className={sty.tit_price}>21,900원</span>

          <a className={sty.link_btn}>
            <span className={sty.link_img}></span>
          </a>
        </div>
        <ProductContent />
        <div className={sty.shipping_info}>
          <span className={sty.shipping_title}>배송예정일</span>
          <p className={sty.shipping_text}>
            지금 주문하시면
            <em className={sty.shipping_text_detail}>
              1월 3주경(17일) 배송시작
            </em>
            예정
          </p>
        </div>
        <div className={sty.content_line}></div>
        <ul className={sty.information_list}>
          <li className={sty.li}>
            <a className={this.state.myClassName} onClick={this.handleClick1}>
              <span className={sty.information_txt}>상세정보</span>
            </a>
          </li>
          <li className={sty.li}>
            <a className={this.state.myClassName} onClick={this.handleClick2}>
              <span className={sty.information_txt}>기본정보</span>
            </a>
          </li>
          <li className={sty.li}>
            <a className={this.state.myClassName} onClick={this.handleClick3}>
              <span className={sty.information_txt}>제품문의</span>
              <span className={sty.txt_count}>(36)</span>
            </a>
          </li>
        </ul>
        <div className={sty.maincontent}>
          <DetailInformation />
        </div>
        <div className={sty.basiccontent}>
          <BasicInformation />
        </div>
        <div className={sty.inquiry}>
          <ProductInquiry />
        </div>
      </article>
    );
  }
}
