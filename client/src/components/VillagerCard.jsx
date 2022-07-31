
const VillagerCard = (props) => {


  
    return (
      <div className="card"  >
        
        <p className='name'>{ props.info.name }</p>
        <img src={props.info.image} alt="image" />

      </div>
  
      )
    }
    export default VillagerCard
  
  