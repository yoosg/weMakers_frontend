import React, { memo } from "react";
import sty from "./Header.module.scss";
import KaKaoHead from "./KakaoHead";
import GlobalNavBar from "./NavBar";

export default memo(function Header({ switchToggle }) {
  return (
    <div className={sty.Header}>
      <KaKaoHead switchToggle={switchToggle} />
      <GlobalNavBar />
    </div>
  );
});
