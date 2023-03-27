import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Shop from './Components/Shop/Shop';
import './index.css';

ReactDOM.createRoot( document.getElementById( 'root' ) ).render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={ <Home /> }>
        <Route path='/shop' element={ <Shop /> }></Route>
      </Route>
    </Routes>
  </BrowserRouter>
);
