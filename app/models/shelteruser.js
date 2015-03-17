var Shelter = require('./shelter');
var User = require('./user');
var bookshelf = require('../config');

var ShelterUser = bookshelf.Model.extend({
  tableName: 'urls',
  shelter: function() {
    return this.belongsTo(Shelter, 'shelter_id');
  },
  user: function(){
    return this.belongsTo(User, 'user_id');

  },
  initialize: function(){
    console.log('shelteruser initialized');
  }
});

module.exports = ShelterUser;