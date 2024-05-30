import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom'


function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-success">
      <Container>
        <Link className="text-decoration-none text-light" style={{fontSize: '1.3rem'}} to='/'>Chat App</Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <span className='text-warning mx-4 my-2'>Logged in as: Adarsh</span>
          </Nav>
          <Nav>
            <Link className="mx-2 text-decoration-none text-light" to='/login'>
                Login
            </Link>
            <Link className="mx-2 text-decoration-none text-light" to='/register'>
                Register
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar