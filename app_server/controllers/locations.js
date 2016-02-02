module.exports.homeList = function(req, res){
  res.render('index', { title: 'Home' });
};

module.exports.locationInfo = function(req, res){
  res.render('index', { title: 'Location info' });
};

module.exports.addReview = function(req, res){
  res.render('index', { title: 'Add review' });
};


// locations: [{
// name: 'Starcups',
// address: '125 High Street, Reading, RG6 1PS', rating: 3,
//   facilities: ['Hot drinks', 'Food', 'Premium wifi'],
//   distance: '100m'
// }]
