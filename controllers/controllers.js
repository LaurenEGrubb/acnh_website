
const { db } = require('../models/villager');
const  Rating = require('../models/rating');
const Review = require('../models/review')
const Villager= require('../models/villager');
const review = require('../models/review');


const getAllVillagers = async (req, res) => {
    try {
     const villagers = await Villager.find()
     res.json( villagers)
    } catch (error) {
     res.send(error)
    }
     
 }

const createReview = async ( request, response ) => {
    try {
        const villager = await Villager.findById(request.params.id)
        request.body.villager_id = request.params.id
        const review = await new Review(request.body)
        await review.save()
        villager.reviews.push(review._id)
        await villager.save()
        return response.status(201).json(
            review
        );
    } catch (error) {
        return response.status(500).json({ error: error.message })
    }

}

const updateReview = async (request, response) => {
    const id = request.params.id
    try {
        const review = await Review.findByIdAndUpdate(req.params.id, req.body, { new: true})
        res.status(200).json(review)
    } catch (error) {
        return res.status(500).json(error.message);
    }
}



const deleteReview = async (request, response) => {
   const id = request.params.id
   console.log(request.params.id)
    try {
     const review = await Review.findByIdAndDelete(request.params.id) 
    response.status(200).send(review)
   } catch (error) {
    return response.status(500).json({ error: error.message })
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
    
    createReview,
    selectOneVillager,
    updateReview,
    deleteReview,
    getAllVillagers
}

//get