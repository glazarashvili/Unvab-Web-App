import './Header.scss'
import HeaderImage from '../../assets/portfolio/logo-light.svg'

import { Link } from 'react-router-dom'


const Header = () => (
    <div className='header'>
      <div>
        <img 
          className='snow-logo' 
          src={HeaderImage} 
          alt='header-logo' 
        />
      </div>
      <ul>
        <Link to='/about'><li>about</li></Link>
        <Link to='/portfolio'><li>portfolio</li></Link>
        <Link to='/contact'><li>contact</li></Link>
        <Link to='/blog'><li>blog</li></Link>
        <Link to='/about'><li>wordpress theme</li></Link>
      </ul>
    </div>
)

export default Header
