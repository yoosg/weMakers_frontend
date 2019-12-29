import React, { Component } from 'react';
import sty from './LoginInput.module.scss';
import ReactTooltip from 'react-tooltip';

export default class LoginInput extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props,'ff') //프롭스는 부모의 스테이트를 화면에 뿌려줄때,부모 스테이트 함수가져올때
    return (
      <>
        <div className={`${sty.kakaoAcount} ${sty.twoInput}`}>
          <input
            className={`${sty.inputEmail} ${sty.inputBox}`}
            type="text"
            name="email"
            value={this.props.email}
            onChange={this.props.handleChange}
            placeholder="이메일"
          />
          <div className={sty.question}>
            <button
              className={sty.emailButton}
              type="button"
              name="tooltip"
              onClick={this.props.clickHelp}
            ></button>
            {this.props.isHelpTooltipOn && (
              <div className={sty.emailTooltip}>
                <p className={sty.helpboxContent}>
                  카카오계정은 카카오 서비스 및 연계 서비스를 이용하기 위하여
                  필요한 로그인 계정입니다.
                </p>
                <p className={sty.helpboxContent2}>
                  <a
                    className={sty.helpboxUrl}
                    href="https://accounts.kakao.com/weblogin/find_account_guide?continue=https%3A%2F%2Fmakers.kakao.com%2F"
                  >
                    카카오계정찾기
                  </a>
                </p>
              </div>
            )}
          </div>
        </div>
        <div className={`${sty.divPassword} ${sty.twoInput}`}>
          <input
            className={`${sty.inputPassword} ${sty.inputBox}`}
            type="password"
            name="password"
            value={this.props.password}
            onChange={this.props.handleChange}
            placeholder="비밀번호"
          ></input>
        </div>
      </>
    );
  }
}
