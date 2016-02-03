# Ch3
  - save-dev nodemon and use for npm start
  - create app_server/
  - mv views, routes
  - create models, controllers

  - go to routes/index
  - remove anonymous and name it
  - go to controllers/main.js
  - require main.js into routes/index.js


  - install jquery
  - install bootstrap
  - install amelia theme

  - include:
  ■ Add viewport metadata so that the page scales nicely on mobile devices.
  https://developer.mozilla.org/en-US/docs/Mozilla/Mobile/Viewport_meta_tag
  ■ Reference jQuery, which Bootstrap requires.
  ■ Reference the Bootstrap CSS file.
  ■ Reference the Bootstrap JavaScript file.


  - add engines to package.json
  - add Procfile

  - end nodemon
  - foreman start
  ****foreman has been replaced with `heroku local`




  - add git
  - git remote heroku added

  - $ heroku ps:scale web=1
  - heroku open

  - that's it, git add, commit, push


## Ch4
  - four routes
  /
  /location
  /location/review/new
  /about


  - two controllers
  locations.js
  others.js

  - require into routes/index.js
  - create four routes
  **make sure that homeList has a capital L



  bootstrap**
  ￼￼<div class="col-xs-12 col-sm-6"></div>


  - layout: nav,body, footer



  - 92 jade pug


## Ch5
- install mongo
- npm install --save mongoose
- create a file app_server/models/db.js
var mongoose = require( 'mongoose' );

- add beneath body parser
require('./app_server/models/db');



CREATING THE MONGOOSE CONNECTION
mongodb://username:password@localhost:27027/database

The username, password, and port are all optional.


// db.js
var dbURI = 'mongodb://localhost/Loc8r';
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




- 128 close mongo connection
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



- models/location
require Mongoose

- require location in db.js



add location Schema
use control data as model
add Schema with validations


  coords: {type: [Number], index: '2dsphere'}


sub documents

create model



shell
show dbs

use [db name]
show collections


db.collectionName.find(queryObject)




use loc8r



add sub-document with update

use mongolab


heroku addons:create mongolab

Getting your connection URI
  heroku config | grep MONGOLAB_URI

  mongodb://heroku_0h39l9td:ettum3953j7gbghq7i9quql2pl@ds055485.mongolab.com:55485/heroku_0h39l9td

heroku addons:open mongolab

https://github.com/mongolab/mongodb-driver-examples/blob/master/nodejs/mongooseSimpleExample.js

------------

npm install mongoose

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');


--==
heroku config:get MONGOLAB_URI

==--

mkdir -p ~/tmp/mongodump

DUMPING THE DATA FROM THE DEVELOPMENT DATABASE
  mongodump -h localhost:27017 -d Loc8r -o ~/tmp/mongodump

RESTORING THE DATA TO YOUR LIVE DATABASE
  mongorestore -h ds055485.mongolab.com:55485 -d heroku_0h39l9td -u heroku_0h39l9td -p ettum3953j7gbghq7i9quql2pl ~/tmp/mongodump/Loc8r



env production in db.js

nodemon
 NODE_ENV=production nodemon



 // shell login
 mongo ds055485.mongolab.com:55485/heroku_0h39l9td -u heroku_0h39l9td -p ettum3953j7gbghq7i9quql2pl

 ================================
 ================================
 ================================
 ================================
 ================================
 ================================
 ================================
 ================================
 ================================
 ================================
 ================================
 ================================
 ================================
 ================================
 ================================
 ================================
 ================================
 ================================
Ch 6
================================
================================
================================
================================
================================
================================
================================
================================
================================
================================
