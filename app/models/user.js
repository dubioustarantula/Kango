var ShelterUser = require('./shelteruser');

var bookshelf = app.get('bookshelf');

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