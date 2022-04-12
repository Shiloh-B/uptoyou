import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const RouteNotFound = () => {

  const navigate = useNavigate();

  useEffect(() => {
    navigate('/auth/sign_in');
  })

  return (
    <div>
      <h1>404 Page Not Found.</h1>
      <button className='bg-blue-500' onClick={() => navigate('/sign_in')}>Home</button>
    </div>
  )
}

export default RouteNotFound