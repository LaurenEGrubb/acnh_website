
const { db } = require('../models/villager');
const  Rating = require('../models/rating');
const Review = require('../models/review')

const createRating = async ( request, response ) => {
    try {
        const rating = await new Rating(request.body)
        await rating.save()
        return response.status(201).json({
            rating,
        });
    } catch (error) {
        return response.status(500).json({ error: error.message })
    }
}

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



module.exports = {
    createRating,
    createReview
}

//get