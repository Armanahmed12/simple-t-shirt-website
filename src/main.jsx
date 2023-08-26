import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './components/Layout/Main';
import Home from './components/Header/Home/Home';
import OrderReview from './components/OrderReview/OrderReview';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children : [

        {

           path : '/',
           element : <Home></Home>,
           loader : ()=> fetch('../public/tshirts.json'),

        },

        {

            path : '/review',
            element : <OrderReview></OrderReview>
        }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router}/>
  </React.StrictMode>,
)
