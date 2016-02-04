var mongoose = require('mongoose');
var Loc = mongoose.model('Location');

module.exports.locationsListByDistance = function(req, res) {
};

module.exports.locationsCreate = function(req, res) {
};

module.exports.locationsReadOne = function(req, res) {
  if (req.params && req.params.locationid) {
    Loc
      // .find({_id: mongoose.Types.ObjectId(req.params.locationid)})
      .findById(req.params.locationid)
      .exec(function(err, location) {
        if (!location) {
          res.status(404).json({"message": "loc id not found"});
          return;
        } else if (err) {
          res.status(404).json(err);
          return;
        }
        res.status(200).json(location);
      });
  } else {
    console.log("pug")
    res.status(404).json({"message": "no loc id in req"});
  }
};

module.exports.locationsUpdateOne = function(req, res) {
};

module.exports.locationsDeleteOne = function(req, res) {
};
