import React, { Component } from "react";
import BasicInfo from "./BasicInfo";
import Reference from "./Reference";
import basicData from "./BasicInformationData";
import OftenQA from "./OftenQA";
import sty from "./BasicInformation.module.scss";
export default class BasicInformation extends Component {
  render() {
    const { basicInfo, reference } = basicData;
    console.log(basicInfo);
    const list = basicInfo.map((info, index) => (
      <BasicInfo key={index} info={info} />
    ));
    return (
      <div>
        <div className={sty.infoList}>{list}</div>
        <div className={sty.referenceList}>
          <ul>
            {reference.map((refData, index) => (
              <Reference key={index} data={refData} />
            ))}
          </ul>
        </div>
        <div className={sty.oftenQuestion}>
          <div className={sty.questionList}></div>
        </div>
      </div>
    );
  }
}
