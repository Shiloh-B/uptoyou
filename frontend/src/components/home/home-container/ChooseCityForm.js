import React from 'react'

const ChooseCityForm = ({ getNearbyPlaces, setCity }) => {
  return (
    <div className='my-5 mx-auto'>
      <form onSubmit={(e) => getNearbyPlaces(e)}>
        <h1 className='text-2xl text-center text-blue-500 font-bold'>Choose Your City</h1>
        <div className='flex items-center justify-center mt-3'>
          <input className='shadow appearance-none border rounded leading-tight focus:outline-none focus:shadow-outline w-full p-1 text-black' type='text' name='city' onChange={(e) => setCity(e.target.value)}/>
          <button type='submit' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 mx-3 rounded transition-colors'>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default ChooseCityForm