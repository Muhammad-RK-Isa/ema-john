import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Inventory from './Components/Inventory/Inventory';
import Login from './Components/Login/Login';
import OrderReview from './Components/OrderReview/OrderReview';
import Orders from './Components/Orders/Orders';
import Shop from './Components/Shop/Shop';
import './index.css';
import App from './App';
import { shopProductLoader } from './Loaders/shopProductsLoader';

const router = createBrowserRouter( [
  { 
    path: "/",
    element: <App />,
    children: [
      { 
        index: true,
        path: "/",
        element: <Home />
      },
      {
        path: "/shop",
        element: <Shop />,
        loader: shopProductLoader
      },
      {
        path: "/orders",
        element: <Orders />
      },
      {
        path: "/inventory",
        element: <Inventory />
      },
      {
        path: "order_review",
        element: <OrderReview />
      },
      {
        path: "login",
        element: <Login />
      }
    ]
  }
] )

ReactDOM.createRoot( document.getElementById( 'root' ) ).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
