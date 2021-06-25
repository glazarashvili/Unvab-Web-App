import React from 'react'

import './Footer.scss'

import igSvg from '../../assets/ig.svg'
import fbSvg from '../../assets/facebook.svg'
import dribbleSvg from '../../assets/dribble.svg'
import twitterSvg from '../../assets/twitter.svg'


const Footer = () => {
  return (
    <footer className='footer-container'>
      <div>
        <img src={twitterSvg} alt='fb logo' />
        <img src={fbSvg} alt='fb logo' />
        <img src={dribbleSvg} alt='dribble logo' />
        <img src={igSvg} alt='ig logo' />
      </div>
      <p>2016-2017 © Design by Unvab. Code by nK</p>
    </footer>
  )
}

export default Footer
