import VillagerCard from '../components/VillagerCard.jsx'
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
