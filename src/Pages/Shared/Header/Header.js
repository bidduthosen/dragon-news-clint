import React, { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import { FaUserCircle } from 'react-icons/fa';

const Header = () => {
  const {user, logOut} = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignOut= ()=>{
    logOut()
    .then(()=>{
      navigate('/')
    })
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
                  <div className='me-3 text-primary'>{user?.displayName ? 
                    <>{user?.displayName}</> 
                    : <><div style={{fontSize: "20px"}}>Unknown Person</div></>}
                  </div>
                  <Link  className='me-3'>
                    
                      {user?.photoURL ? <Image style={{height: '31px'}} roundedCircle src={user?.photoURL}></Image>
                      :
                      
                      <FaUserCircle style={{fontSize: "31px"}}/>
                      }
                    </Link>
                  <Link onClick={handleSignOut}><Button size="sm">LogOut</Button></Link>
                </Nav>
                </>
                :
                <>
                  <Link to='/login' className='me-3'><FaUserCircle style={{fontSize: "31px"}}/></Link>
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