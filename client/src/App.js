//import axios from 'axios'
import './styles/App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.js'

import React from 'react'
import Navigation from './components/Navigation'
import Search from './components/Search'
import VillagerList from './pages/VillagerDetails'


const App = () => {
    
  return (
      <div className='page'>
        < Navigation />
        < Search />
        <main> 

            <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/villagers' element={<VillagerList />}/>
             
            </Routes>

        </main>
      </div>
    );
  }
  export default App;