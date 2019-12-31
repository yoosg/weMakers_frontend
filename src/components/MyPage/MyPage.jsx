import React, { Component } from 'react';
import Header from '../Header/Header';
import sty from '../MyPage/MyPage.module.scss';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Card from './CardEntry';

export default class MyPage extends Component {
  render() {
    return (
      <div className={sty.all}>
        <Header />
        <ul className={sty.navLikedAndOrder}>
          <li className={sty.like}></li>
          <li className={sty.order}></li>
        </ul>
        <article className={sty.myPageContainer}>
          <div className={sty.likedAndOrder}>
            <Card />
          </div>
        </article>
      </div>
    );
  }
}
