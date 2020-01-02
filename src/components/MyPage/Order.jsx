import React, { Component } from 'react'
import sty from './Order.module.scss'

export default class Order extends Component {
  render() {
    return (
      <div className={sty.orderLists}>
        <div className={sty.wrap}>
          <img className={sty.img}
          src ="https://mud-kage.kakaocdn.net/dn/qw8lR/bIcxYaakfob/guHX26MP2edYIJ0HkMMN2K/img.jpg?convert=resize2&w=320&h=320" ></img>
          <div className={sty.status}>배송중</div>
          <div className={sty.title}>상품이름</div>
        </div>
        {/*footer*/}
      </div>
    )
  }
}
