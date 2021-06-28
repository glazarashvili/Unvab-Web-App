import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'

import './Header.scss'

import HeaderImage from '../../assets/images/svgs/logo-light.svg'


const Header = () => {
  const [offset, setOffset] = React.useState(0);
  React.useEffect(() => {
    setTimeout(window.onscroll = () => {
      setOffset(window.pageYOffset)
    })
  }, []);

  let location = useLocation().pathname
  const bgColor = location === '/' && offset === 0 ? 'transparent': 'black'


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
        <a 
          className='navlink' 
          target='_blank' 
          rel='noreferrer' 
          href='https://themeforest.net/item/snow-minimal-clean-wordpress-portfolio-theme/19347252?ref=unvab'>
           wordpress theme
        </a>
      </ul>
    </div>
  )
}

export default Header
