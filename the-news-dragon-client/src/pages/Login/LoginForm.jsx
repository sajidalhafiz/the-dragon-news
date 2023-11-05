import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LoginForm = () => {
    return (
        <Form className='d-flex flex-column gap-3 container-sm w-25 border border-1 p-5'>
            <h3 className='text-center'>Login to your account</h3>
            <hr />
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label><small>Email</small></Form.Label>
                <Form.Control type="email" name='email' placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label><small>Password</small></Form.Label>
                <Form.Control type="password" name='password' placeholder="Password" />
            </Form.Group>
            <Button variant="dark" type="submit">Login</Button>
            <Form.Text className="text-muted">
                Don't have an account? 
                <Link className='text-decoration-none text-danger fw-semibold' to='/signup'> Register</Link>
            </Form.Text>
        </Form>
    );
};

export default LoginForm;