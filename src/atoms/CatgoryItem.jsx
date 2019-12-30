import React from "react";
import sty from "./CategoryItem.module.scss";
export default function CatgoryItem({ name }) {
  return (
    <>
      <li className={sty.categoryItem}>
        <a className={sty.categoryLink}>
          <span className={sty.categoryText}>{name}</span>
        </a>
      </li>
    </>
  );
}
