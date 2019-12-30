import React from "react";
import sty from "./ProductBadge.module.scss";
export default function ProductBadge() {
  return (
    <>
      <div className={sty.prodBadgeWrapper}>
        <span className={sty.prodBadge}>
          <span className={sty.prodBadgeNameWrapper}>
            <span className={sty.prodBadgeName}>NEW</span>
          </span>
        </span>
      </div>
    </>
  );
}
