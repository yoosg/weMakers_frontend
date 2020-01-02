import React, { Component } from 'react';
import sty from '../MyPage/CardEntry.module.scss';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Info from './Info';
import '../../common/reset.scss';

export default class CardEntry extends Component {
  render() {
    const { card } = this.props;
    return (
      <div className={sty.container}>
        <li className={sty.lists}>
          <a className={sty.like} />
          <img
            className={sty.itemImg}
            src={card.src}
          ></img>
          <span className={`${sty.likeBtn} ${card.isLike ? '': sty.empty}`}></span>
          <Info />
        </li>
      </div>
    );
  }
}
