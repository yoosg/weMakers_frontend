import FadeLoader from "react-spinners/FadeLoader";
import sty from "./FadeLoader.module.scss";
import React from "react";

export default function fadeLoader() {
  return (
    <div className={sty.fadeLoaderWrap}>
      <FadeLoader
        css={`
          position: absolute;
          top: 50%;
          left: 50%;
        `}
        size={"150px"}
        // margin={10}
        color={"olive"}
        loading={true}
      />
    </div>
  );
}
