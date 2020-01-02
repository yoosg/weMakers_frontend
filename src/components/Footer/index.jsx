import React from "react";
import CategoryList from "../HomeCategoryList";
import NewProdAlarm from "../HomeNewProdAlarm";
import MakersMoreInfo from "../HomeMakersMoreInfo";
import AppDownload from "../HomeAppDownload";
import KakaoFoot from "./KakaoFoot";
export default function Footer() {
  return (
    <>
      <CategoryList />
      <NewProdAlarm />
      <MakersMoreInfo />
      <AppDownload />
      <KakaoFoot />
    </>
  );
}
