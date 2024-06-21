import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <nav className='navbar'>
        <div className='navbar-brand'>NavBar</div>
        <ul className='navbar-links'>
            <li className='navbar-items'><a href='#home'>Home</a></li>
            <li className='navbar-items'><a href='#home'>Home</a></li>
            <li className='navbar-items'><a href='#home'>Home</a></li>
            <li className='navbar-items'><a href='#home'>Home</a></li>
        </ul>
    </nav>
  )
}

export default Navbar