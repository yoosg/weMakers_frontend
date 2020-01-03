import React from "react";
import sty from "./index.module.scss";
import MdProdHeader from "./MdProdHeader";
import MdProdContent from "./MdProdContent";
import { Link } from "react-scroll";

export default function HomeProdCard2({
  mdList,
  reBuyNoti,
  marginTopVal,
  scrollToTag
}) {
  const MdProdList = mdList.list.map(x => {
    return (
      <MdProdContent
        key={x.id}
        id={x.id}
        title={x.title}
        orders={x.orders}
        like={x.like}
        likeCount={x.likeCount}
        image={x.image}
        reBuyNoti={reBuyNoti}
        marginTopVal={marginTopVal}
      />
    );
  });

  return (
    <div className={scrollToTag}>
      <div className={sty.homeProdCardWrap}>
        <MdProdHeader mdTitle={mdList.mdTitle} />
        <div className={sty.mdProdBody}>
          <ul className={sty.ulWrapper}>
            <div className={sty.mdProdWrapper}>{MdProdList}</div>
          </ul>
        </div>
      </div>
    </div>
  );
}
