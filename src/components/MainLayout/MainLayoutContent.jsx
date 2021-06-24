import React from 'react'

import './MainLayoutContent.scss'
import Button from '../../UI/Button/Button'

const MainLayoutContent = () => {
  return (
    <React.Fragment>
      <div className='main-layout-content'>
        <h3>new branding agency</h3>
        <p>We are about to change the way</p>
        <span>you publish on the web</span>
        <Button title='free download' />
      </div>
    </React.Fragment>
  )
}

export default MainLayoutContent

