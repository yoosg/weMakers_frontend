import React from "react";
import sty from "./MdProdContent.module.scss";
import testImg from "../../assets/mockUpImgs/thumb_img.jpg";
import ProductOrdersStatus from "../../atoms/ProductOrdersStatus";
import ProductLikeButton from "../../atoms/ProductLikeButton";

export default function MdProdContent({
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
        <div
          className={sty.mdProdPic}
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <div className={sty.mdProdInfoWrap}>
          <div className={sty.mdProdInfo}>
            <span className={sty.prodOrders}>
              <strong className={sty.prodTitle}>{title}</strong>
              <ProductOrdersStatus
                text={"주문 중"}
                fontSizeVal={12}
                orders={orders}
                reBuyNoti={reBuyNoti}
              />
            </span>
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
