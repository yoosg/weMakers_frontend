import React, { Component } from "react";
import sty from "./ProductLikeButton.module.scss";
import likeIcon from "../assets/icon/sprite-small-min.png";
import reBuyNoti from "../assets/repurchase_noti.png";
import PlusFriendLayer from "../components/HomePlusFriendLayer";

export default class ProductLikeButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      like: props.like,
      likeCount: props.likeCount,
      plusFriend: false
    };
  }
  plusFriendToggle = () => {
    this.setState(prevState => ({
      plusFriend: !prevState.plusFriend
    }));
  };
  addLike = () => {
    !this.state.like
      ? this.setState(prevState => ({
          plusFriend: !prevState.plusFriend,
          like: !prevState.like,
          likeCount: prevState.likeCount + 1
        }))
      : this.setState(prevState => ({
          like: !prevState.like,
          likeCount: prevState.likeCount - 1
        }));
  };
  render() {
    const { like, likeCount, plusFriend } = this.state;
    const { marginTopVal } = this.props;
    return (
      <>
        {like &&
          plusFriend && [
            <div className={sty.sideBackDrop} onClick={this.plusFriendToggle}>
              <PlusFriendLayer plusFriendToggle={this.plusFriendToggle} />
            </div>
          ]}
        <button
          type="button"
          className={sty.prodLikes}
          style={{ marginTop: `${marginTopVal}px` }}
          onClick={this.addLike}
        >
          {this.props.reBuyNoti
            ? [
                <span
                  className={sty.reBuyNoti}
                  style={{ backgroundImage: `url(${reBuyNoti})` }}
                ></span>,
                <span className={sty.reOrder}>재주문 알림 예약</span>
              ]
            : [
                <span
                  className={`${sty.likeIcon} ${like && sty.likeIconTrue}`}
                  style={{ backgroundImage: `url(${likeIcon})` }}
                ></span>,
                <span className={sty.likeNum}>{likeCount}명</span>
              ]}
        </button>
      </>
    );
  }
}
