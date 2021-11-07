import React from 'react';
import './App.css';
import Home from './componets/pages/Home';
import Services from './componets/pages/Services';
import Products from './componets/pages/Products';
import SignUp from './componets/pages/SignUp';
import Navbar from './componets/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Products />} />    
        <Route path="/sign-up" element={<SignUp />} />    
      </Routes>
    </Router>
  );
}

export default App;
