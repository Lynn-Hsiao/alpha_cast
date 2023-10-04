import React from 'react'

const Card = ({cover, title, author}) => {
  return (
    <div className='card-container'>
      <div className="card">
        <div className="card-cover">
          <img className="cover-img" src={require("../assets/images/Front1.png")} alt="Cover" />
        </div>
        <div className="card-text">
          <p className="album-title">To kill a mockingbird</p>
          <p className="album-author">Facebook</p>
          <p className="more-btn">更多</p>
        </div>
      </div>
    </div>
  )
}

export default Card