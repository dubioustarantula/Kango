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
  }
});

module.exports = User;




// define the schema for our user model
// var userSchema = mongoose.Schema({

//     local            : {
//         email        : String,
//         password     : String,
//     },
//     twitter          : {
//         id           : String,
//         token        : String,
//         displayName  : String,
//         username     : String
//     }

// });

// methods ======================
// generating a hash
// userSchema.methods.generateHash = function(password) {
//     return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
// };

// checking if password is valid
// userSchema.methods.validPassword = function(password) {
//     return bcrypt.compareSync(password, this.local.password);
// };

// create the model for users and expose it to our app
// module.exports = mongoose.model('User', userSchema);