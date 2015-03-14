var db = require('../config');
var ShelterUser = require('../models/shelteruser');

var SheltersUsers = new db.Collection();

SheltersUsers.model = ShelterUser;

module.exports = SheltersUsers;