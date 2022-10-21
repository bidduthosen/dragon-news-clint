import React, { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';
import LeftSideNav from '../LeftSideNav/LeftSideNav';

const Header = () => {
  const {user, logOut} = useContext(AuthContext);
  const handleSignOut= ()=>{
    logOut()
    .then(()=>{})
    .catch(error=>console.error(error))
  }
    return (
        <Navbar bg="dark" expand="md" variant='dark' className='mb-4'>
            <Container>
              <Navbar.Brand ><Link to='/'><h2>Dragon News</h2></Link> </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#link">Link</Nav.Link>
                  {/* left side nav category--all */}
                  <div className='d-md-none'>
                        <LeftSideNav></LeftSideNav>
                  </div>
                </Nav>
                {user?.uid ? 
                <>
                <Nav className='d-flex justify-content-between align-items-center'>
                  <Link>{user?.displayName}</Link>
                    <Link eventKey={2} href="#memes">
                    <Image style={{height: '35px'}} roundedCircle src={user?.photoURL}></Image>
                    </Link>
                    <Link onClick={handleSignOut}><Button size="sm">LogOut</Button></Link>
                </Nav>
                </>
                :
                <>
                  <Link to='/login' className='me-2'><Button size="sm">Login</Button></Link>
                  <Link to='/register'><Button size="sm">Registration</Button></Link>
                </>
                }
              </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;