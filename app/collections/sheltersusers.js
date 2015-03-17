var bookshelf = require('../config');
var ShelterUser = require('../models/shelteruser');

var SheltersUsers = new bookshelf.Collection();

SheltersUsers.model = ShelterUser;

module.exports = SheltersUsers;