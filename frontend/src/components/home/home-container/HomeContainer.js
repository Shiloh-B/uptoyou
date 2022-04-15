import React from 'react';
import ChooseCityForm from './ChooseCityForm';
import ChooseFriendsContainer from './ChooseFriendsContainer';
import Nav from '../Nav';

const HomeContainer = ({ setCity, getNearbyPlaces }) => {

  return (
    <div className='bg-blue-500 h-screen flex flex-col flex-auto'>
      <Nav />
      <div className='flex flex-auto justify-center items-center'>
        <div className='flex flex-col w-10/12 bg-slate-50 my-5 mx-auto text-white rounded h-4/5'>
          <div className=' my-3 mx-auto'>
            <h1 className='text-4xl font-montserrat font-bold text-blue-500'>Lets Eat!</h1>
          </div>
          <ChooseCityForm getNearbyPlaces={getNearbyPlaces} setCity={setCity}/>
          <ChooseFriendsContainer />
        </div>
      </div>
    </div>
    
  )
}

export default HomeContainer