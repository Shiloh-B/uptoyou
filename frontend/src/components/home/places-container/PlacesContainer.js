import React from 'react';
import Place from './Place';

const PlacesContainer = ({ nearbyPlaces }) => {

  let placeList = nearbyPlaces.map(place => <Place place={place} key={place.reference} />);
  return (
    <div className='flex flex-row items-center w-10/12 bg-slate-50 my-5 mx-auto rounded p-5 overflow-x-scroll'>
      {
        placeList
      }
    </div>
  )
}

export default PlacesContainer