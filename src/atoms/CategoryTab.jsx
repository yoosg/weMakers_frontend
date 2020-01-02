import React from "react";
import sty from "./CategoryTab.module.scss";

export default function CategoryTab({ tabName }) {
  return (
    <button className={sty.tabBtn}>
      <span className={sty.tabBtnText}>{tabName}</span>
    </button>
  );
}
