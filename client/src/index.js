import React from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
// import BrowserRouter with { destructuring } here


const root = createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
   </BrowserRouter> // 
  </React.StrictMode>
 
);
