import React from "react";
import sty from "./index.module.scss";
import CategoryItem from "../../atoms/CatgoryItem";
export default function HomeCategoryList() {
  const categoryLists = [
    "가방/지갑",
    "IT/가전",
    "리빙",
    "의류/패션",
    "악세서리",
    "푸드",
    "키친",
    "뷰티",
    "문구",
    "취미/수집",
    "여행/전시/체험"
  ];
  const List = categoryLists.map(x => {
    return <CategoryItem key={x} name={x} />;
  });
  return (
    <div className={sty.categoryWrap}>
      <ul>{List}</ul>
    </div>
  );
}
