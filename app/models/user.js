var Donation = require('./donation');
var bookshelf = require('../config');

var User = bookshelf.Model.extend({
  
  tableName: 'users',
  donation: function() {
    return this.hasMany(Donation);
  },
  initialize: function(){
    console.log('user initialized');
  }
});

module.exports = User;