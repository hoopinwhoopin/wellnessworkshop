import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Footer from './Components/Footer';
import App from './App';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Courses from './Courses';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Packages" element={<Courses />} />
    </Routes>
    </BrowserRouter>
  <Footer/>
  </React.StrictMode>,
)
