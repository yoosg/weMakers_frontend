import React, { Component } from 'react'
import sty from './Order.module.scss'

export default class Order extends Component {
  render() {
    return (
      <div className={sty.orderLists}>
        <div className={sty.wrap}>
          <img className={sty.img}></img>
          <div className={sty.status}></div>
          <div className={sty.title}></div>
        </div>
      </div>
    )
  }
}
