var db = require('../config');
var Shelter = require('../models/shelter');

var Shelters = new db.Collection();

Shelters.model = Shelter;

module.exports = Shelters;