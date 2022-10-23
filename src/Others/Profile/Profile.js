import React, { useContext } from 'react';
import { Image } from 'react-bootstrap';
import { AuthContext } from '../../Contexts/AuthProvider';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Profile = () => {
    const {user} = useContext(AuthContext);
    return (
        <div>
            <div style={{textAlign: 'center'}}>
                <Image src={user?.photoURL} roundedCircle ></Image>
                <h2 className='my-3'>{user?.displayName}</h2>
            </div>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label>Your Name</Form.Label>
                  <Form.Control type="name" defaultValue={user?.displayName} placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" readOnly defaultValue={user?.email} placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPhoto">
                  <Form.Label>photoURL</Form.Label>
                  <Form.Control type="text" defaultValue={user?.photoURL} placeholder="Photo" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
            </Form>
        </div>
    );
};

export default Profile;