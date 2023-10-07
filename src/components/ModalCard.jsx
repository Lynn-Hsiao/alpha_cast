import React from 'react'
import './commonStyle.scss'

const Card = ({cover, title, author}) => {
  return (
    <div className="card">
      <div className="card-cover">
        <img className="cover-img" src={require("../assets/images/Front1.png")} alt="Cover" />
      </div>
      <div className="card-text">
        <p className="album-title">To kill a mockingbird</p>
        <p className="album-author">Facebook</p>
      </div>
    </div>
  )
}

export default Card