import React, { Component } from 'react';
import sty from './LoginInput.module.scss';
import ReactTooltip from 'react-tooltip';

export default class LoginInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHelpTooltipOn: false, //저함수 원래값을 false로 해놓음
      email: '',
      password: '',
    };
    this.clickHelp = this.clickHelp.bind(this); //바인딩 왜해야하냐면 구글에 쳐봐
    this.closeHelpTooltip = this.closeHelpTooltip.bind(this); //함수마다 해줘야됨
    //this.sendLoginData = this.sendLoginData.bind(this); // 이건 데이터 fetch로 보내는거
  }
  handleChange = e => {
    console.log(e.target.name);
    this.setState({ [e.target.name]: e.target.value });
    console.log('sdf', e.target.name[1], 'q', e.target.name[2], e.target.value);
  };
  clickHelp() {
    this.setState({
      isHelpTooltipOn: !this.state.isHelpTooltipOn,
    });
  }
  //이 함수 만들어서 만약 state값이 있으면 셋스테이트메소드로 스테이트값바꾼다
  closeHelpTooltip() {
    if (this.state.isHelpTooltipOn) {
      this.setState({ isHelpTooltipOn: false });
    }
  }
  render() {
    return (
      <>
        <div className={`${sty.kakaoAcount} ${sty.twoInput}`}>
          <input
            className={`${sty.inputEmail} ${sty.inputBox}`}
            type="text"
            name="email"
            value={this.state.name}
            onChange={this.handleChange}
            placeholder="카카오계정 (이메일 또는 전화번호)"
          />
          <div className={sty.question}>
            <button
              className={sty.emailButton}
              type="button"
              onClick={this.clickHelp}
            ></button>
            {this.state.isHelpTooltipOn && (
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
            type="text"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            placeholder="비밀번호"
          ></input>
        </div>
      </>
    );
  }
}
