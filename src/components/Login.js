import React, { useContext } from 'react';
import UserContext from '../context/UserContext';

const Login = () => {

  const [user, setUser] = useContext(UserContext);

  const handleSignIn = (e) => {
    e.preventDefault();
  }

  const handleFormChange = (e) => {
    let newUser = {...user};

    newUser[e.target.name] = e.target.value;

    setUser(newUser);
  }

  return (
    <div className='flex flex-col font-sans w-2/5 my-0 mx-auto'>
      <h1 className='text-center text-6xl m-3'>Up To You</h1>
      <form className='flex flex-col bg-white shadow-md rounded px-3 py-3 my-5' onSubmit={handleSignIn}>
        <div className='flex flex-col my-0 mx-auto w-3/5 mb-2'>
          <label className='' htmlFor='username'>Username</label>
          <input className='shadow appearance-none border rounded leading-tight focus:outline-none focus:shadow-outline w-full' type='text' name='username' onChange={handleFormChange} />
        </div>
        <div className='flex flex-col my-0 mx-auto w-3/5 mb-3'>
          <label htmlFor='password'>Password</label>
          <input className='shadow appearance-none border rounded leading-tight focus:outline-none focus:shadow-outline w-full'type='password' name='password' onChange={handleFormChange} />
        </div>
        <div className='flex flex-row justify-center items-center my-0 mx-auto w-4/5'>
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold w-1/5 py-2 px-2 mx-3 rounded' type='submit'>Sign In</button>
          <a className='font-bold mx-3 cursor-pointer'><h1 className='text-blue-600'>Forgot Password?</h1></a>
        </div>
        
      </form>
    </div>
  )
}

export default Login