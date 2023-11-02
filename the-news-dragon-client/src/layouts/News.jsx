import React from 'react';
import Header from '../pages/Shared/Header/Header';
import Footer from '../pages/Shared/Footer/Footer';
import { Outlet } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import RightNav from '../pages/Shared/RightNav/RightNav';

const News = () => {
    return (
        <>
            <Header />
            <Container>
                <Row>
                    <Col lg={9}>
                        <h4>Dragon News</h4>
                        <Outlet />
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