import React, { Component } from "react";
import sty from "./Login.module.scss";
import LoginFooter from "../loginFooter/LoginFooter";
import LoginButton from "./LoginButton";
import LoginSet from "./LoginSet";
import LoginBelowButtons from "./LoginBelowButtons";
import LoginValidation from "./LoginValidation";
import LoginInput from "./LoginInput";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHelpTooltipOn: false, //저함수 원래값을 false로 해놓음
      email: "",
      password: "",
      isValidate: false
    };
    this.clickHelp = this.clickHelp.bind(this);
    this.closeHelpTooltip = this.closeHelpTooltip.bind(this); //함수마다 해줘야됨
    this.checkValidation = this.checkValidation.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange = e => {
    //console.log(e.target.name.password);
    this.setState({ [e.target.name]: e.target.value });
    //console.log('1', e.target.name, '2', e.target.name.email, e.target.value);
  };

  clickHelp() {
    this.setState({
      isHelpTooltipOn: !this.state.isHelpTooltipOn
    });
  }

  closeHelpTooltip(e) {
    if (e.target.name !== "tooltip") {
      this.setState({
        isHelpTooltipOn: false
      });
    }
  }

  checkValidation() {
    if (
      this.state.email === "" ||
      !/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i.test(
        this.state.email
      ) ||
      this.state.password === "" ||
      !/^[a-zA-Z0-9]{8,32}$/.test(this.state.password)
    ) {
      this.setState({ isValidate: true });
    } else {
      this.setState({ isValidate: false }, () => {
        this.sendLoginData();
      });
    }
  }
  //서버 api
  sendLoginData = () => {
    console.log("fetch지금되고있음");
    fetch("http://10.58.7.150:8001/user/auth", {
      method: "POST",
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      })
    })
      .then(res => res.json())
      .then(res => {
        console.log("res", res);
        alert(res.access_token);
        localStorage.setItem("auth_token", res.access_token);
      });
  };

  render() {
    return (
      <div className={sty.kakaoWrap} onClick={this.closeHelpTooltip}>
        <div className={sty.container}>
          <h1>
            <span className={sty.kakao}></span>
          </h1>
          <div className={sty.loginForm}>
            <fieldset className={sty.fieldset}>
              <LoginInput
                email={this.state.email}
                password={this.state.password}
                isHelpTooltipOn={this.state.isHelpTooltipOn}
                handleChange={this.handleChange}
                clickHelp={this.clickHelp}
              />
              <LoginSet />
              {this.state.isValidate && <LoginValidation />}
              <LoginButton checkValidation={this.checkValidation} />
            </fieldset>
          </div>
          <LoginBelowButtons />
        </div>
        <LoginFooter />
      </div>
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
