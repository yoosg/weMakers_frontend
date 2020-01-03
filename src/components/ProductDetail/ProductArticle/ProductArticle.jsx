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

const toggleData = [
  { title: "상세정보", id: 1 },
  { title: "기본정보", id: 2 },
  { title: "구매후기", id: 3 },
  { title: "제품문의", id: 4 }
];
const basicInfo = {
  id: 0,
  name: "153 ID 스페셜 에디션 키워드 펜",
  price: "21,900",
  endDate: 8,
  orderCount: 133,
  shippingStart: "1월 3주경(17일)"
};
const tabContent = {
  1: <DetailInformation />,
  2: <BasicInformation />,
  3: <ProductReview />,
  4: <ProductInquiry />
};

export default class ProductArticle extends Component {
  state = {
    activeTab: 1
  };
  tabChoice = id => () => {
    this.setState({
      activeTab: id
    });
  };

  render() {
    const { linkBox } = this.props;
    const list = toggleData.map((data, index) => (
      <InformationList
        key={index}
        data={data}
        tabChoice={this.tabChoice}
        choice={this.state.activeTab === data.id}
      />
    ));

    return (
      <article className={sty.Article}>
        <ProductDetailTitle />
        <ProductTopImage />
        <div className={sty.titBox}>
          <a href={"localhost:3000/detail"} className={sty.titName}>
            {basicInfo.name}
          </a>
          <span className={sty.titPrice}>{basicInfo.price}원</span>

          <a className={sty.linkBtn} onClick={linkBox}>
            <span className={sty.linkImg}></span>
          </a>
        </div>
        <ProductContent />
        <div className={sty.shippingInfo}>
          <span className={sty.shippingTitle}>배송예정일</span>
          <p className={sty.shippingText}>
            지금 주문하시면
            <em className={sty.shippingTextDetail}>
              {basicInfo.shippingStart} 배송시작
            </em>
            예정
          </p>
        </div>
        <div className={sty.contentLine}></div>
        <ul className={sty.informationList}>{list}</ul>

        <div className={sty.mainContent}>
          {tabContent[this.state.activeTab]}
        </div>
        <BrandInformation />
        <ProductAdvice />
        <ProductFooter />
      </article>
    );
  }
}
