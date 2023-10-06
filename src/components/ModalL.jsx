import React from 'react'
import { CrossIcon, Magnify, LoadingIcon } from 'assets/icons'
import ModalCard from './ModalCard'

const ModalL = () => {
  return (
    <div className='modal-viewport'>
      <div className="l-modal-container">
        <div className="modal-close-btn"><CrossIcon /></div>
        <div className="modal-action-name">新增 Podcast </div>
        <div className="l-modal-line"></div>
        <div className="l-modal-search">
          <Magnify className='l-modal-search-icon'/>
          <input className="l-modal-search-input" type="text" placeholder="開始搜尋..."/>
        </div>
        
        <div className="l-modal-search-output">
          <LoadingIcon className="l-modal-loading"/>
          <div className="l-modal-search-title">搜尋結果</div>
          <div className="l-modal-search-result">
            <ModalCard />
            <ModalCard />
            <ModalCard />

            <ModalCard />
            <ModalCard />
            <ModalCard />

            <ModalCard />
            <ModalCard />
            <ModalCard />

          </div>
        </div>
        <div className="l-modal-footer">
          <div className="l-modal-btns">
            <button className="cancel-btn">取消</button>
            <button className='add-btn'>確認新增</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalL