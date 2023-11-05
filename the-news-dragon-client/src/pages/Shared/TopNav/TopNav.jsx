import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaCircleUser } from 'react-icons/fa6'
const TopNav = () => {
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
                        <Nav.Link className='fs-2 text-secondary'><FaCircleUser/></Nav.Link>
                        <Link to='/login'><Button variant="dark">Login</Button></Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default TopNav;