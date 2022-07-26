//import axios from 'axios'
import './styles/App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.js'
import ReviewRateVillager from './pages/ReviewRateVillager'
import React from 'react'
import Navigation from './components/Navigation'
import Search from './components/Search'


const App = () => {
    
  return (
      <div className='page'>
        < Navigation />
        < Search />
        <main> 

            <Routes>
              <Route path='/' element={<Home />}/>
            </Routes>

        </main>
      </div>
    );
  }
  export default App;