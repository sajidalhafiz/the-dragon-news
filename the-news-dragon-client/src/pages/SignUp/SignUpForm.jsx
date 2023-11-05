import React, { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const SignUpForm = () => {
    const {user} = useContext(AuthContext);
    console.log(user)

    const handleOnSubmit = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        // const url = form.file.value;
        const terms = form.terms.value;

        console.log(name)
    }
    return (
        <Form onSubmit={handleOnSubmit} className='d-flex flex-column gap-1 container-sm w-25 border border-1 p-5'>
            <h3 className='text-center'>Register your self</h3>
            <hr />
            <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label><small>Your Name</small></Form.Label>
                <Form.Control type="text" name='name' placeholder="Enter name" />
            </Form.Group>

            <Form.Group controlId="formFile" className="mb-3">
                <Form.Label><small>Photo URL</small></Form.Label>
                <Form.Control type="file" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label><small>Email</small></Form.Label>
                <Form.Control type="email" name='email' placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label><small>Password</small></Form.Label>
                <Form.Control type="password" name='password' placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3 d-flex gap-2" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" name='terms'/>
                <small>Accept Term & Conditions</small>
            </Form.Group>
            <Button variant="dark" type="submit">Register</Button>
            <Form.Text className="text-muted">
                Already have an account?
                <Link className='text-decoration-none text-danger fw-semibold' to='/login'> Log In</Link>
            </Form.Text>
        </Form>
    );
};

export default SignUpForm;