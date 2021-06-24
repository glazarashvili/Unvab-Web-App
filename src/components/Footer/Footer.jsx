import React from 'react'

import igSvg from '../../assets/ig.svg'
import fbSvg from '../../assets/facebook.svg'
import dribbleSvg from '../../assets/dribble.svg'
import twitterSvg from '../../assets/twitter.svg'

import './Footer.scss'

const Footer = () => {
  return (
    <footer>
      <img src={twitterSvg} alt='fb logo' />
      <img src={fbSvg} alt='fb logo' />
      <img src={dribbleSvg} alt='dribble logo' />
      <img src={igSvg} alt='ig logo' />
      <p>2016-2017 © Design by Unvab. Code by nK</p>
    </footer>
  )
}

export default Footer
