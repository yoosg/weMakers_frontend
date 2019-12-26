import React from "react";
import sty from "./Header.module.scss";
import KaKaoHead from "./KakaoHead";
import GlobalNavBar from "./NavBar";

function Header() {
  return (
    <div className={sty.Header}>
      <KaKaoHead />
      <GlobalNavBar />
    </div>
  );
}

export default Header;
