import axios from 'axios'
import Villager from '../components/Villager.jsx'


const VillagerCard = (props) => {


  
    return (
      <div className="card"  >
        
        <p className='name'>{ props.info.name }</p>
        <img src={props.info.image} alt="image"  ></img>
    
        <div className="info-wrapper flex-col">
      
        </div>
      </div>
  
      )
    }
    export default VillagerCard
  
  