var ShelterUser = require('./shelteruser');
var bookshelf = require('../config');

var User = bookshelf.Model.extend({
  tableName: 'users',
  shelteruser: function() {
    return this.hasMany(ShelterUser);
  },
  initialize: function(){
    console.log('user initialized');
  }
});

module.exports = User;