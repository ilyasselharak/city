import React from 'react'
import img from "../assets/img.jpg"
import "../styles/about.css"
function About() {
  return (
    <div>
        <img id="img" src={img} alt="background"/>
        <center><h1>About Us</h1></center>
    </div>
  )
}

export default About