import React, { useEffect, useState } from 'react';
import ChooseCityForm from './ChooseCityForm';
import ChooseFriendsContainer from './ChooseFriendsContainer';
import Geocode from 'react-geocode';
import apiKey from '../../../secrets/api_key.json';

const HomeContainer = () => {

  // state
  const [nearbyPlaces, setNearbyPlaces] = useState([]);
  const [nextPageToken, setNextPageToken] = useState("")
  const [city, setCity] = useState("");

  const getNearbyPlaces = (e) => {
    e.preventDefault();
    Geocode.setApiKey(apiKey.key);
    Geocode.fromAddress(city).then((res) => {
      let coords = {
        lat: res.results[0].geometry.location.lat,
        lng: res.results[0].geometry.location.lng
      }

      fetch("http://localhost:3000/places/nearby_eats", {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(coords)
      }).then((res) => {
        return res.json();
      }).then((data) => {
        setNearbyPlaces(data.results);
        setNextPageToken(data.next_page_token);
      });

    }).catch(err => console.log(err));
  }

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