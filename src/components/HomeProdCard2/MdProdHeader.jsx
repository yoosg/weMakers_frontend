import React from "react";
import sty from "./MdProdHeader.module.scss";
export default function MdProdHeader({ mdTitle }) {
  return (
    <>
      <div className={sty.mdProdHeaderWrap} id="test">
        <div className={sty.mdProdHeader}>
          <span className={sty.headerLogo}></span>
          <span className={sty.headerTitle}>{mdTitle}</span>
        </div>
      </div>
    </>
  );
}
