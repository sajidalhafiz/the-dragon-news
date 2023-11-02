import React from 'react';
import logo from '../../../assets/logo.png';
import moment from 'moment';
import Marquee from "react-fast-marquee";
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <Container>
            <div className='text-center'>
                <img src={logo} alt="" />
                <p><small>Journalism Without Fear or Favour</small></p>
                <p className='fw-medium'>{moment().format("dddd")} <span className='fw-light'>{moment().format("MMMM D, YYYY")}</span></p>
            </div>
            <div className='d-flex justify-content-center p-3 rounded-3 bg-body-secondary'>
                <Button variant="danger">Latest</Button>
                <Marquee className='text-danger mx-5 ' speed={100} pauseOnHover={true} >
                    I can be a React component, multiple React components, or just some text...
                </Marquee>
            </div>
            <div>
                <Navbar collapseOnSelect expand="lg" className="bg-white my-3 " bg="light" data-bs-theme="light">
                    <Container>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mx-auto">
                                <Nav.Link><Link className='text-decoration-none text-secondary' to="/">Home</Link></Nav.Link>
                                <Nav.Link><Link className='text-decoration-none text-secondary' to="/about">About</Link></Nav.Link>
                                <Nav.Link><Link className='text-decoration-none text-secondary' to="/career">Career</Link></Nav.Link>
                            </Nav>
                            <Nav>
                                <Nav.Link href="">Profile</Nav.Link>
                                <Button variant="dark">Login</Button>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </Container>
    );
};

export default Header;