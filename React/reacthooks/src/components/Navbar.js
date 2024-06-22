import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <nav className='navbar'>
        <div className='navbar-brand'>NavBar</div>
        <ul className='navbar-links'>
            {/* <li className='navbar-items'><a href='#home'>Home</a></li> */}
            <li className='navbar-items'> <Link to="/text">Text</Link> </li>
            <li className='navbar-items'> <Link to="/">About</Link> </li>
            <li className='navbar-items'> <Link to="/effect">useEffect</Link> </li>
            <li className='navbar-items'> <Link to="/class">Class Text</Link> </li>
        </ul>
    </nav>
  )
}

export default Navbar