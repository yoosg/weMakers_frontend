import React, { Component } from "react";
import ProductDetailTitle from "../ProductDetailTitle/ProductDetailTitle";
import ProductTopImage from "../ProductTopImage/ProductTopImage";
import ProductContent from "../ProductContent/ProductContent";
import DetailInformation from "../DetailInformation/DetailInformation";
import BasicInformation from "../BasicInformation/BasicInformation";
import ProductInquiry from "../ProductInquiry/ProductInquiry";
import InformationList from "../InformationList/InformationList";
import ProductReview from "../ProductReview/ProductReview";
import BrandInformation from "../BrandInformation/BrandInformation";
import ProductFooter from "../ProductFooter/ProductFooter";
import ProductAdvice from "../ProductAdvice/ProductAdvice";
import sty from "./ProductArticle.module.scss";

export default class ProductArticle extends Component {
  state = {
    toggleData: [
      { title: "상세정보", choice: true },
      { title: "기본정보", choice: false },
      { title: "구매후기", choice: false },
      { title: "제품문의", choice: false }
    ]
  };
  tabChoice = target => () => {
    const { toggleData } = this.state;
    let newChoice = toggleData.map(element => {
      const flag = element.title === target;
      return {
        title: element.title,
        choice: flag
      };
    });
    this.setState({
      toggleData: newChoice
    });
    console.log(toggleData);
  };
  render() {
    const { toggleData } = this.state;
    const list = toggleData.map((data, index) => (
      <InformationList key={index} data={data} tabChoice={this.tabChoice} />
    ));
    let show;
    if (toggleData[0].choice === true) {
      show = <DetailInformation />;
    } else if (toggleData[1].choice === true) {
      show = <BasicInformation />;
    } else if (toggleData[2].choice === true) {
      show = <ProductReview />;
    } else if (toggleData[3].choice === true) {
      show = <ProductInquiry />;
    }

    return (
      <article className={sty.Article}>
        <ProductDetailTitle />
        <ProductTopImage />
        <div className={sty.titBox}>
          <a className={sty.titName}> 153 ID 스페셜 에디션 키워드 펜</a>
          <span className={sty.titPrice}>21,900원</span>

          <a className={sty.linkBtn}>
            <span className={sty.linkImg}></span>
          </a>
        </div>
        <ProductContent />
        <div className={sty.shippingInfo}>
          <span className={sty.shippingTitle}>배송예정일</span>
          <p className={sty.shippingText}>
            지금 주문하시면
            <em className={sty.shippingTextDetail}>1월 3주경(17일) 배송시작</em>
            예정
          </p>
        </div>
        <div className={sty.contentLine}></div>
        <ul className={sty.informationList}>{list}</ul>

        <div className={sty.mainContent}>{show}</div>
        <BrandInformation />
        <ProductAdvice />
        <ProductFooter />
      </article>
    );
  }
}
