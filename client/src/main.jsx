import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import './index.css'
import Edit from './pages/Edit';
import ErrorPage from './pages/404'
import Home from './pages/Home';
import Root from './routes/root';

const router = createBrowserRouter([
{
    path: '/',
    element: <Root/>,
    errorElement: <ErrorPage/>,
    children: [
        {
            path: '/edit/:id',
            element: <Edit/> 
        }
    ]
},
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
)
