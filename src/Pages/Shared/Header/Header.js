import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import LeftSideNav from '../LeftSideNav/LeftSideNav';

const Header = () => {
    return (
        <Navbar bg="dark" expand="md" variant='dark' className='mb-4'>
            <Container>
              <Navbar.Brand ><Link to='/'><h2>Dragon News</h2></Link> </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#link">Link</Nav.Link>
                  {/* left side nav category--all */}
                  <div className='d-md-none'>
                        <LeftSideNav></LeftSideNav>
                  </div>
                </Nav>
              </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;