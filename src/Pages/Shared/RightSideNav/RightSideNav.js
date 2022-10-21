import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import {FaGoogle, FaGithub, FaFacebook, FaYoutube, FaTwitter, FaWhatsapp, FaDiscord, FaRegWindowMaximize, FaTeamspeak } from 'react-icons/fa';
import { AuthContext } from '../../../Contexts/AuthProvider';
import BrandCarousel from '../BrandCarousel/BrandCarousel';

const RightSideNav = () => {
    const {signInGoogle} = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();


    const handleSignInGoogle = () =>{
        signInGoogle(googleProvider)
        .then(result =>{
            const user = result.user;
            console.log(user);
        })
        .catch(error => console.error(error))
    }
    return (
        <div>
            <div className="d-grid gap-2">
                <Button onClick={handleSignInGoogle} variant="outline-success" size="lg"><FaGoogle/> Login Via Google</Button>
                <Button variant="outline-dark" size="lg"><FaGithub/> Login Via GitHub</Button>
            </div>
            <div className='mt-4'>
                <h4>Find Us On</h4>
                <ListGroup>
                  <ListGroup.Item className='mb-2 bg-light rounded-2'><FaFacebook/> Facebook </ListGroup.Item>
                  <ListGroup.Item className='mb-2 bg-light rounded-2'><FaYoutube/> Youtube  </ListGroup.Item>
                  <ListGroup.Item className='mb-2 bg-light rounded-2'><FaTwitter/> Twitter </ListGroup.Item>
                  <ListGroup.Item className='mb-2 bg-light rounded-2'><FaWhatsapp/> Whatsapp </ListGroup.Item>
                  <ListGroup.Item className='mb-2 bg-light rounded-2'><FaDiscord/> Discord </ListGroup.Item>
                  <ListGroup.Item className='mb-2 bg-light rounded-2'><FaRegWindowMaximize/> Privacy Policy </ListGroup.Item>
                  <ListGroup.Item className='mb-2 bg-light rounded-2'><FaTeamspeak/> Terms & Condition </ListGroup.Item>
                </ListGroup>
            </div>
            <div>
                <BrandCarousel></BrandCarousel>
            </div>
        </div>
    );
};

export default RightSideNav;