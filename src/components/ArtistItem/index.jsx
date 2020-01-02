import React from "react";
import sty from "./index.module.scss";
import LikeButton from "../../atoms/LikeButton";
export default function ArtistItem() {
  return (
    <li>
      <div className={sty.wrapArtistItem}>
        <div className={sty.wrapArtistItemImg}>
          <img
            src="//t1.daumcdn.net/makers/images/artist_content/201912301205209741072.jpg?convert=crop&w=640&h=450"
            alt="item"
            className={sty.artistItemImg}
          />
        </div>
        <div className={sty.itemBtn}>
          <button type="button" className={sty.itemBtnLiked}>
            <LikeButton />
            <span className={sty.itemBtnLikedCount}>280</span>
          </button>
        </div>
        <div className={sty.wrapArtistItemInfo}>
          <span className={sty.artistItemTag}>#맨투맨/후디</span>
          <strong className={sty.artistItemTitle}>큰일 후드티</strong>
          <span className={sty.artistItemType}>
            아티스트 /
            <span className={sty.artistItemMakers}>
              {"  "}
              카카오메이커스
            </span>
          </span>
        </div>
      </div>
    </li>
  );
}
