import React from 'react'
import './commonStyle.scss'
import { InfoIcon } from '../assets/icons'

const NotiBoxInfo = ({notiText}) => {
  // notiText = "發生未知錯誤"
  return (
    <div className="notiContainer">
      <div className="notiContent">< InfoIcon className="infoIcon" />{notiText} 🤔</div>
    </div>
  )
}

export default NotiBoxInfo