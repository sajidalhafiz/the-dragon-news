import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa6";
import qzone1 from '../../../assets/qZone1.png';
import qzone2 from '../../../assets/qZone2.png';
import qzone3 from '../../../assets/qZone3.png';
import bg from '../../../assets/bg.png';

const RightNav = () => {
    return (
        <div className='d-flex flex-column gap-4'>
            <div className='d-flex flex-column gap-2'>
                <h4>Login with</h4>
                <Button className='w-100' variant="outline-primary"><FaGoogle /> Login with Google</Button>
                <Button className='w-100' variant="outline-dark"><FaGithub /> Login with Github</Button>
            </div>
            <div className='d-flex flex-column gap-2'>
                <h4>Find Us On</h4>
                <ListGroup>
                    <ListGroup.Item className='p-3 text-primary'><FaFacebook /> Facebook</ListGroup.Item>
                    <ListGroup.Item className='p-3 text-info'><FaTwitter /> Twitter</ListGroup.Item>
                    <ListGroup.Item className='p-3 text-warning'><FaInstagram /> Instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <div className='bg-body-secondary d-flex flex-column gap-4 p-4 justify-content-center rounded-1'>
                <h4>Q-Zone</h4>
                <img src={qzone1} alt="" />
                <img src={qzone2} alt="" />
                <img src={qzone3} alt="" />
            </div>
            <div className='position-relative text-center'>
                <img src={bg} alt="" />
                <div className='position-absolute top-50 start-50 translate-middle d-flex flex-column gap-1 p-3 justify-content-center align-items-center text-center text-white'>
                    <h3>Create an <br />Amazing <br />Newspaper</h3>
                    <p>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                    <Button variant="danger" size="lg">Learn More</Button>
                </div>
            </div>
        </div>
    );
};

export default RightNav;