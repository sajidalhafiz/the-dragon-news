import React, { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const LoginForm = () => {

    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    // console.log(from);

    const handleOnSubmit = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                console.log(result.user)
                navigate(from, {replace: true})
            })
            .catch(error => console.error(error))

    }
    return (
        <Form onSubmit={handleOnSubmit} className='d-flex flex-column gap-3 container-sm w-25 border border-1 p-5'>
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