import React, { Component } from 'react';
import sty from './Login.module.scss';
import LoginFooter from '../loginFooter/LoginFooter';
import LoginButton from './LoginButton';
import LoginSet from './LoginSet';
import LoginBelowButtons from './LoginBelowButtons';
import LoginValidation from './LoginValidation';
import LoginInput from './LoginInput';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHelpTooltipOn: false, //저함수 원래값을 false로 해놓음
      email: '',
      password: '',
      isValidate: false,
    };
  }

  sendLoginData = e => {
    e.preventDefault();
    console.log('test');
    console.log(e.target.name);
    console.log(e.target.value);
    console.log(e.target);
    //if(isValidate가 맞으면 박스없이 로그인 서버와 연결해줘야됨)
    // 만약 이메일형식이
    //   fetch('',{
    //     method: 'GET',
    //     body: JSON.stringify({
    //     email: this.state.email,
    //     password: this.state.password
    //   }),
    // })
    // .then(res => res.json())
    //   .then(res => {
    //     alert(res.access_token);

    //     localStorage.setItem('auth_token', res.access_token);
    //   });
  };

  render() {
    return (
      <>
        <div className={sty.kakaoWrap} onClick={this.closeHelpTooltip}>
          <div className={sty.container}>
            <h1>
              <span className={sty.kakao}></span>
            </h1>
            <form className={sty.loginForm} onSubmit={this.sendLoginData}>
              <fieldset className={sty.fieldset}>
                <LoginInput />
                <LoginSet />
                {this.state.isValidate ? <LoginValidation /> : null}
                <LoginButton />
              </fieldset>
            </form>
            <LoginBelowButtons />
          </div>
          <LoginFooter />
        </div>
      </>
    );
  }
}
export default Login;

{
  /* <div className={sty.errorAlert}>
  <p className={sty.error}>
이메일형식 또는 비밀번호가 올바르지 않습니다.
  </p>
</div> */
}
