import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Main from '../layouts/Main';
import Home from '../pages/Home/Home/Home';
import Category from '../pages/Home/Category/Category';
import About from '../pages/About/About/About';
import Career from '../pages/Career/Career/Career';
import News from '../layouts/News';
import Detail from '../pages/Home/Detail/Detail';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: 'about',
                element: <About/>
            },
            {
                path: 'career',
                element: <Career/>
            },
            {
                path: 'categories/:id',
                element: <Category/>,
                loader: ({params}) => fetch(`http://localhost:5000/categories/${params.id}`)
            }
        ]
    },
    {
        path: 'news',
        element: <News/>,
        children: [
            {
                path: ':id',
                element: <Detail/>
            }
        ]
    }
]);

export default router;