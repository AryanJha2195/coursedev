import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../image/myLogo.png'
import cart from '../image/cart.jpg'
import heart from '../image/wishlist.png'
import bell from '../image/notification.png'
import globe from '../image/globe.jpg'

const PreNavbar = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#home">
            <img
              src={logo}
              width="50"
              height="50"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Brand href="#">MOOC Learning</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="#action1">MOOC Business</Nav.Link>
              <Nav.Link href="#action2">Teach on MOOC</Nav.Link>
              <NavDropdown title="Categories" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Devlopment</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Business</NavDropdown.Item>
                <NavDropdown.Item href="#action5">Finance & Accounting</NavDropdown.Item>
                <NavDropdown.Item href="#action6">IT & Software</NavDropdown.Item>
                <NavDropdown.Item href="#action7">Office Productivity</NavDropdown.Item>
                <NavDropdown.Item href="#action8">Personal Devlopment</NavDropdown.Item>
                <NavDropdown.Item href="#action9">Design</NavDropdown.Item>
                <NavDropdown.Item href="#action10">Marketing</NavDropdown.Item>
                <NavDropdown.Item href="#action11">Health & Fitness</NavDropdown.Item>
                <NavDropdown.Item href="#action12">Music</NavDropdown.Item>
                {/* <NavDropdown.Divider /> */}
              </NavDropdown>
              {/* <Nav.Link href="#" disabled>
              Link
            </Nav.Link> */}
              <Navbar.Brand href="#cart">
                <img
                  src={cart}
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                  alt="React Bootstrap logo"
                />
              </Navbar.Brand>
              <Navbar.Brand href="#wishlist">
                <img
                  src={heart}
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                  alt="React Bootstrap logo"
                />
              </Navbar.Brand>
              <Navbar.Brand href="#notification">
                <img
                  src={bell}
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                  alt="React Bootstrap logo"
                />
              </Navbar.Brand>
              <Navbar.Brand href="#globe">
                <img
                  src={globe}
                  width="30"
                  height="30"
                  className="d-inline-block align-top "
                  alt="React Bootstrap logo"
                />
              </Navbar.Brand>
              <div className='col-xs-3'>
              <Button variant="info">Log in</Button>{' '}
              <Button variant="dark">Sign in</Button>
              </div>
            </Nav>

            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search for anything..."
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default PreNavbar