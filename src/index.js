import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Nav from './components/nav';
import Convert from './components/convert';
import Footer from './components/footer'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <div>
      <Nav />
      <Convert/>
      <Footer />
  </div>
);