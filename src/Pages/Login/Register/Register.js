import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';
import toast from 'react-hot-toast';

const Register = () => {
    const [userError, setUserError] = useState('');
    const [accepted, setAccepted] = useState(false);
    // console.log(accepted)

    const {createUser, updateUserProfile, emailVerify} = useContext(AuthContext);

    const handleSubmit =(event)=>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name, photoURL, email, password);

        createUser(email, password)
          .then( result =>{
              const user = result.user;
              console.log(user);
              form.reset();
              setUserError('');
              handleUpdateUserprofile(name, photoURL);
              handleEmailVerification();
              toast.success('Check your email and verify now !')
          })
        .catch(error => {
            console.log(error);
            setUserError(error.message)
        })
    }

    const handleUpdateUserprofile = (name, photoURL) =>{
      const profile ={
        displayName : name,
        photoURL : photoURL,
      }
      updateUserProfile(profile)
      .then(()=>{})
      .catch(error=> console.error(error))
    }

    const handleAcceptTerms = event =>{
      setAccepted(event.target.checked)
      // console.log(event.target.checked)
    }

    // verify email------------
    const handleEmailVerification = () =>{
      emailVerify()
      .then(()=>{})
      .catch(error => console.error(error))
    }


    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label>Name </Form.Label>
                  <Form.Control type="text" name='name' placeholder="Enter Name" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPhoto">
                  <Form.Label>Your PhotoURL</Form.Label>
                  <Form.Control type="text" name='photoURL' placeholder="Your PhotoURL" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" name='email' placeholder="Enter Email" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" name='password' placeholder="Password" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check onClick={handleAcceptTerms} type="checkbox" label={<>Accept <Link>Terms & Conditions</Link></>} />
                </Form.Group>
                <div className='mb-2 text-danger'>
                <small>{userError}</small>
                </div>
                <Button variant="primary mb-3" type='submit' disabled={!accepted}>
                  Register
                </Button>
            </Form>
        </div>
    );
};

export default Register;