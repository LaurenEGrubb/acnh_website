import axios from 'axios'
import { useEffect, useState } from 'react'
import Villager from '../components/Villager'

const VillagerList = () => {

  const [ villagers, setVillagers ] = useState([])

  const getVillager = async () => {
      const res = await axios.get('http://localhost:3002/api/villagers')
      setVillagers( res.data )
 
  }

  useEffect( ( ) => {
      getVillager () 
  },[])

  return (
      <div className='villagercard'>Words
          { villagers.map( villager => (
            
              <Villager info={ villager }
              key={ villager.name }/>
          ) ) }
      </div>
  )
}

export default VillagerList
