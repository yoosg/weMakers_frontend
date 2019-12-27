import React, { Component } from 'react'
import sty from './LoginBelowButtons.module.scss'
import { Link } from 'react-router-dom';

export default class LoginBelowButtons extends Component {
  render() {
    return (
      <>
             <div className={sty.infoUser}>
              <Link className={sty.infoUserAnchor} to="/signup">
                회원가입
              </Link>
              <ul className={sty.listUser}>
                <li>
                  <a
                    className={sty.infoUserAnchor}
                    href="https://accounts.kakao.com/weblogin/find_password?continue=https%3A%2F%2Fmakers.kakao.com%2F"
                  >
                    아이디 찾기
                  </a>
                </li>
                <div className={sty.bar}></div>
                <li>
                  <a
                    className={sty.infoUserAnchor}
                    href="https://accounts.kakao.com/weblogin/find_password?continue=https%3A%2F%2Fmakers.kakao.com%2F"
                  >
                    비밀번호 찾기
                  </a>
                </li>
              </ul>
            </div>
      </>
    )
  }
}
