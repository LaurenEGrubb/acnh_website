import axios from 'axios'
import { useEffect, useState } from 'react'
import Review from '../components/Review'
import { useParams } from 'react-router-dom'




const VillagerDetails = ({ villagerDetails, setVillagerDetails }) => {
    const { id } = useParams()
    const [villager, setVillager] = useState({})
    const getVillagerDetails = async () => {
        const res = await axios.get(`http://localhost:3003/villagers/${id}`)
        setVillager(res.data)
    }

    useEffect( ( ) => {
        getVillagerDetails()
    }, [])


    return (
        <div className='details'>
           
         <h2>{villager.name}</h2>
         <img src={villager.image} class="biggerimage"/>
         <p>{villager.description}</p>
         <form onSubmit>
            <label htmlFor="review" ></label>
            <textarea 
            id="message"
            cols="30" 
            rows="10"
            value= { Review }
        >
            </textarea> 
            <button type="submit">Submit</button>
            <button type="submit">Delete</button>
            <button type="submit">Edit</button>
         </form>
                        
        </div>
    )
}
export default VillagerDetails