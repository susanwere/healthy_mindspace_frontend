import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import logo from '../../logo.png';
import './navbar.scss';

function NavbarComponent() {
  return ( 
    <Navbar collapseOnSelect bg="transparent" expand="lg" fixed="top" className='navbar'>
      <Navbar.Brand href="#home">
        <img
          src={logo}
          width="110"
          height="40"
          className="d-inline-block align-top"
          alt="HM logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#news">News and Events</Nav.Link>
          <NavDropdown title="Topics" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Anxiety</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Depression</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Lifestyle</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">Psychological Analysis</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavbarComponent;