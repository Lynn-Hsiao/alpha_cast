import React from 'react'
import { ArrowDown } from 'assets/icons'
import { UserAvatar } from 'assets/images'

const UserInfo = () => {
  return (
    <div className="user-info">
      <UserAvatar className="user-avatar" />
      <div className="username">John Doe</div>
      <ArrowDown className="user-more-btn" />
    </div>
  )
}

export default UserInfo