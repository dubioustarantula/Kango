var Reflux = require('reflux');
var $ = require('jquery');
// require action here.

var shelters = [
	{
		'sheltername' : 'berkeleyShelter',
		'name' : 'Berkeley Animal Shelter',
		'image_url' : 'imgur.com/1341434few.jpg',
		'address_one' : '1 Telegraph Rd.',
		'address_two' : null,
		'city' : 'Berkeley',
		'state' : 'ca',
		'zip' : 94109,
		'telephone' : 4509492684,
		'email' : 'hello@bas.org',
		'bio' : 'We are the Berkeley animal shelter',
		'goal' : 1000,
		'raised' : 0
	},
	{
		'sheltername' : 'sanFranciscoShelter',
		'name' : 'San Francisco Animal Shelter',
		'image_url' : 'imgur.com/1434hhew.jpg',
		'address_one' : '875 Post St.',
		'address_two' : null,
		'city' : 'San Francisco',
		'state' : 'ca',
		'zip' : 94109,
		'telephone' : 4509206186,
		'email' : 'hello@sas.org',
		'bio' : 'We are the San Francisco animal shelter',
		'goal' : 2100,
		'raised' : 0
	},
	{
		'sheltername' : 'westOaklandShelter',
		'name' : 'West Oakland Animal Shelter',
		'image_url' : 'imgur.com/1245hhrh.jpg',
		'address_one' : '600 Geary St.',
		'address_two' : null,
		'city' : 'Oakland',
		'state' : 'ca',
		'zip' : 94109,
		'telephone' : 4506541234,
		'email' : 'hello@woas.org',
		'bio' : 'We are the West Oakland animal shelter',
		'goal' : 1600,
		'raised' : 0
	}
];

var ShelterStore = Reflux.createStore({
	init: function() {
		this.load();
		// listen to actions
		// this.listenToMany(actions);
	},
	load: function() {
		var context = this;
		$.ajax({
			type: 'GET',
			url: '/shelters',
		}).done(function(data) {
			console.log(data);
			shelters = data;
			// context.trigger(shelters);
		});
	},
	getShelters: function() {
		console.log('shelters', shelters);
		return shelters;
	}
});

module.exports = ShelterStore;