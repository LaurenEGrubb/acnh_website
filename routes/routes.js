const { Router } = require('express');
const controllers = require('../controllers')
const router = Router();
const Villager = require( '../models/villager.js' )
const Review = require( '../models/review.js' )

router.get('/villagers', async (req, res) => {
    const villagers = await Villager.find()
    res.json( villagers)
})

router.post('/villagers/details', controllers.createReview) 
