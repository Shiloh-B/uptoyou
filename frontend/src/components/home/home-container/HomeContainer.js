import React, { useState } from 'react';
import ChooseCityForm from './ChooseCityForm';
import ChooseFriendsContainer from './ChooseFriendsContainer';
import PlacesContainer from '../places-container/PlacesContainer';
import Geocode from 'react-geocode';
import apiKey from '../../../secrets/api_key.json';

const HomeContainer = ({ setCity, getNearbyPlaces, nearbyPlaces }) => {

  return (
    <div className='flex flex-col w-10/12 bg-slate-50 my-5 mx-auto text-white rounded'>
      <div className=' my-3 mx-auto'>
        <h1 className='text-4xl font-montserrat font-bold text-blue-500'>Lets Eat!</h1>
      </div>
      <ChooseCityForm getNearbyPlaces={getNearbyPlaces} setCity={setCity}/>
      <ChooseFriendsContainer />
    </div>
  )
}

export default HomeContainer