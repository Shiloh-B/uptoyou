import React from 'react'

const ChooseFriendsContainer = () => {
  return (
    <div className='flex flex-col text-blue-500 mt-5 mb-3 mx-auto w-4/5'>
      <h1 className='text-2xl font-bold text-center mb-5'>Who are you Eating With?</h1>
      <div className='w-full flex flex-col'>
        <label htmlFor='friend-search' className='ml-5'>Search Friends</label>
        <input className='shadow appearance-none border rounded leading-tight focus:outline-none focus:shadow-outline w-3/12 p-1 ml-5 text-black' name='friend-search' />
      </div>
    </div>
  )
}

export default ChooseFriendsContainer