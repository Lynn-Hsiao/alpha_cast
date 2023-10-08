import React from 'react'
import '../components/commonStyle.scss'
import NotiBoxSuccess from '../components/NotiBoxSuccess'
import NotiBoxFail from '../components/NotiBoxFail'
import NotiBoxInfo from '../components/NotiBoxInfo'
import MainContainer from 'components/MainContainer'
import LoginContainer from 'components/LoginContainer'
import LoginSlide from 'components/LoginSlide'
 
const LoginPage = () => {
  return (
    <div>
      <MainContainer>
        <LoginContainer />
        <LoginSlide />
      </MainContainer>
    </div>
  )
}

export default LoginPage