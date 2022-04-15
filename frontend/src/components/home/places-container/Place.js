import React, { useEffect, useState } from 'react';
import PrimaryButton from '../../utility/PrimaryButton';
import DangerButton from '../../utility/DangerButton';
import { useNavigate } from 'react-router-dom'

const Place = ({ place, nextPlaceHandler }) => {

  const [photo, setPhoto] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    
    if(place.photos?.[0]) {

      let reqBody = JSON.stringify({photo_url: place.photos?.[0].photo_reference});

      fetch("http://localhost:3000/places/eats_photo", {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: reqBody
      }).then((res) => {
        return res.json();
      }).then((data) => {
        setPhoto(data);
      }).catch(err => console.log(err));
    }
  }, [place]);

  if(place.business_status === "OPERATIONAL") {
    return (
      <div className='flex flex-col mx-auto rounded text-blue-500 p-5'>
        <div className=''>
          <h1 className='text-3xl text-center font-bold'>{place.name}</h1>
        </div>
        <div>
          <img src={photo} className='rounded my-5 mx-auto shadow-outline shadow-md' />
        </div>
        <div className='my-1 mx-auto w-full text-center'>
          <PrimaryButton name={'Yay'} handleClick={nextPlaceHandler} />
          <DangerButton name={'Nay'} handleClick={nextPlaceHandler} />
        </div>
        <div className='my-1 mx-auto text-center w-full'>
          <PrimaryButton name={'Home'} handleClick={() => navigate('/home/landing')} />
        </div>
      </div>
    )
  } else {
    return <></>
  }
  
}

export default Place