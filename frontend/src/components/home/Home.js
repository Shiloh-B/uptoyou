import React, { useState } from 'react';
import Nav from './Nav';
import HomeContainer from './home-container/HomeContainer';
import PlacesContainer from './places-container/PlacesContainer';
import Geocode from 'react-geocode';
import apiKey from '../../secrets/api_key.json';

const Home = () => {

  
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
    <div className='bg-blue-500 h-screen'>
      <Nav />
      <HomeContainer setCity={setCity} getNearbyPlaces={getNearbyPlaces} nearbyPlaces={nearbyPlaces} />
      <PlacesContainer nearbyPlaces={nearbyPlaces}/>
    </div>
  )
}

export default Home