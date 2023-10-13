import React from 'react'
import './commonStyle.scss'

import { SuccessIcon } from '../assets/icons'

const NotiBoxSuccess = ({notiText}) => {
  // notiText = "成功移除收藏 "
  return (
    <div className="notiContainer">
      <div className="notiContent">< SuccessIcon className="successIcon" />{notiText} 😊</div>
    </div>
  )
}

export default NotiBoxSuccess