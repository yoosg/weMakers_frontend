import React, { Component } from "react";
import ReactTransitionGroup from "react-addons-css-transition-group";
import sty from "./ProductOrderChoice.module.scss";

class ProductOrderChoice extends Component {
  render() {
    const { isOpen, close, choice } = this.props;

    return (
      <React.Fragment>
        {isOpen ? (
          <ReactTransitionGroup
            transitionName={"Modal-anim"}
            transitionEnterTimeout={200}
            transitionLeaveTimeout={200}
          >
            <div className={sty.modalOverlay} onClick={close} />
            <div className={sty.modal}>
              <div className={sty.selectTab}>
                <fieldset>
                  <div className={sty.selectContainer}>
                    <div className={sty.selectBox}>
                      <button className={sty.selectBar} onClick={choice}>
                        <strong className={sty.selectTit}>Select</strong>
                        <span className={sty.optionBtn}>
                          <span className={sty.optionImg}></span>
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className={sty.totalBox}>
                    <div className={sty.totalList}>
                      <ul></ul>
                    </div>
                    <div className={sty.totalMoneyBox}>
                      <span className={sty.totalTxt}>
                        <strong>총 제품 금액</strong>
                        <span>(배송비 : 2,500원)</span>
                      </span>
                      <strong className={sty.totalMoney}>20,400원</strong>
                    </div>
                  </div>
                </fieldset>
              </div>
              <div className={sty.selectFooter}>
                <button className={sty.selectCancel} onClick={close}>
                  <span>취소</span>
                </button>
                <button className={sty.selectBtn}>
                  <span>결제 메시지 전송</span>
                </button>
              </div>
            </div>
          </ReactTransitionGroup>
        ) : (
          <ReactTransitionGroup
            transitionName={"Modal-anim"}
            transitionEnterTimeout={200}
            transitionLeaveTimeout={200}
          />
        )}
      </React.Fragment>
    );
  }
}

export default ProductOrderChoice;
