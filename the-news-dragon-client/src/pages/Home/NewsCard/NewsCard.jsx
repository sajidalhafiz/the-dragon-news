import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { FaShareNodes, FaRegBookmark, FaStar, FaEye } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating';


const NewsCard = ({ news }) => {
    const { _id, author, title, image_url, details, total_view, rating } = news;

    return (
        <Card className="my-3">
            <Card.Header className='d-flex justify-content-between align-items-center'>
                <div className='d-flex gap-3 align-items-center'>
                    <Image style={{ width: '56px', height: '56px' }} src={author?.img} roundedCircle />
                    <div>
                        <Card.Title className='mb-0'>{author?.name}</Card.Title>
                        <Card.Text><small>{author?.published_date}</small></Card.Text>
                    </div>
                </div>
                <div className='d-flex gap-2 fs-4'>
                    <FaRegBookmark />
                    <FaShareNodes />
                </div>
            </Card.Header>
            <Card.Body className='d-flex flex-column gap-3'>
                <Card.Title>{title}</Card.Title>
                <Card.Img src={image_url} />
                <Card.Text className='mb-0'>{details?.length > 200 ? <>{details?.slice(0, 200)}...</> : details}</Card.Text>
                <Link to={`/news/${_id}`} className='text-warning fw-medium text-decoration-none'>Read More</Link>
            </Card.Body>
            <Card.Footer className="text-muted d-flex align-items-center">
                <div className='flex-grow-1 d-flex gap-2'>
                    <Rating
                        style={{ maxWidth: 120 }}
                        value={rating?.number}
                        readOnly
                    />
                    <span>{rating?.number}</span>
                </div>
                <p className='mb-0 py-2'><FaEye /> {total_view}</p>
            </Card.Footer>
        </Card>
    );
};

export default NewsCard;