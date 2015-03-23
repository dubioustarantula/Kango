var Reflux = require('reflux');
var $ = require('jquery');
var ShelterActions = require('../actions/shelterActions.jsx');
// require action here.

var shelters = [
	{
		'sheltername' : 'rockridgeshelter',
		'name' : 'Rockridge Animal Shelter',
		'image_url' : 'http://i.huffpost.com/gen/1349981/images/o-ANIMAL-SHELTER-facebook.jpg',
		'address_one' : '123 Blah Rd.',
		'address_two' : null,
		'city' : 'Rockridge',
		'state' : 'ca',
		'zip' : 94109,
		'telephone' : 4509392684,
		'email' : 'hello@bas.org',
		'bio' : 'We are the Rockridge animal shelter',
		'goal' : 1000,
		'raised' : 400
	},
	{
		'sheltername' : 'sanfranciscoshelter',
		'name' : 'San Francisco Animal Shelter',
		'image_url' : 'http://latimesblogs.latimes.com/photos/uncategorized/2008/08/05/la_shelter_dogs.jpg',
		'address_one' : '875 Post St.',
		'address_two' : null,
		'city' : 'San Francisco',
		'state' : 'ca',
		'zip' : 94109,
		'telephone' : 4509206186,
		'email' : 'hello@sas.org',
		'bio' : 'We are the San Francisco animal shelter',
		'goal' : 2100,
		'raised' : 960
	},
	{
		'sheltername' : 'westoaklandshelter',
		'name' : 'West Oakland Animal Shelter',
		'image_url' : 'http://extras.mnginteractive.com/live/media/site208/2012/0331/20120331_050815_bn01-commission2.jpg',
		'address_one' : '600 Geary St.',
		'address_two' : null,
		'city' : 'Oakland',
		'state' : 'ca',
		'zip' : 94109,
		'telephone' : 4506541234,
		'email' : 'hello@woas.org',
		'bio' : 'We are the West Oakland animal shelter',
		'goal' : 1600,
		'raised' : 870
	}
];

var ShelterStore = Reflux.createStore({
	shelters: [],
	init: function(){
		 this.shelters = shelters;
	   this.load();
	   this.listenTo(ShelterActions.loadShelters, this.load)
	   this.listenTo(ShelterActions.createShelter, this.onCreate);
	 },
	 load: function(){
	   var context = this;
	     $.ajax({
	       type: "GET",
	       url: '/shelters',
	       headers: {'x-access-token': "TOKEN GOES HERE"}
	     }).done(function(data) {
	         for (var i = 0; i < data.length; i++) {
	         	shelters.push(data[i]);
	         }
					 //push data to store
	         context.trigger(shelters);
	     });
	 },
	 onCreate: function(shelter) {
	   shelters.push(shelter);

	   this.trigger(shelters);
	 },
	 toggle: function(e, toggled, job){
	   console.log(e, toggled, job);

	 },
	 getShelters: function() {
	   //req to /api/listings
	   return shelters;
	 },

});

module.exports = ShelterStore;