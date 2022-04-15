import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useParams } from 'react-router-dom';
import Place from './Place';
import Nav from '../Nav';

const PlacesContainer = ({ nearbyPlaces }) => {

  const [currentPlaceObj, setCurrentPlaceObj] = useState(nearbyPlaces[0]);
  const [currentPlaceIndex, setCurrentPlaceIndex] = useState(0);


  const navigate = useNavigate();
  
  useEffect(() => {
    if (nearbyPlaces.length === 0) navigate('/home/landing');
    setCurrentPlaceObj(nearbyPlaces[currentPlaceIndex]);
  }, [currentPlaceIndex]);

  const nextPlaceHandler = (e) => {
    if(!nearbyPlaces[currentPlaceIndex + 1]) {
      setCurrentPlaceIndex(0);
      setCurrentPlaceObj(nearbyPlaces[0]);
    } else {
      setCurrentPlaceIndex(currentPlaceIndex + 1);
    }
  }

  return (
    <div className='bg-blue-500 h-screen flex flex-col flex-auto'>
      <Nav />
      <div className='flex flex-auto justify-center items-center p-5'>
        <div className='flex flex-row items-center w-10/12 bg-slate-100 my-5 mx-auto rounded p-5 h-full'>
          {
            nearbyPlaces.length === 0 ?
            <></> :
            <Place place={currentPlaceObj} nextPlaceHandler={nextPlaceHandler} />
          }
        </div>
      </div>
    </div>
    
  )
}

export default PlacesContainer