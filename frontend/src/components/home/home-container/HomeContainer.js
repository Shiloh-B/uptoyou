import React from 'react';
import ChooseCityForm from './ChooseCityForm';
import ChooseFriendsContainer from './ChooseFriendsContainer';
import placesKey from '../../../secrets/places-key.json';

const HomeContainer = () => {

  const getNearbyPlaces = (e) => {
    e.preventDefault();
    fetch(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522%2C151.1957362&radius=50000&type=restaurant&key=${placesKey.key}`, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((res) => {
      console.log(res);
      console.log(res.data);
      return res.json();
    }).then((json) => {
      console.log(json);
    }).catch((err) => console.log(err));
  }

  return (
    <div className='flex flex-col w-10/12 bg-slate-50 my-5 mx-auto text-white rounded'>
      <div className=' my-3 mx-auto'>
        <h1 className='text-4xl font-montserrat font-bold text-blue-500'>Lets Eat!</h1>
      </div>
      <ChooseCityForm getNearbyPlaces={getNearbyPlaces} />
      <ChooseFriendsContainer />
    </div>
  )
}

export default HomeContainer