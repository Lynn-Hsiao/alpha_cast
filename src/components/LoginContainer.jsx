import React from 'react'
import './commonStyle.scss'

import { Logo } from 'assets/icons'

const LoginContainer = () => {
  return (
    <div className="loginContainer">
      <div className="login-text">
        <Logo className='login-logo' />
        <div className="login-word">Connecting Stories That Matter</div>
        <button className="login-btn">使用 SPOTIFY 帳號登入</button>
        <div className="register-field">
          <div className="register-text">沒有帳號嗎？</div>
          <button className="register-btn">註冊帳號</button>
        </div>
      </div>
      <div className="login-footer">Copyright 2023</div>
    </div>
  )
}

export default LoginContainer