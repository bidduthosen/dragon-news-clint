import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';

const Register = () => {
    const [userError, setUserError] = useState('');
    const [accepted, setAccepted] = useState(false);
    // console.log(accepted)

    const {createUser} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit =(event)=>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password)
        createUser(email, password)
        .then( result =>{
            const user = result.user;
            console.log(user);
            form.reset();
            navigate('/')
            setUserError('');
        })
        .catch(error => {
            console.log(error);
            setUserError(error.message)
        });
    }
    const handleAcceptTerms = event =>{
      setAccepted(event.target.checked)
      // console.log(event.target.checked)
    }
    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label>Name </Form.Label>
                  <Form.Control type="text" name='name' placeholder="Enter Name" required/>
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