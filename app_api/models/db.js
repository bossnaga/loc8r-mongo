var mongoose = require( 'mongoose' );
var dbURI = 'mongodb://localhost/loc8r';

if (process.env.NODE_ENV === 'production') {
  dbURI = "mongodb://heroku_0h39l9td:ettum3953j7gbghq7i9quql2pl@ds055485.mongolab.com:55485/heroku_0h39l9td";
}
mongoose.connect(dbURI);


mongoose.connection.on('connected', function () {
  console.log('Mongoose connected to ' + dbURI);
});
mongoose.connection.on('error',function (err) {
  console.log('Mongoose connection error: ' + err);
});
mongoose.connection.on('disconnected', function () {
  console.log('Mongoose disconnected');
});

var gracefulShutdown = function (msg, callback) {
  mongoose.connection.close(function () {
    console.log('Mongoose disconnected through ' + msg);
    callback();
  });
};

process.once('SIGUSR2', function () {
  gracefulShutdown('nodemon restart', function () {
    process.kill(process.pid, 'SIGUSR2');
  });
});
process.on('SIGINT', function () {
  gracefulShutdown('app termination', function () {
    process.exit(0);
  });
});
process.on('SIGTERM', function() {
  gracefulShutdown('Heroku app shutdown', function () {
    process.exit(0);
  });
});

require('./location');
