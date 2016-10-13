//var db = require('../config');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');
var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    name: String,
    password: String
});

userSchema.methods = {};

userSchema.methods.comparePassword = function(attemptedPassword, callback) {
  bcrypt.compare(attemptedPassword, this.password, function(err, isMatch) {
      callback(isMatch);
  });
};



var User = mongoose.model('User', userSchema);

module.exports = User;
