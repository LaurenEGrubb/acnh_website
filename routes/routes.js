const { Router } = require('express');
const controllers = require('../controllers/controllers.js')
const router = Router();
const Villager = require( '../models/villager.js' )
const Review = require( '../models/review.js' )



router.get('/villagers', controllers.getAllVillagers)
router.post('/villagers/:id/review', controllers.createReview) 
router.get('/villagers/:id', controllers.selectOneVillager)
router.put('/villagers/:id/review', controllers.updateReview)
router.delete('/villagers/:id/review', controllers.deleteReview)


//router.post('/villagers/rate', controllers.createRating)


module.exports = router;