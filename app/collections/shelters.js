var bookshelf = require('../config');
var Shelter = require('../models/shelter');

var Shelters = new bookshelf.Collection();

Shelters.model = Shelter;

module.exports = Shelters;