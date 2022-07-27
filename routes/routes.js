const { Router } = require('express');
const controllers = require('../controllers/controllers.js')
const router = Router();
const Villager = require( '../models/villager.js' )
const Review = require( '../models/review.js' )
const Rating =require('../models/rating.js')


router.get('/villagers', async (req, res) => {
   try {
    const villagers = await Villager.find()
    res.json( villagers)
   } catch (error) {
    res.send(error)
   }
    
})

router.post('/villagers/review', controllers.createReview) 

router.post('/villagers/rate', controllers.createRating)

module.exports = router;