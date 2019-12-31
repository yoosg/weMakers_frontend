import React, { Component } from 'react';
import sty from './LoginValidation.module.scss';

export default function LoginValidation() {
  return (
    <div className={sty.validationBox}>
      <p className={sty.validationPBox}>
        이메일 또는 비밀번호가 올바르지 않습니다.
      </p>
    </div>
  );
}
