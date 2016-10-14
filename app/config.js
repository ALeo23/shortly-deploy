var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/mongodb');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('Mongodb connection open');
});


module.exports = db;