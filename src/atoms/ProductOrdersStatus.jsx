import React from "react";
import sty from "./ProductOrdersStatus.module.scss";
export default function ProductOrdersStatus({
  text,
  marginTopVal,
  fontSizeVal,
  orders,
  reBuyNoti
}) {
  return (
    <>
      {!reBuyNoti && (
        <span
          className={sty.prodOrders}
          style={{
            marginTop: `${marginTopVal}px`,
            fontSize: `${fontSizeVal}px`
          }}
        >
          <span className={sty.proOrdersNum}>{orders}</span>명{text}
        </span>
      )}
    </>
  );
}
// 이 주문 중입니다.
