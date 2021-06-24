import React from 'react'

import './MainLayout.scss'
import Header from '../Header/Header'
import MainLayoutContent from './MainLayoutContent'

const MainLayout = () => {
  return (
    <div className='main-layout'>
      <Header />
      <MainLayoutContent />
    </div>
  )
}

export default MainLayout
