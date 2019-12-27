import React, { Component } from 'react';
import sty from './LoginFooter.module.scss';

export default class LoginFooter extends Component {
  /*constructor(
   state()
  )
  */

  render() {
    return (
      <>
        <div className={sty.loginFooter}>
          <div className={sty.footerInfo}>
            <a href="https://www.kakao.com/policy/terms" className={sty.link_info}>
              이용약관
            </a>
            <span className={sty.space}></span>
            <a
              href="https://www.kakao.com/policy/privacy"
              className={`${sty.link_info} ${sty.link_policy}`}
            >
              개인정보 처리방침
            </a>
            <span className={sty.space}></span>
            <a href="https://www.kakao.com/policy/oppolicy" className={sty.link_info}>
              운영정책
            </a>
            <span className={sty.space}></span>
            <a href="https://cs.kakao.com/" className={sty.link_info}>
              고객센터
            </a>
            <span className={sty.space}></span>
            <a href="https://www.kakao.com/notices" className={sty.link_info}>
              공지사항
            </a>
            <span className={sty.space}></span>
          </div>
          <div className={sty.footerCopyright}>
            <small className={sty.txt_copyright}>
              Copyright ©{' '}
              <a href="https://www.kakaocorp.com/" className={sty.link_kakao}>
                Kakao Corp.
              </a>
              All rights reserved.
            </small>
          </div>
        </div>
      </>
    );
  }
}
