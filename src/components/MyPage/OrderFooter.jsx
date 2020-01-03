import React, { Component } from 'react'
import sty from '../MyPage/OrderFooter.module.scss'

export default class OrderFooter extends Component {
  render() {
    return (
      <div className={sty.OrderFooter}>
        <div className={sty.kakao}>kakao</div>
        <p><br></br>
        (주)카카오는 통신판매중개자로서 통신판매의 당사자가 아니며 상품의 주문, 배송 및 환불 등과 관련한 의무와 책임은 각 판매자에게 있습니다.
      </p>
      </div>
    )
  }
}
