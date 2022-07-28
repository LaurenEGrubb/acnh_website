
const { db } = require('../models/villager');
const  Rating = require('../models/rating');
const Review = require('../models/review')
const Villager= require('../models/villager')

const VILLAGER_BASE_URL = "http://localhost:3003/villagers/review";



const createReview = async ( request, response ) => {
    try {
        // Review.create( req.body )
        const review = await new Review(request.body)
        await review.save()
        return response.status(201).json({
            review,
        });
    } catch (error) {
        return response.status(500).json({ error: error.message })
    }

}

const updateReview = async (request, response) => {
   const reviewIndex = 1
   const newReview = "Review (updated"
   const newReviewList = review.map((review, index) => {
    return review === reviewIndex ? newReview : review
   })
   newReviewList()

}

const deleteReview = async (request, response) => {
    
    const index = review.findIndex((review) => review.id === id);
        review.splice(index, 1);
    
    
    try {const del = await review.deleteOne(request.params.id)
        return response.status(201).json(review)
    } catch (error) {
        return response.status(500).json(review)
    }

}
const selectOneVillager = async (request, response) => {
    
    try {const villager = await Villager.findById(request.params.id)
        return response.status(201).json(villager)

    } catch (error) {
        return response.status(500).json({ error: error.message })
    }
}





module.exports = {
    createRating,
    createReview,
    selectOneVillager,
    updateReview,
    deleteReview
}

//get