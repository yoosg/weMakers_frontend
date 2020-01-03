import React from "react";
import sty from "./index.module.scss";
import ProductBadge from "../../atoms/ProductBadge";
import ProductLikeButton from "../../atoms/ProductLikeButton";
import ProductOrdersStatus from "../../atoms/ProductOrdersStatus";
import { Link } from "react-router-dom";
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
      <Link to={`/detail/:${id}`}>
        <div
          style={{ backgroundImage: `url(${image})` }}
          className={sty.img}
        ></div>
      </Link>
      <div className={sty.prodSection}>
        <Link to={`/detail/:${id}`}>
          <ProductBadge />
          <div className={sty.prodInfo}>
            <strong className={sty.prodTitle}>{title}</strong>
            <span className={sty.prodExplain}>{desc}</span>
          </div>
        </Link>
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
