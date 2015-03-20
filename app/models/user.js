var Donation = require('./donation');
var bookshelf = require('../config');
var bcrypt = require('bcrypt-nodejs');

var User = bookshelf.Model.extend({
  
  tableName: 'users',
  donation: function() {
    return this.hasMany(Donation);
  },
  initialize: function(){
    console.log('user initialized');
  },

  generateHash : function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
  },

  validPassword : function(password) {
    return bcrypt.compareSync(password, this.password);
  }
});

module.exports = User;

