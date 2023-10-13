import React from 'react'
import './commonStyle.scss'

import { Logo, MoreVert, AddIcon } from 'assets/icons'



const LeftNavBar = () => {
  let itemName = ['🚌 通勤清單', '📚 學習清單', '💤 睡前清單', '🏘️ 我的 Podcast' , '❤️ 已收藏' ]

  return (
    <div className="navbar-container">
      <Logo className="navbar-logo" />
      <div className="navbar-line"></div>
      <nav className="navbar-item-list">
          {itemName.map((item) => {
            return (
              <div className="item-category">
                <div className="item-name">{item}<MoreVert className="item-actions"/></div>
              
                <div className="item-action-container">
                  <div className="action">編輯名稱</div>
                  <div className="action">刪除分類</div>
                  <div className="action">新增 Podcast</div>
                </div>
              </div>
            )
          })}
        <button className="navbar-add-btn"><AddIcon className="addIcon"/>新增分類</button>
      </nav>
    </div>
  )
}

export default LeftNavBar