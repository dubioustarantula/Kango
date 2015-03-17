var Donation = require('./donation');
var bookshelf = require('../config');

var Shelter = bookshelf.Model.extend({

  tableName: 'shelters',
  donation: function() {
    return this.hasMany(Donation);
  },
  initialize: function(){
    console.log('shelter initialized');
  }
});

module.exports = Shelter;