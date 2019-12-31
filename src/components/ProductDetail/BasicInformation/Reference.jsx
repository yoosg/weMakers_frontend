import React, { Component } from "react";
import ReferenceElement from "./ReferenceElement";
import sty from "./Reference.module.scss";
export default class Reference extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reference: this.props.data,
      on: false
    };
  }

  noticeToggle = target => () => {
    const { on } = this.state;
    this.setState({
      on: !on
    });
  };
  render() {
    const { title } = this.props.data;
    const { reference, on } = this.state;
    const noticeList = reference.notice.map((i, index) => (
      <ReferenceElement key={index} Notice={i} />
    ));

    return (
      <li className={sty.referenceBox}>
        <span className={sty.referenceTitle}>
          <strong>{title}</strong>
          <span
            className={`${sty.noticeOpen} ${on && sty.noticeClose}`}
            onClick={this.noticeToggle(reference.title)}
          ></span>
        </span>
        {on && <div className={sty.notice}>{noticeList}</div>}
      </li>
    );
  }
}
