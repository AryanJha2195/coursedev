import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
  return (
    <>
     <Navbar bg="dark" data-bs-theme="dark">
        <Container>
        <Nav className="me-auto">
            <Nav.Link href="#home">Devlopment</Nav.Link>
            <Nav.Link href="#home">Business</Nav.Link>
            <Nav.Link href="#features">Finance&Accounting</Nav.Link>
            <Nav.Link href="#pricing">IT&Software</Nav.Link>
            <Nav.Link href="#pricing">Office Productivity</Nav.Link>
            <Nav.Link href="#pricing">Personal Development</Nav.Link>
            <Nav.Link href="#pricing">Design</Nav.Link>
            <Nav.Link href="#pricing">Marketing</Nav.Link>
            <Nav.Link href="#pricing">Health & Fitness</Nav.Link>
            <Nav.Link href="#pricing">Music</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBar