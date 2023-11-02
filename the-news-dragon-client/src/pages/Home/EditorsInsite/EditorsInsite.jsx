import React from 'react';
import img1 from '../../../assets/1.png';
import img2 from '../../../assets/2.png';
import img3 from '../../../assets/3.png';
import { Card, CardGroup } from 'react-bootstrap';

const EditorsInsite = () => {
    return (
        <>
            <Card>
                <Card.Img variant="top" src={img1} />
                <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This is a longer card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit
                        longer.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img variant="top" src={img2} />
                <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This is a longer card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit
                        longer.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img variant="top" src={img3} />
                <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This is a longer card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit
                        longer.
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    );
};

export default EditorsInsite;