import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Orders from './Components/Orders/Orders';
import Shop from './Components/Shop/Shop';
import './index.css';
import Inventory from './Components/Inventory/Inventory';
import OrderReview from './Components/OrderReview/OrderReview';
import Login from './Components/Login/Login';

ReactDOM.createRoot( document.getElementById( 'root' ) ).render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={ <Home /> } />
      <Route path='/shop' element={ <Shop /> } />
      <Route path='/orders' element={ <Orders /> } />
      <Route path='/inventory' element={ <Inventory /> } />
      <Route path='/order_review' element={ <OrderReview /> } />
      <Route path='/login' element={ <Login /> } />
    </Routes>
  </BrowserRouter>
);
