import React from 'react'

import './Input.scss'

const Input = ({ type, value, placeholder, className }) => {
  return (
     <input 
      type={type} 
      value={value} 
      placeholder={placeholder}
      className={className}
    />
  )
}

export default Input
