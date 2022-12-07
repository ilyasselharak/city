import React from 'react'
import "../styles/header.css"
import profil from "../assets/profile.jpg"
function Header() {
  return (
    <div className='header-container'>
        <a href="/" >Home</a>
        <a href='/contact'>Contact Us</a>
        <a href="/about">About Us</a>
        <div className='profile'>
            <img className="img" src={profil}/>
            <p>ilyass</p>
        </div>
    </div>
  )
}

export default Header