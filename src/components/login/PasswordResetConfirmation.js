import React from 'react';
import { useNavigate } from 'react-router-dom';

const PasswordResetConfirmation = () => {

  const navigate = useNavigate();

  return (
    <div className='flex justify-center w-full h-screen my-0 mx-auto bg-blue-400 items-center'>
      <div className='flex flex-col  shadow-lg rounded px-3 py-3 my-5 justify-center items-center bg-slate-100 w-2/5 p-10'>
        <h1 className='text-4xl my-2'>Password Reset Sent!</h1>
        <h1 className='text-lg mb-2'>Check your email for a password reset link.</h1>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold w-1/5 py-2 px-2 mx-3 rounded mt-3' onClick={() => navigate('/auth/sign_in')}>Sign In</button>
      </div>
    </div>
  )
}

export default PasswordResetConfirmation