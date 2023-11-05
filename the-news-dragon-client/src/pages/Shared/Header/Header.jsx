import React from 'react';
import logo from '../../../assets/logo.png';
import moment from 'moment';
import Marquee from "react-fast-marquee";
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import TopNav from '../TopNav/TopNav';
const Header = () => {
    return (
        <Container className='mt-5'>
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
        </Container>
    );
};

export default Header;