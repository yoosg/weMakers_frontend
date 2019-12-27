import React from "react";
import sty from "./index.module.scss";
export default function SideMenu({ menuList }) {
  const rowMenu = menuList.map(item => {
    return (
      <span class={sty.rowLink}>
        <li className={sty.row}>{item}</li>
      </span>
    );
  });
  return (
    <div className={sty.rowMenu}>
      <ul>{rowMenu}</ul>
    </div>
  );
}
