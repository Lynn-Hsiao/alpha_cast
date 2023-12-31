import React from 'react'
import './commonStyle.scss'

import  {useState } from 'react'
import { ArrowLeft, ArrowRight } from 'assets/icons'
import { Background1, Background2, Background3 } from 'assets/images'

const Slide1 = () => {
  return (
    <>
      <Background1 className="loginSlide-background"/>
      <div className="loginSlide-cover">
        <img className="shadow-cover" src={require("../assets/images/Front1.png")} alt="Slide-cover1" />
        <img className="main-cover" src={require("../assets/images/Front1.png")} alt="Slide-cover1" />
      </div>
      <div className="loginSlide-text">
        <div className="slide-tittle">鼓舞人心的故事</div>
        <div className="slide-words">從非凡的人生故事和成功經歷中獲得靈感</div>
      </div>
    </>
  )
}

const Slide2 = () => {
  return (
    <>
      <Background2 className="loginSlide-background"/>
      <div className="loginSlide-cover">
        <img className="shadow-cover" src={require("../assets/images/Front2.png")} alt="Slide-cover2" />
        <img className="main-cover" src={require("../assets/images/Front2.png")} alt="Slide-cover2" />
      </div>
      <div className="loginSlide-text">
        <div className="slide-tittle">輕鬆分類與管理</div>
        <div className="slide-words">一目了然的分類，讓收藏的 Podcast 保持整潔</div>
      </div>
    </>
  )
}

const Slide3 = () => {
  return (
    <>
      <Background3 className="loginSlide-background"/>
      <div className="loginSlide-cover">
        <img className="shadow-cover" src={require("../assets/images/Front3.png")} alt="Slide-cover3" />
        <img className="main-cover" src={require("../assets/images/Front3.png")} alt="Slide-cover3" />
      </div>
      <div className="loginSlide-text">
        <div className="slide-tittle">Spotify 快速同步</div>
        <div className="slide-words">透過 Spotify 登入，即刻同步您的收藏，隨時隨地收聽 </div>
      </div>
    </>
  )
}




const LoginSlide = () => {
  const [currentSlide, setcurrentSlide] = useState(1)

  return (
    <div className="loginSlideContainer">
      {currentSlide === 1 ? <Slide1/> : <></>}
      {currentSlide === 2 ? <Slide2/> : <></>}
      {currentSlide === 3 ? <Slide3/> : <></>}
      <div className="loginSlide-controller">
        <div className="arrow-btn">
          <ArrowLeft className="arrow-left-btn" />
          <ArrowRight className="arrow-right-btn" />
        </div>
        <div className="slideCounter">
          <button className={currentSlide === 1 ? "slideCounter-btn-active": "slideCounter-btn"}></button>
          <button className={currentSlide === 2 ? "slideCounter-btn-active": "slideCounter-btn"}></button>
          <button className={currentSlide === 3 ? "slideCounter-btn-active": "slideCounter-btn"}></button>
        </div>
      </div>
    </div>
  )
}

export default LoginSlide