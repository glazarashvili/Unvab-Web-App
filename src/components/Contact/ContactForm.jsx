import React from 'react'

import Input from '../../UI/Input/Input'
import Button from '../../UI/Button/Button'
import TextArea from '../../UI/TextArea/TextArea'

import './ContactForm.scss'

const ContactForm = () => {
  return (
    <div className='contact-form'>
      <div className='contact-form__first-item'>
        <Input className='contact-form__input' type='text' placeholder='Your Name' />
        <Input className='contact-form__input' type='email' placeholder='Your Email' />
      </div>
      <div className='contact-form__second-item'>
        <Input className='title-input' type='text' placeholder='Your Title' />
        <TextArea />
        <Button title='send message' />
      </div>
    </div>
  )
}

export default ContactForm
