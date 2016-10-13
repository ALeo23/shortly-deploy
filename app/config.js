var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/mongodb');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('Mongodb connection open');
});


module.exports = db;




// user.increments('id').primary();
//       user.string('username', 100).unique();
//       user.string('password', 100);


// link.increments('id').primary();
//       link.string('url', 255);
//       link.string('baseUrl', 255);
//       link.string('code', 100);
//       link.string('title', 255);
//       link.integer('visits');