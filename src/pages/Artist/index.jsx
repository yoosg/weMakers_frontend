import React from "react";
import sty from "./index.module.scss";
import ArtistFeaturedItem from "../../components/ArtistFeaturedItem";
import ArtistCatgoryTabs from "../../components/ArtistCategoryTabs";
import makersArtistImg from "../../assets/makersXartist.png";
import findArtistImg from "../../assets/findArtist.png";
import findMakersImg from "../../assets/findMakers.png";
import downTemplate from "../../assets/downTemplate.png";
import downTemplateBelow from "../../assets/downTemplateBelow.png";
import ArtistItem from "../../components/ArtistItem";
import ArtistCoverStory from "../../components/ArtistCoverStory";
import Layout from "../../Layout";
export default function Artist() {
  return (
    <Layout>
      <div className={sty.artistWrap}>
        <div className={sty.artistWrapPadding}>
          <div className={sty.featured}>
            <ArtistCoverStory />
          </div>
          <ArtistCatgoryTabs />
          <div className={sty.rowArtistList}>
            <ul>
              <ArtistItem />
            </ul>
          </div>

          <span className={sty.makersXartist}>
            <img src={makersArtistImg} className={sty.find}></img>
            <img src={findArtistImg} className={sty.find}></img>
            <img src={downTemplate} className={sty.find}></img>
            <img src={findMakersImg} className={sty.find}></img>
            <img src={downTemplate} className={sty.find}></img>
            <img src={downTemplateBelow} className={sty.find}></img>
          </span>
        </div>
      </div>
    </Layout>
  );
}
