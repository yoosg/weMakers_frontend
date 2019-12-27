import React, { memo } from "react";
import sty from "./Tab.module.scss";

export default memo(function Tab({ tabName, tabLen, active, changeTabActive }) {
  return (
    <li className={sty.tab} style={{ width: `${100 / tabLen}%` }}>
      <div
        className={`${sty.tabNameWrapper} ${active && sty.tabNameBorder}`}
        onClick={changeTabActive(tabName)}
      >
        <span className={sty.tabName}>{tabName}</span>
      </div>
    </li>
  );
});
