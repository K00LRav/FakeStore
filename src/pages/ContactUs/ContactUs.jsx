import React from 'react'
import './ContactUs.css'

function ContactUs() {
  return (
    <div className='contact-container'>
      <form>
        <h1>Contact Us</h1>
        <input type="text" placeholder='First Name'/>
        <input type="text" placeholder='Last Name'/>
        <textarea name="" id="text-input" cols="30" rows="10" placeholder='Write your message here'></textarea>
        <button className='submit-btn'>Submit</button>
      </form>

      </div>
  )
}

export default ContactUs