import React, { Component } from "react";
import sty from "./ProductReviewElement.module.scss";
import image from "../../../assets/no_profile.png";
export default class ProductReviewElement extends Component {
  render() {
    return (
      <li className={sty.reviewList}>
        <div>
          <p className={sty.reviewContent}>{this.props.data.content}</p>
          <div className={sty.reviewUser}>
            <span className={sty.reviewProfile}>
              <img className={sty.profileImage} src={image} alt='' />
            </span>
            <span className={sty.reviewUserImg}>
              <span className={sty.reviewUserInfo}>
                {this.props.data.user}
                <span className={sty.writeTime}>{this.props.data.time}</span>
              </span>
            </span>
            <span className={sty.reportTool}>
              <span className={sty.toolImg}></span>
            </span>
          </div>
          <span></span>
        </div>
      </li>
    );
  }
}
