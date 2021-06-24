import './Header.scss'
import HeaderImage from '../../assets/portfolio/logo-light.svg'

import { NavLink, useLocation } from 'react-router-dom'


const Header = () => {
  let location = useLocation().pathname
  const bgColor = location === '/' ? 'transparent' : 'black'


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
