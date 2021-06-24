import React from 'react'

const Wrapper = ({ children }) => {
  return (
    <div style={{display: 'flex', flexShrink: '1', justifyContent: 'center', alignItems: 'center'}}>{children}</div>
  )
}

export default Wrapper
