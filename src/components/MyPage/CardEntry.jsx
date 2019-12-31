import React, { Component } from 'react';
import sty from '../MyPage/CardEntry.module.scss';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Info from './Info';
import '../../common/reset.scss';

export default class CardEntry extends Component {

  render() {
    return (
      <div className={sty.container}>
        <li className={sty.lists}>
          {/* <a className={sty.id= href}/> */}
          <img
            className={sty.itemImg}
            src="https://mud-kage.kakaocdn.net/dn/qw8lR/bIcxYaakfob/guHX26MP2edYIJ0HkMMN2K/img.jpg?convert=resize2&w=320&h=320"
          ></img>
          <div className="likeBtnWrap">
            <button
              className={sty.button}
              type="button"
              // checked={this.state.isLiked}
              // onChange={this.clickLikeBtn}
            />
          </div>
          <span
            className={sty.likeBtn}
          ></span>
          <Info />
        </li>
      </div>
    );
  }
}
