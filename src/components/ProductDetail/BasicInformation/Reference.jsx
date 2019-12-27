import React, { Component } from "react";
import ReferenceElement from "./ReferenceElement";
import sty from "./Reference.module.scss";
export default class Reference extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reference: this.props.data,
      onOff: false
    };
  }

  noticeToggle = target => () => {
    const { onOff } = this.state;
    const onoff = !onOff;
    this.setState({
      onOff: onoff
    });
  };
  render() {
    const { title } = this.props.data;
    const { reference, onOff } = this.state;
    const noticeList = reference.notice.map((i, index) => (
      <ReferenceElement key={index} Notice={i} />
    ));
    let hidden;
    if (onOff === true) {
      hidden = <div className={sty.notice}>{noticeList}</div>;
    } else {
      hidden = null;
    }
    return (
      <li className={sty.referenceBox}>
        <span className={sty.referenceTitle}>
          <strong>{title}</strong>
          <span
            className={`${sty.noticeOpen} ${onOff && sty.noticeClose}`}
            onClick={this.noticeToggle(reference.title)}
          ></span>
        </span>
        {hidden}
      </li>
    );
  }
}
