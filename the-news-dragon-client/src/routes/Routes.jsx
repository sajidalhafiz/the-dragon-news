import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Main from '../layouts/Main';
import Home from '../pages/Home/Home/Home';
import Category from '../pages/Home/Category/Category';
import About from '../pages/About/About/About';
import Career from '../pages/Career/Career/Career';
import News from '../layouts/News';
import Login from '../layouts/Login';
import SignUp from '../layouts/SignUp';
import Detail from '../pages/Home/Detail/Detail';
import PrivateRoutes from './PrivateRoutes';
import Terms from '../pages/Shared/Terms/Terms';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>,
        children: [
            {
                path: '/',
                element: <Home/>,
                loader: () => fetch('http://localhost:5000/news')
            },
            {
                path: 'categories/:id',
                element: <Category/>,
                loader: ({params}) => fetch(`http://localhost:5000/categories/${params.id}`)
            }
        ]
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
        path: 'news',
        element: <PrivateRoutes><News/></PrivateRoutes>,
        children: [
            {
                path: ':id',
                element: <Detail/>,
                loader: ({params}) => fetch(`http://localhost:5000/news/${params.id}`)
            }
        ]
    },
    {
        path: 'login',
        element: <Login/>
    },
    {
        path: 'signup',
        element: <SignUp/>
    },
    {
        path: 'terms',
        element: <Terms/>
    }
]);

export default router;