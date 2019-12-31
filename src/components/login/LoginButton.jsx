import React, { Component } from 'react';
import sty from './LoginButton.module.scss';

export default class LoginButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={sty.loginButtonDiv}>
        <button
          className={sty.loginButton}
          onClick={this.props.checkValidation}
        >
          로그인
        </button>
      </div>
    );
  }
}
