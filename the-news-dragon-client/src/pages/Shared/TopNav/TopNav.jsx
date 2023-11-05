import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaCircleUser } from 'react-icons/fa6'
import { AuthContext } from '../../../providers/AuthProvider';
const TopNav = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleSignOut = event => {

        logOut().then(result => {
            console.log('Signed Out', result.user)
        })
        .catch(error => console.error(error))
    }

    return (
        <Navbar collapseOnSelect expand="lg" className="bg-white my-3 " bg="light" data-bs-theme="light">
            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link><Link className='text-decoration-none text-secondary' to="/">Home</Link></Nav.Link>
                        <Nav.Link><Link className='text-decoration-none text-secondary' to="/about">About</Link></Nav.Link>
                        <Nav.Link><Link className='text-decoration-none text-secondary' to="/career">Career</Link></Nav.Link>
                    </Nav>
                    <Nav className='d-flex align-items-center'>
                        {user ? <>
                            <Nav.Link className='fs-2 text-secondary'><FaCircleUser /></Nav.Link>
                            <Button onClick={handleSignOut} variant="outline-dark">Log Out</Button>
                        </>
                            : <Link to='/login'><Button variant="dark">Login</Button></Link>}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default TopNav;