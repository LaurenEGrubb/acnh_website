//import axios from 'axios'
import './styles/App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.js'
import ReviewRateVillager from './pages/ReviewRateVillager'
import React from 'react'


const App = () => {
    
  return (
      <div className='page'>
        
        <main> 

            <Routes>
              <Route path='/' element={<Home />}/>
            </Routes>

        </main>
      </div>
    );
  }
  export default App;