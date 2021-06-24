import React from 'react'

import './Project.scss'

const Project = ({ url, title, category }) => {
  return (
      <div className='project-item'>
        <img src={url} alt='project-pic' />   
        <div className='background'>
            <h3>{title}</h3>
            <h4>{category}</h4>
        </div>
      </div>
  )
}

export default Project
