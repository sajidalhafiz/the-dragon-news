import React, { useEffect, useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import EditorsInsite from '../../Home/EditorsInsite/EditorsInsite';

const LeftNav = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => console.error(error))
    }, [])

    return (
        <div>
            <ListGroup>
                <h4>All Category</h4>
                {
                    categories.map(category => <ListGroup.Item className='p-2'
                        key={category.id}
                    >
                        <Link to={`/categories/${category.id}`} className='px-4 link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover'>{category.name}</Link>
                    </ListGroup.Item>)
                }
            </ListGroup>
            <div className='d-flex flex-column mt-3 gap-3'>
                <EditorsInsite />
            </div>
        </div>
    );
};

export default LeftNav;