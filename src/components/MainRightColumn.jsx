import React from 'react'
import UserInfo from 'components/UserInfo';
import GreetingBox from 'components/GreetingBox';
import PlayingBox from './PlayingBox';
import Card from './Card';
import ListCard from './ListCard';

const  MainRightColumn = ({children}) => {
  return (
    <div className="mainRightContainer">
      <GreetingBox />
      <UserInfo />
      <PlayingBox />
      <div className="mainContent">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>   
      {children}
    </div>
  )
}

export default MainRightColumn