import React, { useEffect, useState } from 'react'

const Place = ({ place }) => {

  const [photo, setPhoto] = useState("");

  useEffect(() => {
    if(place.photos?.[0]) {
      console.log(place.photos[0]);

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
  }, []);

  if(place.business_status === "OPERATIONAL" && !place.types.includes("gas_station")) {
    return (
      <div className='flex flex-col mx-3 bg-blue-500 rounded text-white p-5'>
        <div className=''>
          <h1 className='text-md text-center'>{place.name}</h1>
        </div>
        <div>
          <img src={photo} />
        </div>
      </div>
    )
  } else {
    return <></>
  }
  
}

export default Place