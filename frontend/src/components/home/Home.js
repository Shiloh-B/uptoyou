import React, { useState } from 'react';
import HomeContainer from './home-container/HomeContainer';
import PlacesContainer from './places-container/PlacesContainer';
import Geocode from 'react-geocode';
import apiKey from '../../secrets/api_key.json';
import { Routes, Route, useNavigate } from 'react-router-dom';
import RouteNotFound from '../RouteNotFound';

const Home = () => {

  
  const [nearbyPlaces, setNearbyPlaces] = useState([]);
  const [nextPageToken, setNextPageToken] = useState("")
  const [city, setCity] = useState("");

  const navigate = useNavigate();

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

        // remove all gas stations GROSS
        let results = data.results.filter(place => !place.types.includes("gas_station"));

        setNearbyPlaces(results);
        setNextPageToken(data.next_page_token);
        navigate('/home/eats');
      });

    }).catch(err => console.log(err));
  }

  return (
        <Routes>
          <Route path={'/landing'} element={<HomeContainer setCity={setCity} getNearbyPlaces={getNearbyPlaces} nearbyPlaces={nearbyPlaces} /> } />
          <Route path={'/eats'} element={<PlacesContainer nearbyPlaces={nearbyPlaces}/>} />
          <Route path={'*'} element={<RouteNotFound />} />
        </Routes>
  )
}

export default Home