import React, { Component } from "react";
import ReactTransitionGroup from "react-addons-css-transition-group";
import ProductGet from "./ProductGet";
import sty from "./ProductOrderChoice.module.scss";

class ProductOrderChoice extends Component {
  constructor(props) {
    super(props);
    /* this.messagesEnd = React.createRef(); */
    this.scrollToBottom = this.scrollToBottom.bind(this);
  }

  state = {
    total: ""
  };
  totalPrice = target => {
    console.log("getCount :", target);
    console.log("getList :", this.props.getList);
    this.setState({
      total: target
    });
  };
  scrollToBottom = () => {
    this.messagesEnd.scrollIntoView({ behavior: "smooth" });
  };

  componentDidMount() {
    /* this.scrollToBottom(); */
    console.log(this.messagesEnd);
  }

  componentDidUpdate(prevProps) {
    console.log(this.props.getList.length > 3);
    if (prevProps.getList.length !== this.props.getList.length) {
      this.props.getList.length > 2 && this.scrollToBottom();
    }
  }
  /* gotoBottom = idx => {
    var element = document.getElementsByClassName(“sw-commentS-body”)[idx];
    element.scrollTop = element.scrollHeight - element.clientHeight;
  }; */
  render() {
    const { isOpen, close, choice, getList, deleteBtn } = this.props;
    const list = getList.map(element => (
      <ProductGet
        key={element.id}
        data={element}
        deleteBtn={deleteBtn}
        totalPrice={this.totalPrice}
      />
    ));
    console.log(this.messagesEnd);

    return (
      <React.Fragment>
        {isOpen ? (
          <ReactTransitionGroup
            transitionName={"Modal-anim"}
            transitionEnterTimeout={200}
            transitionLeaveTimeout={200}
          >
            <div className={sty.modalOverlay} onClick={close} />
            <div className={`${sty.modal} ${sty.slideUp}`}>
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
                      <ul>
                        {list}
                        <div
                          style={{ float: "left", clear: "both" }}
                          ref={el => {
                            this.messagesEnd = el;
                          }}
                        ></div>
                      </ul>
                    </div>
                    <div className={sty.totalMoneyBox}>
                      <span className={sty.totalTxt}>
                        <strong>총 제품 금액</strong>
                        <span>(배송비 : 2,500원)</span>
                      </span>
                      <strong className={sty.totalMoney}>
                        {this.state.total}원
                      </strong>
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
