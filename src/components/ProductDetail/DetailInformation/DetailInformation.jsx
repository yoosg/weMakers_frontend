import React, { Component } from "react";
import Image1 from "./Image/1.jpg";
import Image2 from "./Image/2.jpg";
import Image3 from "./Image/3.jpg";
import Image4 from "./Image/4.jpg";
import Image5 from "./Image/5.jpg";
import Image6 from "./Image/6.jpg";
import Image7 from "./Image/7.jpg";
import Image8 from "./Image/8.jpg";
import Image9 from "./Image/9.jpg";
import Image10 from "./Image/10.jpg";
import Image11 from "./Image/11.jpg";
import Image12 from "./Image/12.jpg";
import Image13 from "./Image/13.jpg";
import TitleImg from "./Image/title_product.jpg";
import review from "./Image/review.jpg";
import mint from "./Image/mint.jpg";
import sty from "./DetailInformation.module.scss";

export default class DetailInformation extends Component {
  render() {
    return (
      <div className={sty.detailInformationBox}>
        <p className={sty.detail}>
          <span className={sty.openmark}></span>
          <em>카카오메이커스에서 처음으로 공개되는 제품입니다.</em>
          <em className={sty.period}>
            주문기간 : 12.23 오후 05시 ~ 12.31 오후 05시
          </em>
          <span className={sty.closemark}></span>
        </p>
        <div className={sty.infoThumb}>
          <div className={sty.newThumbImg}>
            <img className={sty.thumbImg} src={Image1} alt={""} />
          </div>
          <div className={sty.detailText1}>
            메탈 볼펜에 새겨진 특별한 키워드
          </div>
          <div className={sty.detailText3}>
            카카오메이커스와 선물하기가 공동 기획한 모나미 스페셜 골드 에디션.
            기억하고 싶거나 전하고 싶은 키워드가 벗겨지지 않는 레이저 각인으로
            새겨져 더욱 특별하다. 고마운 사람에게, 또는 신년을 맞이하는 나에게
            한 해 동안 사용하기 좋은 펜을 선물해보자.
          </div>
          <div className={sty.titleImg}>
            <img src={TitleImg} alt={""} />
          </div>
          <div className={sty.newThumbImg}>
            <img className={sty.thumbImg} src={Image2} alt={""} />
          </div>
          <div className={sty.newThumbImg}>
            <img className={sty.thumbImg} src={Image3} alt={""} />
          </div>
          <div className={sty.detailText2}>국민 볼펜 모나미 153</div>
          <div className={sty.detailText3}>
            1963년 국내 최초 볼펜으로서 출시되어 현재까지 37억자루가 판매된
            '국민볼펜' 모나미 153. 그 역사를 고스란히 이어가되 특별한 감각과
            성능을 더한 매트 골드 에디션을 소개한다.
          </div>
          <div className={`${sty.newThumbImg} ${sty.top}`}>
            <img className={sty.thumbImg} src={Image4} alt={""} />
          </div>
          <div className={sty.newThumbImg}>
            <img className={sty.thumbImg} src={Image5} alt={""} />
          </div>
          <div className={sty.newThumbImg}>
            <img className={sty.thumbImg} src={Image6} alt={""} />
          </div>
          <div className={sty.newThumbImg}>
            <img className={sty.thumbImg} src={Image7} alt={""} />
          </div>
          <div className={sty.newThumbImg}>
            <img className={sty.thumbImg} src={Image8} alt={""} />
          </div>
          <div className={sty.detailText2}>특별한 골드 에디션, 153 ID</div>
          <div className={sty.detailText3}>
            국민 볼펜 모나미 153의 고급 버전 '153 ID'로 시그니처 6각 형태는
            유지하면서, 메탈 재질로 바디, 노크, 클립 전체를 교체했다. 저중심
            설계와 고급 리필심으로 고급 볼펜의 필기감을 만나보자. 100% 국내에서
            제작한다.
          </div>
          <div className={`${sty.newThumbImg} ${sty.top}`}>
            <img className={sty.thumbImg} src={Image9} alt={""} />
          </div>
          <div className={sty.newThumbImg}>
            <img className={sty.thumbImg} src={Image10} alt={""} />
          </div>
          <div className={sty.newThumbImg}>
            <img className={sty.thumbImg} src={Image11} alt={""} />
          </div>
          <div className={sty.newThumbImg}>
            <img className={sty.thumbImg} src={Image12} alt={""} />
          </div>
          <div className={sty.newThumbImg}>
            <img className={sty.thumbImg} src={Image13} alt={""} />
          </div>
          <div className={sty.titleImg}>
            <img src={review} alt={""} />
          </div>
          <div className={sty.itemReview}>
            <div className={sty.contentBox}>
              <div className={sty.content}>
                스마트폰을 사용하면서 종이에 닿는 볼펜의 부드러움을 잊지
                않았나요? 익숙한 필기감을 재현하면서 가볍지 않도록 우리나라
                최초의 볼펜, 모나미 153을 메탈 버전으로 제작했습니다. 무광 골드
                에디션을 단독으로 선보입니다. <br />
                <br />
                LOVE, DREAM, HAPPY, PEACE 각인 중 새해에 꼭 지키고 싶은 한가지
                키워드를 골라 나에게, 소중한 사람에게 선물하는 것은 어떨까요. 각
                키워드마다 개별 디자인한 패키지 속에는 단어와 어울리는 메시지가
                들어가 있습니다. 기본 블랙 심과, 바꿔 사용하실 수 있는 컬러
                리필심을 추가 구성했습니다.
              </div>
            </div>
          </div>
          <img src={mint} alt={""} />
          <div className={sty.up}></div>
        </div>
      </div>
    );
  }
}
