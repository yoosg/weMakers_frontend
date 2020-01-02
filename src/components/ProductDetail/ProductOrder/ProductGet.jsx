import React, { Component } from "react";
import sty from "./ProductGet.module.scss";
export default class ProductGet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
      getCount: 1
    };
  }

  plusHandler = () => {
    /* this.props.totalPrice(this.props.data.price * (this.state.getCount + 1)); */
    this.setState({
      getCount: this.state.getCount + 1
    });
  };
  minusHandler = () => {
    /*     this.props.totalPrice(this.props.data.price * (this.state.getCount + 1));
     */ this.state.getCount > 1 &&
      this.setState({
        getCount: this.state.getCount - 1 // 1 아래로 줄지 않게 조절
      });
  };

  render() {
    const { name, price } = this.state.data;
    const { getCount } = this.state;
    const getTotalPrice = price * this.state.getCount;
    console.log(this.state.totalPrice);
    return (
      <li
        className={`${sty.getList} ${sty.slideUp}`}
        onClick={() => {
          this.props.totalPrice(this.state.getTotalPrice);
        }}
      >
        <strong>{name}</strong>
        <div className={sty.getCount}>
          <button className={sty.minusBtn} onClick={this.minusHandler}>
            <span></span>
          </button>
          <span className={sty.getNumber}>{getCount}</span>
          <button className={sty.plusBtn} onClick={this.plusHandler}>
            <span></span>
          </button>
        </div>
        <span className={sty.getPrice}>{getTotalPrice}원</span>
        <button
          className={sty.deleteBtn}
          onClick={() => {
            this.props.deleteBtn(name);
          }}
        >
          <span></span>
        </button>
      </li>
    );
  }
}
