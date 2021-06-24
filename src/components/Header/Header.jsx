import './Header.scss'
import React from 'react'
import HeaderImage from '../../assets/portfolio/logo-light.svg'

import { NavLink, useLocation } from 'react-router-dom'


const Header = () => {

  const [offset, setOffset] = React.useState(0);
  React.useEffect(() => {
    setTimeout(window.onscroll = () => {
      setOffset(window.pageYOffset)
    })
  }, []);

  let location = useLocation().pathname
  const bgColor = location === '/' && offset === 0 ? 'transparent': 'white'


  return (
    <div className='header' style={{backgroundColor: bgColor}}>
      <NavLink to='/'>
        <img 
          className='snow-logo' 
          src={HeaderImage} 
          alt='header-logo' 
        />
      </NavLink>
      <ul>
        <NavLink activeClassName='navlink-selected' className='navlink' to='/about'>about</NavLink>
        <NavLink activeClassName='navlink-selected' className='navlink' to='/portfolio'>portfolio</NavLink>
        <NavLink activeClassName='navlink-selected' className='navlink' to='/contact'>contact</NavLink>
        <NavLink activeClassName='navlink-selected' className='navlink' to='/blog'>blog</NavLink>
        <NavLink activeClassName='navlink-selected' className='navlink' to='/wordpress-theme'>wordpress theme</NavLink>
      </ul>
    </div>
  )
}

export default Header
