import React from 'react'
import './commonStyle.scss'

import { Logo } from 'assets/icons'

const LoginContainer = () => {

  //跳出新視窗至官網登入
  const handleLogin = () => {
    window.open("https://accounts.spotify.com/en/login?creation_point=https%3A%2F%2Fopen.spotify.com%2F%3Fsp_cid%3D7262a0f1-e5df-4d8f-822b-2dcf36279e2e%26device%3Ddesktop&continue=https%3A%2F%2Fopen.spotify.com%2F%3Fflow_ctx%3D68d2f32c-d2d4-4144-9b67-e3999b0179a4%253A1697181843&flow_ctx=68d2f32c-d2d4-4144-9b67-e3999b0179a4%3A1697181843&_gl=1*1edrycu*_gcl_au*NDc1MzEzNjgxLjE2OTYyNjY2Mzk.")
  }

  //跳出新視窗至官網註冊帳號
  const handleRegister = () => {
    window.open("https://www.spotify.com/tw/signup?forward_url=https%3A%2F%2Fopen.spotify.com%2F%3F")
  }

  return (
    <div className="loginContainer">
      <div className="login-text">
        <Logo className='login-logo' />
        <div className="login-word">Connecting Stories That Matter</div>
        <button className="login-btn" onClick={handleLogin}>使用 SPOTIFY 帳號登入</button>
        <div className="register-field">
          <div className="register-text">沒有帳號嗎？</div>
          <button className="register-btn" onClick={handleRegister}>註冊帳號</button>
        </div>
      </div>
      <div className="login-footer">Copyright 2023</div>
    </div>
  )
}

export default LoginContainer