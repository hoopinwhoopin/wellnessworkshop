import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Navigationbar from './Components/Navigationbar';
import Footer from './Components/Footer';
import App from './App';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Courses from './Courses';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
  <Navigationbar/>
    <Routes>
      <Route path="/Packages" element={<App />} />
      <Route path="/" element={<Courses />} />
    </Routes>
  <Footer/>
    </BrowserRouter>
  </React.StrictMode>,
)
