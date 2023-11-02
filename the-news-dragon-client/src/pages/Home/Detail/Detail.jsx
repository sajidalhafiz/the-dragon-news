import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa6';
import { Link, useLoaderData } from 'react-router-dom';

const Detail = () => {
    const selectedNews = useLoaderData();
    console.log(selectedNews)
    const { _id, title, image_url, details, category_id } = selectedNews;

    return (
        <Card className='p-4'>
            <Card.Img variant="top" src={image_url} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{details}</Card.Text>
                <Link to={`/categories/${category_id}`}><Button variant="danger"><FaArrowLeft/> All News In This Category</Button></Link>
            </Card.Body>
        </Card>
    );
};

export default Detail;