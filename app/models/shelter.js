var db = require('../config');
var ShelterUser = require('./shelteruser.js');
var Shelter = db.Model.extend({
  tableName: 'shelters',
  shelteruser: function() {
    return this.hasMany(ShelterUser);
  },
  initialize: function(){
    console.log('shelter initialized');
  }
});

module.exports = Shelter;