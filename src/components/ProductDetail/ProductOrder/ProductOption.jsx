import React, { Component } from "react";
import sty from "./ProductOption.module.scss";
export default class ProductOption extends Component {
  render() {
    const { name, stock } = this.props.listData;
    console.log(this.props.listData);
    return (
      <li className={sty.optionElement}>
        <span className={sty.optionBox}>
          <span className={sty.optionName}>
            {name} (잔여수량 : {stock}개)
          </span>
        </span>
      </li>
    );
  }
}
