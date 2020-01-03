import React, { Component } from 'react';
import sty from './OrderEntry.module.scss';
export default class OrderEntry extends Component {
  render() {
    const { card } = this.props;
    console.log(this.props, 'qwer');
    return (
      <div className={sty.wrap}>
        <img className={sty.img} src={card.src}></img>
        <div className={sty.status}>{card.status}</div>
        <button type="button" className={sty.ask}>1:1 문의</button>
        <div className={sty.title}>{card.name}</div>
      </div>
    );
  }
}
