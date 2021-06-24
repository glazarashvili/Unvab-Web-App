import React from 'react'

import ContactInfo from './ContactInfo'
import ContactForm from './ContactForm'

import './Contact.scss'

const Contact = () => {
  return (
    <div className='contact-container'>
      <ContactInfo />
      <ContactForm />
    </div>
  )
}

export default Contact
