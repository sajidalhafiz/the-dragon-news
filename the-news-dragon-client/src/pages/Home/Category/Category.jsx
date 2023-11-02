import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';

const Category = () => {
    const categoryNews = useLoaderData();

    return (
        <div>
            <small>Total News: {categoryNews.length}</small>
            {
                categoryNews.map((news, index) => <NewsCard
                    key={index}
                    news={news}
                ></NewsCard>)
            }
        </div>
    );
};

export default Category;