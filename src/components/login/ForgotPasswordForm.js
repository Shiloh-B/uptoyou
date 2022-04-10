import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ForgotPasswordForm = ({ handlePasswordReset, handleFormChange }) => {

  const navigate = useNavigate();

  return (
    <div className='flex justify-center w-full h-screen my-0 mx-auto bg-blue-400 items-center'>
      <form className='flex flex-col  shadow-lg rounded px-3 py-3 my-5 justify-center bg-slate-100 w-2/5 p-10' onSubmit={handlePasswordReset}>
        <h1 className='text-center text-6xl font-montserrat font-bold'>Up To You</h1>
        <div className='text-center my-3'>
          <h1 className='text-xl my-1'>Reset Your Password</h1>
        </div>
        <div className='flex flex-col my-0 mx-auto w-3/5 mb-2'>
          <label className='' htmlFor='email'>Email</label>
          <input className='shadow appearance-none border rounded leading-tight focus:outline-none focus:shadow-outline w-full p-1' type='text' name='email' required onChange={handleFormChange} />
        </div>
        <div className='flex flex-row justify-center items-center my-1 mx-auto w-4/5'>
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold w-1/5 py-2 px-2 mx-3 rounded' type='submit'>Send Reset</button>
        </div>
        <div className='mt-4'>
          <h1 className='text-sm text-center text-gray-500'>Already a member? <span className='cursor-pointer text-blue-600' onClick={() => navigate('/auth/sign_in')}>Sign in here.</span></h1>
        </div>
      </form>
    </div>
  )
}

export default ForgotPasswordForm