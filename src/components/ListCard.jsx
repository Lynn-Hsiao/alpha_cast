import React from 'react'
import {Bookmark, BookmarkBorder, PlayCircleFilled} from '../assets/icons'

const ListCard = () => {
  return (
    <div className="listCard">
      <div className="listCard-cover">
        <img className="listCard-cover-img" src={require("../assets/images/Front2.png")} alt="ListCard-Cover" />
      </div>
      <div className="listCard-text">
        <div className="listCard-album-title">
          <div className="bookmark"><BookmarkBorder /></div>
          Starting Your Own Podcast: Tips, Tricks, and Advice From Anchor Creators
        </div>
        <div className="listCard-album-description">A Spotify podcast sharing fresh insights on important topics of the moment—in a way only Spotify can. You’ll hear from experts in the music, podcast and tech industries as we discover and uncover stories about our work and the world around us.</div>
        <div className="listCard-action">
          < PlayCircleFilled className="listCard-play-btn"/>
          <div className="listCard-info">2023-04-08・1 小時 20 分</div>
        </div>
        
        
      </div>
    </div>
  )
}

export default ListCard