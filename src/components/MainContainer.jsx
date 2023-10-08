import React from 'react'
import './commonStyle.scss'

const MainContainer = ({children}) => {
  return (
    <div className="mainContainer">{children}</div>
  )
}

export default MainContainer