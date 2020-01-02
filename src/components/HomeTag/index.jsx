import React from "react";
import Tag from "../../atoms/Tag";
import sty from "./index.module.scss";

export default function HomeTag({ mdSelectList }) {
  const list = mdSelectList.map(tagName => {
    return <Tag key={tagName} tagName={tagName} />;
  });
  return (
    <div className={sty.tagNaviWrapper}>
      <div className={sty.tagNavi}>
        <ul className={sty.tagUl}>{list}</ul>
      </div>
    </div>
  );
}
