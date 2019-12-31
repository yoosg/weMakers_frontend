import React from "react";
import sty from "./index.module.scss";
export default function ArtistFeaturedItem() {
  return (
    <div className={sty.item}>
      <div className={sty.itemImg}>
        <div className={sty.itemImgWrap}>
          <img
            src="//t1.daumcdn.net/makers/images/artist_content/201912301447240396159.jpg?convert=crop&w=640&h=450"
            className={sty.itemThumbnail}
          ></img>
        </div>
      </div>
      <div className={sty.itemDesc}>
        <div className={sty.itemDescWrap}>
          <div className={sty.itemTitle}>동물패턴 휴대폰케이스</div>
          <div className={sty.itemArtist}>카카오메이커스</div>
        </div>
      </div>
      <div className={sty.itemLike}>
        <div className={sty.itemLikeWrap}>
          <div className={sty.itemLikeComp}>
            <button type="button" className={sty.item1LikeBtn}>
              <span className={sty.icoProduct}>좋아요</span>
              <span className={sty.likeText}>
                <span className={sty.emphasize}>135</span>명
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
