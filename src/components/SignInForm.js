import React from 'react';
import { useNavigate } from 'react-router-dom';

const SignInForm = ({ handleSignIn, handleFormChange, errors }) => {

  const navigate = useNavigate();

  const handleViewSwap = () => {
    navigate('/auth/sign_up');
  }

  return (
    <div className='flex justify-center w-2/5 my-0 mx-auto'>
      <form className='flex flex-col bg-white shadow-lg rounded px-3 py-3 my-5 justify-center bg-slate-100 w-full p-10' onSubmit={handleSignIn}>
        <h1 className='text-center text-6xl font-montserrat font-bold'>Up To You</h1>
        <div className='text-center my-3'>
          <h1 className='text-xl my-1'>Login To Your Account</h1>
        </div>
        <div className='flex flex-col my-0 mx-auto w-3/5 mb-2'>
          <label className='' htmlFor='email'>Email</label>
          <input className='shadow appearance-none border rounded leading-tight focus:outline-none focus:shadow-outline w-full p-1' type='text' name='email' onChange={handleFormChange} />
          {errors.emailError !== '' ? <h1 className='text-red-500 text-bold'>{errors.emailError}</h1> : <></>}
        </div>
        <div className='flex flex-col my-0 mx-auto w-3/5 mb-3'>
          <label htmlFor='password'>Password</label>
          <input className='shadow appearance-none border rounded leading-tight focus:outline-none focus:shadow-outline w-full p-1'type='password' name='password' onChange={handleFormChange} />
          {errors.passwordError !== '' ? <h1 className='text-red-500 text-bold'>{errors.passwordError}</h1> : <></>}
        </div>
        <div className='flex flex-row justify-center items-center my-1 mx-auto w-4/5'>
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold w-1/5 py-2 px-2 mx-3 rounded' type='submit'>Sign In</button>
          <h1 className='font-bold mx-3 cursor-pointer text-blue-500'>Forgot Password?</h1>
        </div>
        <div className='mt-4'>
          <h1 className='text-sm text-center text-gray-500'>Not a member? <span className='cursor-pointer text-blue-600' onClick={handleViewSwap}>Sign up here.</span></h1>
        </div>
      </form>
    </div>
  )
}

export default SignInForm