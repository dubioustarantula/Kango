var bookshelf = require('../config');
var User = require('../models/user');

var Users = new bookshelf.Collection();

Users.model = User;

module.exports = Users;