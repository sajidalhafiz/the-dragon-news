import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const SignUpForm = () => {
    const { user, createUser } = useContext(AuthContext);
    const [accepted, setAccepted] = useState(false);

    // console.log(user)
    const navigate = useNavigate();

    const handleOnSubmit = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const url = form.url.files[0];
        // const terms = form.terms.checked;

        // console.log(terms)
        createUser(email, password)
            .then(result => {
                console.log(result.user);
                form.reset();
                navigate('/login');
            })
            .catch(error => console.error(error))

        // console.log(URL.createObjectURL(url))
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
                <Form.Control type="file" name='url' accept='image/*' />
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
                <Form.Check type="checkbox" name='terms' onClick={() => setAccepted(!accepted)}/>
                <small>Accept <Link to='/terms'>Term & Conditions</Link></small>
            </Form.Group>
            <Button variant="dark" type="submit" disabled={!accepted}>Register</Button>
            <Form.Text className="text-muted">
                Already have an account?
                <Link className='text-decoration-none text-danger fw-semibold' to='/login'> Log In</Link>
            </Form.Text>
        </Form>
    );
};

export default SignUpForm;