import React from 'react'

import './PageInfo.scss'

import PageInfoItem from './PageInfoItem'

import starLogo from '../../assets/svgs/starLogo.svg'
import workLogo from '../../assets/svgs/workLogo.svg'
import heartLogo from '../../assets/svgs/heartLogo.svg'
import scheduleLogo from '../../assets/svgs/schedule.svg'

const userInfo = [
  {id: 1, amount: 548, title: 'projects completed', logo: workLogo},
  {id: 2, amount: 1468, title: 'working hours', logo: scheduleLogo},
  {id: 3, amount: 602, title: 'positive feedbacks', logo: starLogo},
  {id: 4, amount: 735, title: 'happy clients', logo: heartLogo},
]

const PageInfo = () => {
  return (
    <div className='user-info-container'>
      {userInfo.map(elem => (
        <PageInfoItem 
          key={elem.id}
          logo={elem.logo} 
          amount={elem.amount} 
          title={elem.title} 
        />
      ))}
    </div>
  )
}

export default PageInfo
