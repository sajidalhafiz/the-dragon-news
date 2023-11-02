import React from 'react';
import Header from '../pages/Shared/Header/Header';
import Footer from '../pages/Shared/Footer/Footer';
import { Outlet } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import RightNav from '../pages/Shared/RightNav/RightNav';
import EditorsInsite from '../pages/Home/EditorsInsite/EditorsInsite';

const News = () => {
    return (
        <>
            <Header />
            <Container>
                <Row>
                    <Col lg={9}>
                        <h4 className='my-3'>Dragon News</h4>
                        <Outlet />
                        <h4 className='mt-5'>Editors Insight</h4>
                        <div className='d-flex mt-4 gap-3'>
                            <EditorsInsite />
                        </div>
                    </Col>
                    <Col lg={3}>
                        <RightNav></RightNav>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    );
};

export default News;