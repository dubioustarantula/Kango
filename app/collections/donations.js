var bookshelf = require('../config');
var Donation = require('../models/donation');

var Donations = new bookshelf.Collection();

Donations.model = Donation;

module.exports = Donations;