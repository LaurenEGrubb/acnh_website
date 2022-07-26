import axios from 'axios'
import { useEffect, useState } from 'react'
import VillagerDetails from '../components/VillagerDetails'

const VillagerDetails = () => {

  const [ villagerDetails, setVillagerDetails ] = useState([])

  const getVillagerDetails = async () => {
      const res = await axios.get('http://localhost:3001/api/villagers')
      setVillagerDetails( res.data )
 
  }

  useEffect( ( ) => {
      getVillagerDetails() 
  },[])

  return (
      <div className='all-details'>
          { villagerDetails.map( villager => (
            
              <VillagerDetails info={ villager }
              key={ villager.name }/>
          ) ) }
      </div>
  )
}

export default VillagerDetails
