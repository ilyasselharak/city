import React from 'react'
import "../styles/contact.css"
function Contact() {
  return (
    <div>
        <h2>Contact Us</h2>
        <div className='contact'>
        <div className='cnt-form'>
        <span>Enter your Name: </span><input type="text"/>
        <span>Enter your Email: </span><input type="email"/>
        <span>Enter your Subject: </span><input type="text"/>
        <span>Enter your Message: </span><textarea cols="30"></textarea>
        </div>
        <div className='cnt-form2'>
            <strong>Contact Info</strong>
            <div className='info-cnt'>
            <p>Email: ilyass@contact.me</p>
            <p>tel: 066666666</p>
            <address>Avn react project n2</address>
            </div>
        </div>

        </div>
    </div>
  )
}

export default Contact