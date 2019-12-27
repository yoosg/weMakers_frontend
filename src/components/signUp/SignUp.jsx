import React, { Component } from 'react';
//import ReactTooltip from 'react-tooltip';
import sty from './SignUp.module.scss';
import LoginFooter from '../loginFooter/LoginFooter';

export default class SignUp extends Component {
  render() {
    return (
      <>
        <div className={sty.container}>
          <div className={sty.kakao}></div>
          <div className={sty.kakaoWrap}>
            <div className={sty.kakaoContent}>
              <div className={sty.info}>카카오계정 정보를 입력해주세요</div>
              <fieldset className={sty.emailFieldset}>
                <div className={`${sty.emailHeader} ${sty.header}`}>
                  <p>카카오계정 이메일</p>
                </div>
                <div className={sty.emailInputWrap}>
                  <label>
                    <input
                      className={`${sty.emailInput} ${sty.inputs}`}
                      type="text"
                      name="email"
                      placeholder="이메일 주소 입력"
                    ></input>
                     <button
                      className={sty.emailButton}
                      type="button"
                      //onClick={this.clickHelp}
                    ></button>
                  </label>
                </div>
              </fieldset>
              <fieldset className={sty.passwordFieldset}>
                <div className={`${sty.passwordHeader} ${sty.header}`}>
                  <p>비밀번호</p>
                  <div className={sty.passwordInputWrap}>
                    <label>
                      <input
                        className={`${sty.passwordInput} ${sty.inputs}`}
                        type="text"
                        name="password"
                        placeholder="비밀번호(8~32자리)"
                      ></input>
                    </label>
                  </div>
                  <div className={sty.passwordAgainInputWrap}>
                    <label>
                      <input
                        className={`${sty.passwordAgainInput} ${sty.inputs}`}
                        type="text"
                        name="passwordAgain"
                        placeholder="비밀번호 재입력"
                      ></input>
                    </label>
                  </div>
                </div>
                <div className={`${sty.nicknameHeader} ${sty.header}`}>
                  <p>닉네임</p>
                </div>
                <label>
                  <input
                    className={`${sty.nicknameInput} ${sty.inputs}`}
                    type="text"
                    name="nickname"
                    placeholder="닉네임을 입력해주세요"
                  ></input>
                </label>
              </fieldset>

              <div className={sty.nextButtonDiv}>
                <button
                  className={sty.nextButton}
                  //onClick={this.sendLoginData}
                >
                  다음
                </button>
              </div>
            </div>
          </div>
        </div>
      <LoginFooter/>
      </>
    );
  }
}
