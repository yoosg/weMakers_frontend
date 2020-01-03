import sty from "./Tab.module.scss";
import { Link } from "react-router-dom";
import React, { memo } from "react";

export default memo(function Tab({ tabName, link, tabLen, active }) {
  return (
    <li className={sty.tab} style={{ width: `${100 / tabLen}%` }}>
      <Link to={link}>
        <div className={`${sty.tabNameWrapper} ${active && sty.tabNameBorder}`}>
          <span className={`${sty.tabName} ${active && sty.tabNameBold}`}>
            {tabName}
          </span>
        </div>
      </Link>
    </li>
  );
});
