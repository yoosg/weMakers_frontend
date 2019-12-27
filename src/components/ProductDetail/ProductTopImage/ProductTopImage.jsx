import React, { Component } from "react";
import sty from "./ProductTopImage.module.scss";
import SimpleSlider from "../SimpleSlider/SimpleSlider";
export default class ProductTopImage extends Component {
  render() {
    return (
      <div className={sty.slide}>
        <SimpleSlider />
      </div>
    );
  }
}
