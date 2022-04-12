import React from 'react';
import Nav from './Nav';
import HomeContainer from './home-container/HomeContainer';

const Home = () => {
  return (
    <div className='bg-blue-500 h-screen'>
      <Nav />
      <HomeContainer />
    </div>
  )
}

export default Home