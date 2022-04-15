import React from 'react'

const Button = (props) => {
  return (
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold w-1/5 py-2 px-2 mx-3 rounded mt-3 transition-colors" type={props.type} onClick={props.handleClick}>{props.name}</button>
  )
}

export default Button