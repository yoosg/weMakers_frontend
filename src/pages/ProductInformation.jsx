import React, { Component } from "react";
import Header from "../components/ProductDetail/ProductHeader/Header";
import ProductOrder from "../components/ProductDetail/ProductOrder/ProductOrder";
import ProductArticle from "../components/ProductDetail/ProductArticle/ProductArticle";
import "./ProductInformation.scss";
export default class ProductInformation extends Component {
  render() {
    return (
      <div className='mainContainer'>
        <Header />
        <ProductArticle />
        <ProductOrder />
      </div>
    );
  }
}
