import React from "react";
import { Link } from "react-router-dom";
import sty from "./MdProdContent.module.scss";
import ProductOrdersStatus from "../../atoms/ProductOrdersStatus";
import ProductLikeButton from "../../atoms/ProductLikeButton";

export default function MdProdContent({
  id,
  title,
  orders,
  like,
  likeCount,
  image,
  reBuyNoti,
  marginTopVal
}) {
  return (
    <>
      <li className={sty.mdProdContent}>
        <Link
          to={`/detail/:${id}`}
          className={sty.mdProdPic}
          style={{ backgroundImage: `url(${image})` }}
        ></Link>
        <div className={sty.mdProdInfoWrap}>
          <div className={sty.mdProdInfo}>
            <Link to={`/detail/:${id}`}>
              <span className={sty.prodOrders}>
                <strong className={sty.prodTitle}>{title}</strong>
                <ProductOrdersStatus
                  text={"주문 중"}
                  fontSizeVal={12}
                  orders={orders}
                  reBuyNoti={reBuyNoti}
                />
              </span>
            </Link>
            <ProductLikeButton
              key={title}
              marginTopVal={marginTopVal}
              likeCount={likeCount}
              reBuyNoti={reBuyNoti}
            />
          </div>
        </div>
      </li>
    </>
  );
}
