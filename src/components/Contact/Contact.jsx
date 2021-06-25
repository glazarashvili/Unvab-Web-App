import React from 'react'

import ContactInfo from './ContactInfo'
import ContactForm from './ContactForm'

import './Contact.scss'

const Contact = ({ marginTop }) => {
  return (
    <div className='contact-container' style={{marginTop: marginTop}}>
      <ContactInfo />
      <ContactForm />
    </div>
  )
}

export default Contact
