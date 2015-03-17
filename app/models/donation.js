var Shelter = require('./shelter');
var User = require('./user');
var bookshelf = require('../config');

var Donation = bookshelf.Model.extend({
  tableName: 'donations',
  shelter: function() {
    return this.belongsTo(Shelter, 'sheltername');
  },
  user: function(){
    return this.belongsTo(User, 'username');

  },
  initialize: function(){
    console.log('donation initialized');
  }
});

module.exports = Donation;