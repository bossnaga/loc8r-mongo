var express = require('express');
var router  = express.Router();
var LocationsController = require('../controllers/locations');
var ReviewsController   = require('../controllers/reviews');

// locations
router.get('/locations', LocationsController.locationsListByDistance);
router.post('/locations', LocationsController.locationsCreate);
router.get('/locations/:locationid', LocationsController.locationsReadOne);
router.put('/locations/:locationid', LocationsController.locationsUpdateOne);
router.delete('/locations/:locationid', LocationsController.locationsDeleteOne);


// // reviews
router.post('/locations/:locationid/reviews',
  ReviewsController.reviewsCreate);
router.get('/locations/:locationid/reviews/:reviewid',
  ReviewsController.reviewsReadOne);
router.put('/locations/:locationid/reviews/:reviewid',
  ReviewsController.reviewsUpdateOne);
router.delete('/locations/:locationid/reviews/:reviewid',
  ReviewsController.reviewsDeleteOne);

module.exports = router;
