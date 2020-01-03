import React, { Component } from 'react';
import sty from '../MyPage/CardEntry.module.scss';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Info from './Info';
import '../../common/reset.scss';

export default class CardEntry extends Component {
  state = {
    isLike: this.props.card.isLike,
  };
  handleIsLike = () => {
    console.log('like', this.state.isLike);
    console.log('card', this.props)
    this.setState({
      isLike: !this.state.isLike,
    });
  };
  render() {
    const { card } = this.props;
    const { isLike } = this.state;
    return (
      <div className={sty.container}>
        <li className={sty.lists}>
          <img className={sty.itemImg} src={card.src}></img>
          <span
            className={`${sty.likeBtn} ${isLike ? '': sty.empty}`}
            onClick={this.handleIsLike}
          ></span>
          <Info card = {card} />
        </li>
      </div>
    );
  }
}
