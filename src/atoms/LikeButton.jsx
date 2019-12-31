import React, { Component } from "react";
import sty from "./LikeButton.module.scss";
import likeIcon from "../assets/icon/sprite-small-min.png";
import PlusFriendLayer from "../components/HomePlusFriendLayer";

export default class LikeButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      like: props.like,
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
          like: !prevState.like
        }))
      : this.setState(prevState => ({
          like: !prevState.like
        }));
  };
  render() {
    const { like, plusFriend } = this.state;
    return (
      <>
        {like &&
          plusFriend && [
            <div className={sty.sideBackDrop} onClick={this.plusFriendToggle}>
              <PlusFriendLayer plusFriendToggle={this.plusFriendToggle} />
            </div>
          ]}
        <button type="button" className={sty.prodLikes} onClick={this.addLike}>
          <span
            className={`${sty.likeIcon} ${like && sty.likeIconTrue}`}
            style={{ backgroundImage: `url(${likeIcon})` }}
          ></span>
        </button>
      </>
    );
  }
}
