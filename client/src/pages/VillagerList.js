import axios from 'axios'
import { useEffect, useState } from 'react'
import Villager from '../components/Villager'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'




const VillagerList = () => {

  const [ villagers, setVillagers ] = useState([])
    
  const getVillager = async () => {
      const res = await axios.get('http://localhost:3003/villagers')
      setVillagers( res.data )
 
  }
  
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
    let path = `/villagers/review`; 
    navigate(path);
}


  useEffect( ( ) => {
      getVillager () 
  },[])

  return (
    <main>
      <div className='villagercard'>Words
          { villagers.map( villager => (
            
            <Link to={`/villagers/${villager._id}`}> 
                <Villager info={ villager }
                key={ villager.name }/>
            </Link>
          ) ) }
      </div>
    </main>
  )
}

export default VillagerList
