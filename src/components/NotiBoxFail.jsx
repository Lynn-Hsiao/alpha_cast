import React from 'react'
import './commonStyle.scss'
import { FailIcon } from '../assets/icons'

const NotiBoxFail = ({notiText}) => {
  // notiText = "加入收藏失敗"
  return (
    <div className="notiContainer">
      <div className="notiContent">< FailIcon className="failIcon" />{notiText} 😢</div>
    </div>
  )
}

export default NotiBoxFail