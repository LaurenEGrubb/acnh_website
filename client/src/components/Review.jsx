import axios from "axios"
import { useState } from "react"


const VillagerDetail = ({ info }) => {

  console.log( 'info=',info )
  const [ review, setReview ] = useState( '' )
  const [ rate, setRating ] = useState( '' )


  const handleReview = async ( e ) => {
    e.preventDefault() 
    const res = await axios.post('http://localhost:3003/villagers/review',{
      review,
      villager_id : review._id
    })
    info.review.push( { review, villager_id : info._id } )
    setReview( '' )
  }

  const handleRate = async ( e ) => {
    e.preventDefault() 
    const res = await axios.post('http://localhost:3003/villagers/review',{
      rate,
      villager_id : info._id
    })
    info.rate.push( { rate } )
    setRating( '' )
  }


  return (
    <div className="villagerDetail" style={{ background: `url(${info.image})`, backgroundSize: 'cover' } } >
      
      <p className='description'>{ info.description }</p>
      <form onSubmit={ handleReview }>
        <input
          type="text"
          name="search"
          value={ review  }
          placeholder="Leave a review"
          onChange={ ( e ) => {
            setReview( e.target.value )
          }}>
        </input> { info.review }
        <button type='submit'>Submit Review</button>
      </form>

      <form onSubmit={ handleRate }>
        <input
          type="text"
          name="search"
          value={ rate }
          placeholder="Rating"
          onChange={ ( e ) => {
            setRating( e.target.value )
          }}>
        </input> { info.rate }
        <button type='submit'>Rate</button>
      </form>
      <div className="villagerReviews">
        <div > Reviews
          { info.review.map( review => [
            <p>{review.review}</p>
          ] ) }
        </div>
        <div> Rate
          { info.rate.map( rate => [
            <p>{rate}</p>
          ] ) }
        </div>
      </div>

 
    </div>


    )
  }
  export default VillagerDetail
