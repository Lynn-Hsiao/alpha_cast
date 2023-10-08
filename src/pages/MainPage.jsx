import React from 'react';
import Card from '../components/Card'
import ListCard from 'components/ListCard';
import ModalS from 'components/ModalS';
import ModalL from 'components/ModalL';

const MainPage = () => {
  return (
    <div>
      <Card />
      <ListCard />
      {/* <ModalS /> */}
      <ModalL />
    </div>
  )
}

export default MainPage