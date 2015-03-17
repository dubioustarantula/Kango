var ShelterUser = require('./shelteruser.js');
var bookshelf = require('../config');

var Shelter = bookshelf.Model.extend({

  tableName: 'shelters',
  shelteruser: function() {
    return this.hasMany(ShelterUser);
  },
  initialize: function(){
    console.log('shelter initialized');
  }
});

module.exports = Shelter;