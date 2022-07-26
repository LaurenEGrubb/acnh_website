import axios from 'axios'
import { useEffect, useState } from 'react'
//import Review from '../components/Review'
import { useParams } from 'react-router-dom'
//import review from '../models/review'
//import { schema } from '../../../models/villager.js'





const VillagerDetails = () => {
    const { id } = useParams()
    const [villager, setVillager] = useState({})
    const [message, setMessage] = useState("") 
    const getVillagerDetails = async () => {
        const res = await axios.get(`http://localhost:3003/villagers/${id}`)
        console.log(res) 
        setVillager(res.data)
       
    }

    useEffect( ( ) => {
        getVillagerDetails()
    }, [])

 const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3003/villagers/${id}/review`)
}

const handleSubmit = async (event) => {
    event.preventDefault();
   
    let res = await axios.post(`http://localhost:3003/villagers/${id}/review`, {content:message})
    setMessage("");
}

const handleEdit = async (id) => {
        let res = await axios.put(`http://localhost:3003/villagers/${id}/review`, {content:message})
    setMessage("");
}
    return (
        <div className='details'>
           
         <h2>{villager.name}</h2>
         <img src={villager.image} class="biggerimage"/>
         <p>{villager.description}</p>
         <form onSubmit={handleSubmit}>
            <label htmlFor="reviews" ></label>
            <textarea onChange={(e) => setMessage(e.target.value)} value={ message }
            id="message"
            cols="30" 
            rows="10">
            </textarea> 
            <button type="submit">Submit</button>
         </form>   
           {villager.reviews?.map((review) => (
            <div>
                <p>{review.content}</p>
                <button type="submit" onClick={()=>handleDelete(review._id)}>Delete</button>
                <button type="submit" onClick={()=>handleEdit(review._id)} value= { message }>Edit</button>   
            </div>
           ))}   
           <p> When doing the edit feature, you have to type in the text box of what you want the comment to be replaced with and then select the button "Edit" of the chosen comment you want to be replaced.</p>       
        </div>
    )
}
export default VillagerDetails