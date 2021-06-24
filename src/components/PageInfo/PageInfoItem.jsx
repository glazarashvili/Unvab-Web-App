import React from 'react'

import './PageInfoItem.scss'

const PageInfoItem = ({ logo, amount, title }) => {
  return (
    <div className='info-item'>
      <section>
        <img src={logo} alt='starlogo' />
      </section>
      <div>
        <p>{amount}</p>
        <p>{title}</p>
      </div>
    </div>
  )
}

export default PageInfoItem
