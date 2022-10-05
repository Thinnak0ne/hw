import Public from './Public/index'
import Admin from './Admin/index'
import './index.css';

import React from "react"
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@mui/material/styles';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ThemeProvider>
  <BrowserRouter>
    <Routes>
      
      <Route path="/" element={<Public/>}/>
      
      <Route path="/admin" element={<Admin/>}/>
    </Routes>
  </BrowserRouter>
  </ThemeProvider>

);

