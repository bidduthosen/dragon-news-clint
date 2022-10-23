import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';
import toast from 'react-hot-toast';

const Login = () => {
    const [userError, setUserError] = useState('');

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';


    const {signInWithPass, setLoader} = useContext(AuthContext);

    const handleSubmit =(event)=>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log( email, password)
        signInWithPass(email, password)
        .then( result =>{
            const user = result.user;
            console.log(user);
            form.reset();
            if(user.emailVerified){
                navigate(from, {replace: true});
            }
            else{
                toast.error("Your Email is not verify. Please verified!!")
            }
            setUserError('');
        })
        .catch(error => {
            console.log(error);
            setUserError(error.message);
        })
        .finally(()=> setLoader(false))
    }
    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" name='email' placeholder="Enter Email" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" name='password' placeholder="Password" required/>
                </Form.Group>
                <div className='mb-2 text-danger'>
                <small>{userError}</small>
                </div>
                <Button variant="primary mb-3" type='submit'>
                  Login
                </Button>
            </Form>
        </div>
    );
};

export default Login;