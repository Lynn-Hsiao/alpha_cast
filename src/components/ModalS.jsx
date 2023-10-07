import React from 'react'
import './commonStyle.scss'
import { CrossIcon } from 'assets/icons'

const ModalS = () => {
  return (
    <div className='modal-viewport'>
      <div className="s-modal-container">
        <div className="modal-close-btn"><CrossIcon /></div>
        
        <div className="modal-action-name">刪除分類</div>
        <div className="s-modal-line"></div>
        <div className="reconfirm-text">您確定要繼續刪除 <span className='highlight-category' >🚌  通勤清單 </span> 分類嗎？</div>
        <input type="text" placeholder="請輸入分類名稱" className="s-modal-input"  />
        <div className="s-modal-btns">
          <button className="cancel-btn">取消</button>
          <button className='save-btn'>儲存</button>
        </div>
      </div>
    </div>
  )
}

export default ModalS