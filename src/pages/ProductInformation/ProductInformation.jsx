import React, { Component } from "react";
import Header from "../../components/ProductDetail/ProductHeader/Header";
import ProductArticle from "../../components/ProductDetail/ProductArticle/ProductArticle";
import ProductOrderChoice from "../../components/ProductDetail/ProductOrder/ProductOrderChoice";
import ProductOrder from "../../components/ProductDetail/ProductOrder/ProductOrder";
import LinkPage from "../../components/ProductDetail/ProductArticle/LinkPage";
import sty from "./ProductInformation.module.scss";
import "../../common/reset.scss";

export default class ProductInformation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowing: false,
      choiceList: false,
      likeBtn: false,
      link: false,
      list: [
        { id: 0, name: "블러셔", stock: 254, price: 17900 },
        { id: 1, name: "브릭", stock: 1, price: 17900 },
        { id: 2, name: "차콜", stock: 250, price: 17900 },
        { id: 3, name: "베이지", stock: 262, price: 17900 },
        { id: 4, name: "포루리", stock: 232, price: 17900 },
        { id: 5, name: "블랙", stock: 304, price: 17900 }
      ],
      getList: []
    };
  }
  firstModalHandler = () => {
    this.setState({
      isShowing: !this.state.isShowing
    });
  };
  secondModalHandler = () => {
    this.setState({
      choiceList: !this.state.choiceList
    });
  };
  likeHandler = () => {
    this.setState({
      likeBtn: !this.state.likeBtn
    });
  };
  linkHandler = () => {
    this.setState({
      link: !this.state.link
    });
  };
  selectListHandler = target => {
    let set = true;
    this.state.getList.forEach(element => {
      if (element.name === target) {
        set = false;
      }
    });
    if (set) {
      const get = this.state.list.filter(element => element.name === target);
      this.setState({
        getList: this.state.getList.concat(get),
        choiceList: !this.state.choiceList
      });
    }
  };
  orderDeleteHandler = target => {
    const del = this.state.getList.filter(element => element.name !== target);
    this.setState({
      getList: del
    });
  };

  render() {
    const likeLink = this.state.likeBtn
      ? null
      : "https://makers.kakao.com/like?makersapp_title=%EC%A2%8B%EC%95%84%EC%9A%94";
    console.log("infomation : ", this.state.getList);
    return (
      <div className={sty.mainContainer}>
        <Header />
        <ProductArticle linkBox={this.linkHandler} />
        <a href='#root' className={sty.upBtn} />
        <div className={sty.orderBtnContainer}>
          <a
            href={likeLink}
            className={`${sty.likeBtn} ${this.state.likeBtn && sty.likeTxt}`}
            onClick={this.likeHandler}
          >
            <span
              className={`${sty.likeImg} ${this.state.likeBtn && sty.like}`}
            ></span>
            {this.state.likeBtn ? "좋아요 리스트" : "좋아요"}
          </a>
          <button className={sty.orderBtn} onClick={this.firstModalHandler}>
            주문하기
          </button>
        </div>

        <ProductOrderChoice
          isOpen={this.state.isShowing}
          close={this.firstModalHandler}
          choice={this.secondModalHandler}
          getList={this.state.getList}
          deleteBtn={this.orderDeleteHandler}
        />

        <ProductOrder
          listView={this.state.choiceList}
          choice={this.secondModalHandler}
          choiceList={this.state.list}
          selectList={this.selectListHandler}
        />
        <LinkPage linkOpen={this.state.link} linkBox={this.linkHandler} />
      </div>
    );
  }
}
