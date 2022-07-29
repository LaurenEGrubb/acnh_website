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

 const handleDelete = async () => {
    await axios.delete(`http://localhost:3003/villagers/${id}/review`)
}

const [form, setForm] = useState(initialState);
const handleChange = (event) => {
    await axios.put(`http://localhost:3003/villagers/${id}/review`)
    setForm(...form, [event.target.value]);
}
const handleSubmit = async (e) => {
    e.preventDefault();
    let response = await axios.post(`http://localhost:3003/villagers/${id}/review`, form)
}

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
            <button type="submit" onClick={handleSubmit}>Submit</button>
            <button type="submit" onClick={handleDelete}>Delete</button>
            <button type="submit" onChange={handleChange}>Edit</button>
         </form>
                        
        </div>
    )
}
export default VillagerDetails