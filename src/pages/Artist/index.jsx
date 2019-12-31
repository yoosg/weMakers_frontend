import React from "react";
import sty from "./index.module.scss";
import ArtistFeaturedItem from "../../components/ArtistFeaturedItem";
import ArtistCatgoryTabs from "../../components/ArtistCategoryTabs";
export default function Artist() {
  return (
    <div className={sty.artistWrap}>
      <div className={sty.artistWrapPadding}>
        <div className={sty.featured}>
          <a className={sty.coverStory}>
            <div className={sty.coverStoryTitle}>
              <div className={sty.tag}>
                <span className={sty.label}>
                  <span className={sty.labelText}>Cover story</span>
                </span>
              </div>
              <div className={sty.title}>
                <p className={sty.titleText}>손 안의 야생동물</p>
              </div>
            </div>
            <div className={sty.coverStoryDesc}>
              <div className={sty.descWrap}>
                <p className={sty.desc}>
                  지금까지는 주로 명화를 기반으로 한 패턴 디자인 제품을
                  선보였었는데요. 이번에는 새로운 패턴 디자인 에디션을
                  준비했어요. 야생동물 무늬패턴입니다. 얼룩말, 호랑이, 표범,
                  흑표범 그리고 뱀까지. 다채롭고 화려한 동물 무늬패턴 제품들을
                  확인해보세요.
                </p>
              </div>
            </div>
            <div className={sty.coverStoryImg}>
              <img
                src="//t1.daumcdn.net/makers/images/artist_content/201912301901418815.jpeg?convert=crop&w=640&h=450"
                alt="손 안의 야생동물"
                className={sty.thumbnail}
              ></img>
              <div className={sty.metaWrap}>
                <div className={sty.metaLeft}>
                  <p className={sty.descriptionTitle}> Artist </p>
                  <p class={sty.description}> Name </p>
                  <p class={sty.description}> Category </p>
                  <p class={sty.description}> Nationality </p>
                </div>
                <div className={sty.metaRight}>
                  <p className={sty.descriptionTitle}>
                    <span className={sty.hidden}>Artist</span>{" "}
                  </p>
                  <p class={sty.description}>카카오메이커스</p>
                  <p class={sty.description}>company</p>
                  <p class={sty.description}>Artist</p>
                </div>
              </div>
            </div>
          </a>
          <div className={sty.featuredItems}>
            <ArtistFeaturedItem />
            <ArtistFeaturedItem />
          </div>
        </div>
        <ArtistCatgoryTabs />
        <div className={sty.rowArtistList}>
          <ul>
            {/* //여기 artistItem index.jsx로 */}
            <li>
              <div className={sty.wrapArtistItem}>
                <div className={sty.wrapArtistItemImg}>
                  <img
                    src="//t1.daumcdn.net/makers/images/artist_content/201912301205209741072.jpg?convert=crop&w=640&h=450"
                    alt="item"
                    className={sty.artistItemImg}
                  />
                </div>
                <div className={sty.wrapArtistItemInfo}>
                  <span className={sty.artistItemTag}>#맨투맨/후디</span>
                  <strong className={sty.artistItemTitle}>큰일 후드티</strong>
                  <span className={sty.artistItemType}>
                    아티스트 /
                    <span className={sty.artistItemMakers}>
                      {" "}
                      카카오메이커스
                    </span>
                  </span>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className={sty.rowApply1}></div>
        <div className={sty.rowApplyDown}></div>
        <div className={sty.rowApply2}></div>
        <div className={sty.rowApply2Down}></div>
      </div>
    </div>
  );
}
