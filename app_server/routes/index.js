var express = require('express');
var router  = express.Router();

var locationsController = require('../controllers/locations.js');
var othersController    = require('../controllers/others.js');

router.get('/', locationsController.homeList);
router.get('/location', locationsController.locationInfo);
router.get('/location/review/new', locationsController.addReview);

router.get('/about', othersController.about);

module.exports = router;
