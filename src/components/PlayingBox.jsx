import React from 'react'
import { PlayCircleFilled, PauseCircleFilled, TimeLength, Bookmark, BookmarkBorder } from 'assets/icons'

const PlayingBox = () => {
  return (
    <div className="playingbox-container">
      <div className="box-tittle">現正播放</div>
      <div className="divider"></div>
      <div className="album-info">
        <img src={require("../assets/images/albumCover.png")} alt="Album-cover" className="album-cover" />
        <div className="album-name">Starting Your Own Podcast: Tips,<br/> Tricks, and Advice From Anchor Creators</div>
      </div>
      <div className="album-info-text">
        <Bookmark className="album-bookmark" />
        <div className="player">Seinabo Sey</div>
        <div className="time-info">2023-04-08・1 小時 20 分</div>
        <div className="album-description">A Spotify podcast sharing fresh insights on important topics of the moment—in a way only Spotify can. You’ll hear from experts in the music, podcast and tech industries as we discover and uncover stories about our work and the world around us.</div>
      </div>
      <div className="play-status">
        <PauseCircleFilled className="pause-btn"/>
        <div className="time-row-nb">00:13:16 / 1:20:00</div>
        < TimeLength className="time-row" />
      </div>

    </div>
  )
}

export default PlayingBox