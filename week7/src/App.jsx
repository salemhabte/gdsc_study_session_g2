
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './home';
import Ear from './earring';
import Bra from './braslet';
import Ring from './ring';
import Navigation from './header';
import Footer from './footer';
import Cart from './cart';
const App = () => {
  return (
    <BrowserRouter>
    <Navigation/>
    
    
      <Routes>
      
        <Route path="/" element={<Home />} />
        <Route path="/earring" element={<Ear />} />
        <Route path="/braslet" element={<Bra />} />
        <Route path="/ring" element={<Ring />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
