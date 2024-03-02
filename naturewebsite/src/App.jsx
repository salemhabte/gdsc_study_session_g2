
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './home';

import Navigation from './header';
import Footer from './footer';
import GalleryPage from './gallay';
const App = () => {
  return (
    <BrowserRouter>
    <Navigation/>
    
    
      <Routes>
      
        <Route path="/" element={<HomePage />} />
        
        <Route path="/gallary" element={<GalleryPage/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
