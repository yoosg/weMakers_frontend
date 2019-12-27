import React, { Component } from 'react'
import sty from './LoginButton.module.scss'

export default class LoginButton extends Component {
  render() {
    return (
      <>
        <div className={sty.loginButtonDiv}>
                  <button
                    className={sty.loginButton}
                    type="submit"
                  >
                    로그인
                  </button>
                </div>
      </>
    )
  }
}
