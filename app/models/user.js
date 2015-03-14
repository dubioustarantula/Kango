var db = require('../config');
var ShelterUser = require('./shelteruser');

var User = db.Model.extend({
  tableName: 'users',
  shelteruser: function() {
    return this.hasMany(ShelterUser);
  },
  initialize: function(){
    console.log('user initialized');
  }
});

module.exports = User;