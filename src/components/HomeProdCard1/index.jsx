import React from "react";
import sty from "./index.module.scss";
import ProductBadge from "../../atoms/ProductBadge";
import ProductLikeButton from "../../atoms/ProductLikeButton";
import ProductOrdersStatus from "../../atoms/ProductOrdersStatus";
export default function HomeProdCard1({
  id,
  title,
  desc,
  orders,
  like,
  likeCount,
  date,
  image
}) {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${image})` }}
        className={sty.img}
      ></div>
      <div className={sty.prodSection}>
        <ProductBadge />
        <div className={sty.prodInfo}>
          <strong className={sty.prodTitle}>{title}</strong>
          <span className={sty.prodExplain}>{desc}</span>
        </div>
        <ProductOrdersStatus orders={orders} text={"이 주문  중입니다"} />
        <ProductLikeButton
          key={id}
          marginTopVal={20}
          like={like}
          likeCount={likeCount}
        />
      </div>
    </>
  );
}
