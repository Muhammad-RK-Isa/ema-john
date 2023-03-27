import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';

ReactDOM.createRoot( document.getElementById( 'root' ) ).render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' index element={ <Home /> }></Route>
    </Routes>
  </BrowserRouter>
);
