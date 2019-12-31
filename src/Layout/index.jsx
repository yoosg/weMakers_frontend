import React from "react";
import sty from "./index.module.scss";
export default function Layout(props) {
  return <div className={sty.appLayout}>{props.children}</div>;
}
