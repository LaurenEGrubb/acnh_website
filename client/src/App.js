//import axios from 'axios'
import './styles/App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.js'
import { useState } from 'react'
import Navigation from './components/Navigation'
import Search from './components/Search'
import VillagerList from './pages/VillagerList'
import VillagerDetails from './pages/VillagerDetails'



const App = () => {
 const [ villagerDetails, setVillagerDetails ] = useState([])   
  return (
      <div className='page'>
        < Navigation />
        < Search />
        <main> 

            <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/villagers' element={<VillagerList />}/>
              <Route path='/villagers/:id' element={<VillagerDetails/>}/>
              <Route path='/villagers/review' element={<VillagerDetails />}/>
             
            </Routes>

        </main>
      </div>
    );
  }
  export default App;