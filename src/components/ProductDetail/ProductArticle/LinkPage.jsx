import React, { Component } from "react";
import sty from "./LinkPage.module.scss";
export default class LinkPage extends Component {
  render() {
    const { linkOpen, linkBox } = this.props;
    return (
      <React.Fragment>
        {linkOpen ? (
          <React.Fragment>
            <div className={sty.linkModal} onClick={linkBox} />
            <div className={`${sty.linkPageContainer} ${sty.fadeIn}`}>
              <div className={sty.linkPageBox}>
                <div className={sty.linkUrl}>
                  <ul className={sty.urlList}>
                    <li>
                      <a className={sty.kakaoUrl}>
                        <span></span>
                      </a>
                    </li>
                    <li>
                      <a className={sty.facebookUrl}>
                        <span></span>
                      </a>
                    </li>
                  </ul>
                  <label>URL 공유시, 터치하여 복사하세요.</label>
                  <input value={"localhost:3000/detail"} />
                </div>
                <div></div>
              </div>
            </div>
          </React.Fragment>
        ) : null}
      </React.Fragment>
    );
  }
}
