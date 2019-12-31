import React from "react";
import sty from "./Tag.module.scss";
import { Link } from "react-scroll";

export default function Tag({ tagName }) {
  return (
    <li className={sty.tagStyle}>
      <Link to={tagName} spy={true} smooth={true} offset={-105} duration={500}>
        {tagName}
      </Link>
    </li>
  );
}
