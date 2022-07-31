import axios from 'axios'
import { useEffect, useState } from 'react'
import VillagerCard from '../components/VillagerCard'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'




const VillagerList = ({villagers}) => {

 

  return (
    <main>
      <div className='villagercard'>
          { villagers.map( villager => (
            
            <Link to={`/villagers/${villager._id}`} key={ villager._id }> 
                <VillagerCard info={ villager }/>
               
            </Link>
          ) ) }
      </div>
    </main>
  )
}

export default VillagerList
