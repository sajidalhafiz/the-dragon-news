import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>Terms & Conditions</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam nam alias voluptates aut, molestias, eligendi porro rem dignissimos minus, accusantium ipsa architecto at debitis nobis? Molestiae neque beatae tempore quam.</p>
            <Link to='/signup'>Go back to Sign Up form</Link>
        </div>
    );
};

export default Terms;