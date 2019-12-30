import React from "react";
import sty from "./Tag.module.scss";

export default function Tag({ tagName }) {
  return <li className={sty.tagStyle}>{tagName}</li>;
}
