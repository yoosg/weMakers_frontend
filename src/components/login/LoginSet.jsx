import React, { Component } from 'react';
import sty from './LoginSet.module.scss';
import ReactTooltip from 'react-tooltip';

export default class LoginSet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: false,
    };
    this.clickCheckbox = this.clickCheckbox.bind(this);
  }
  clickCheckbox() {
    this.setState({
      isChecked: !this.state.isChecked,
    });
  }

  render() {
    return (
      <>
        <div className={sty.setLogin}>
          <label className={sty.labelcheck}>
            <input
              className={sty.checkboxInput}
              type="checkbox"
              checked={this.state.isChecked}
              onChange={this.clickCheckbox} //checked랑 onChange
            ></input>
            <span
              className={`${sty.checkbox}
                      ${this.state.isChecked ? sty.checked : ''}
                      ${sty.checkHover}`}
            ></span>
            <div
              className={sty.spanCheckLogin}
              data-event="click"
              data-tip="개인정보 보호를 위해 개인 PC에서만 사용해 주세요."
            >
              <ReactTooltip
                className={sty.loginStable}
                place="bottom"
                type="dark"
                offset={{ top: 1, left: -25 }}
                effect="solid"
              ></ReactTooltip>
              <span className={sty.checkLogin}>로그인 상태 유지</span>
            </div>
          </label>
        </div>
      </>
    );
  }
}
