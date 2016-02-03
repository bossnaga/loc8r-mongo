app_api/
routes/index.js

controllers/
  locations.js
  reviews.js

require router in app.js
  api...index.js


res.status
res.json
sendJsonResponse(res, 200, {"status" : "success"});
above is deprecated


-----------------
Including the model

move models folder to  app_api


add to controllers/location.js
var mongoose = require('mongoose');
var Loc = mongoose.model('Location');



use mongoose to query



error handling
■ The request parameters don’t include locationid.
■ The findById method doesn’t return a location.
■ The findById method returns an error.
