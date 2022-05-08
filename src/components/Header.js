import React from 'react'
import { Link } from 'react-router-dom'
import '../style/header.css'

function Header() {
  return (
    <div className='header'>
      <div className='header_logo'>
      <Link to="/">
      <img src='https://www.aviate.jobs/aviate.png' alt='logo'/>
      </Link>
      </div>
      <div className='header_links'>
        <ul>
          <li>Home</li>
          <li>Profile</li>
          <li>About Us</li>
          <li>Contact us</li>
        </ul>
      </div>
    </div>
  )
}

export default Header