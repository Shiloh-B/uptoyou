import React, { useContext } from 'react';
import UserContext from '../../context/UserContext';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';

const Nav = () => {

  // hooks
  const auth = getAuth();
  const navigate = useNavigate();
  const [user, setUser] = useContext(UserContext);

  const handleSignOut = () => {
    signOut(auth).then(() => {
      // sign out success
      setUser({
        email: '',
        username: '',
        password: ''
      });
      navigate('/auth/sign_in');
    }).catch((err) => console.log(err));
  }

  return (
    <nav className='flex items-center justify-between flex-wrap bg-blue-500 p-6'>
      <div className='flex items-center flex-shrink-0 text-white mr-6'>
        <Link className='font-bold text-2xl tracking-tight' to='/home'>Up To You!</Link>
      </div>
      <div className='w-full block flex-grow lg:flex lg:items-center lg:w-auto'>
        <Link className='block mt-4 lg:inline-block lg:mt-0 text-blue-200 hover:text-white mr-4 transition-colors' to='/home'>Account</Link>
        <Link className='block mt-4 lg:inline-block lg:mt-0 text-blue-200 hover:text-white mr-4 transition-colors' to='/home'>Friends</Link>
      </div>
      <div>
        <button className='inline-block text-sm px-4 py-2 leading-none rounded border-blue-300 border-2 text-white hover:border-white hover:bg-white hover:text-blue-500 transition-colors' onClick={handleSignOut}>Log Out</button>
      </div>
    </nav>
  )
}

export default Nav