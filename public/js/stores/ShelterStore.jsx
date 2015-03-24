var Reflux = require('reflux');
var $ = require('jquery');
var ShelterActions = require('../actions/shelterActions.jsx');
// require action here.

var shelters = [
	{

		'sheltername' : 'wonderdogrescue',
		'name' : 'Wonder Dog Rescue',
		'image_url' : 'http://i.huffpost.com/gen/1349981/images/o-ANIMAL-SHELTER-facebook.jpg',
		'address_one' : '650 Fillmore St',
		'address_two' : null,
		'city' : 'San Francisco',
		'state' : 'CA',
		'zip' : 94140,
		'telephone' : 4156213647,
		'email' : 'adoption@wonderdogrescue.org',
		'bio' : 'Wonder Dog Rescue has a long history of rescuing dogs in need! Our founder was introduced to rescue in 1992, assisting a long-time Boston and Pug rescuer. Over time she formed Bay Area Boston Terrier Rescue. As time went on the group grew and began helping dogs of all sizes, shapes and breeds. Wonder Dog Rescue is the synthesis of this progression. We are passionate about rescue, rehoming, education and spay/neuter! We serve the San Francisco Bay Area and beyond, rescuing dogs from all over Northern and Central California. Wonder Dog Rescue has saved blind and deaf dogs, puppies as young as one week and seniors as old as 15 years! We offer hospice to special needs and elderly dogs, caring for them until the end of their lives. Each animal has so much to offer… and we learn so much by opening our hearts to these deserving companions. When a dog comes into rescue he or she is evaluated carefully. All dogs receive vaccinations and are spayed or neutered, and most dogs receive additional medical care and/or behavior modification. We work with each dog, giving them the love and structure they need to move onward. Dogs stay in foster homes until they are matched with their ideal family. We want these adoptions to be life-long and take this very seriously!Wonder Dog Rescue depends on public donations so we can continue to save dogs that find themselves in animal shelters across California. We rely upon the kindness of strangers.  Many people enjoy buying items to donate to the dogs. Please know that while we are always grateful to receive wishlist items, we do get considerable discounts at a few local pet stores and so we can often buy more items with the same amount than you may be able to.We are always in need of the following items: exercise pens (our GREATEST need for foster homes), crates, leashes and collars for small dogs,dog food, bully sticks, biscuits and treats, bedding and towels, flea and tick control, toys, and pet carriers.  Thank you for your kind donation!',
		'goal' : 1000,
		'raised' : 400
	},
	{
		'sheltername' : 'familydogrescue',
		'name' : 'Family Dog Rescue',
		'image_url' : 'http://latimesblogs.latimes.com/photos/uncategorized/2008/08/05/la_shelter_dogs.jpg',
		'address_one' : '255 Alabama St',
		'address_two' : null,
		'city' : 'San Francisco',
		'state' : 'CA',
		'zip' : 94140,
		'telephone' : 4154248912,
		'email' : 'adopt@norcalfamilydogrescue.org',
		'bio' : 'We save family-friendly dogs of all shapes and sizes. We give priority to deserving-but-overlooked dogs in California’s overcrowded municipal shelters. Our mission can also take us across the country and around the world.  All dogs are carefully screened for good behavior and receive proper veterinary care, including spay/neuter surgery and vaccinations. We seek out kid-friendly and dog-friendly dogs who can get along with everyone in your family.  While we do not accept dogs with a history of aggression, we are happy to save the underdogs, including blind/deaf, disabled, and shy dogs whom we believe have the potential to be ideal family dogs.We can always use dog treats, dog toys, leashes, collars, harnesses, dog beds, crates, dog shampoo, clean towels and blankets, Advantage or Frontline, flea/tick treatment, laptop computers, file folders, and printer paper. Thank you for helping us save over 800 dogs every year!',
		'goal' : 2100,
		'raised' : 960
	},
	{
		'sheltername' : 'sanfranciscospca',
		'name' : 'San Francisco SPCA',
		'image_url' : 'http://extras.mnginteractive.com/live/media/site208/2012/0331/20120331_050815_bn01-commission2.jpg',
		'address_one' : '201 Alabama St',
		'address_two' : null,
		'city' : 'San Francisco',
		'state' : 'CA',
		'zip' : 94103,
		'telephone' : 4155543000,
		'email' : 'development@sfspca.org',
		'bio' : 'As the fourth oldest humane society in the U.S. and the founders of the No-Kill movement, the SF SPCA has always been at the forefront of animal welfare. As a result of our efforts and those of our community partners, San Francisco has the lowest euthanasia rate of any major city in the United States. No adoptable dog or cat in San Francisco goes without a home, even if they have medical or other issues. In 2014 we merged with Pets Unlimited, a likeminded animal welfare nonprofit in Pacific Heights. Their organization included a nonprofit veterinary hospital that provided significant financial assistance to pet guardians in need, as well as a small adoption center. The original SF SPCA campus in the Mission, and the additional campus in Pacific Heights, are now working toward the same shared mission and goals. We imagine a community where every animal has a loving home. Where animals don’t need the support of San Francisco’s rescues and shelters. And we know how to get there. In 2012, the SF SPCA created Vision 2020—a road map to end animal abandonment in San Francisco by 2020. The plan identifies three main reasons animals end up in shelters—overpopulation, barriers to veterinary care and pet behavior issues. By addressing these issues aggressively, we will make San Francisco the first city in the nation to end animal homelessness. All our programs and services support at least one of three Vision 2020 principles: prevention, rescue and education. We are always in need of baby food (for weaning kittens), towels, blankets, pet beds, cat and dog food, natural chewies, kennels, crates, leashes, and pet toys.Thank you for helping us with your generous donation!',
		'goal' : 1600,
		'raised' : 870
	},
	{
		'sheltername' : 'berkeleyhumane',
		'name' : 'Berkeley Humane',
		'image_url' : 'http://static1.squarespace.com/static/50c8c55be4b0a1d4330d16f8/t/54ef9e64e4b093c84efb1a5f/1424989797766/',
		'address_one' : '2700 Ninth St',
		'address_two' : null,
		'city' : 'Berkeley',
		'state' : 'CA',
		'zip' : 94710,
		'telephone' : 5108453633,
		'email' : 'development@berkeleyhumane.org',
		'bio' : 'Berkeley Humane provides complete care for homeless animals, from rescue to rehabilitation to placement. We match animals with loving and committed adopters, strengthen the human-animal bond, and promote the humane treatment of animals. Our vision is to be an innovative leader in animal welfare and to provide critical resources to our community, leading the way with best practices in animal care to reduce the number of homeless animals in our community and beyond. We are always in need of donations for food, crates, leashes, toys, blankets, and other supplies for dogs and cats in need. Thank you for considering a donation to support the life-saving efforts at Berkeley Humane!',
		'goal' : 1900,
		'raised' : 843
	},
		{
		'sheltername' : 'gratefuldogsrescue',
		'name' : 'Grateful Dogs Rescue',
		'image_url' : 'http://www.noozhawk.com/images/uploads/062411-shelter-630.jpg',
		'address_one' : 'P.O. Box 411013',
		'address_two' : null,
		'city' : 'San Francisco',
		'state' : 'CA',
		'zip' : 94141,
		'telephone' : 4155871121,
		'email' : 'info@gratefuldogsrescue.org',
		'bio' : 'Grateful Dogs Rescue – a volunteer-run 501(c)(3) non-profit organization – was founded in 1990 by Michelle Parris, a former SF Animal Care & Control (SF ACC) volunteer.  She made it her mission to rescue SF ACC shelter dogs not made available for adoption and we continue that mission today. Rather than letting these dogs be euthanized, Grateful Dogs Rescue saves as many as possible by fostering them until loving homes are found. Our dedicated GDR volunteers also volunteer to work with the animals at SFACC. GDR is the oldest all breed rescue group in the San Francisco bay area. The Grateful Dogs Rescue adoption procedure is designed to find a good match between the dog and adopter. Our goal is a happy human and happy dog in a "forever home." We are an all-volunteer organization with no paid staff, so donations to Grateful Dogs Rescue go towards the care of our dogs. Thank you for your donation!',
		'goal' : 1200,
		'raised' : 640
	},
		{
		'sheltername' : 'oaklandanimalservices',
		'name' : 'Oakland Animal Services',
		'image_url' : 'https://www.mobilecause.com/wp-content/uploads/2014/06/shelter_volunteer.jpg',
		'address_one' : '1101 29th Ave',
		'address_two' : null,
		'city' : 'Oakland',
		'state' : 'CA',
		'zip' : 94601,
		'telephone' : 5105355602,
		'email' : 'oasvolunteerquestions@gmail.com',
		'bio' : 'Oakland Animal Services is a division of the Oakland Police Department within the City of Oakland.  Oakland Animal Services is dedicated to improving the relationship between the citizens of Oakland and its animals. Ensuring both public safety and animal welfare, OAS is responsible for responding to animal-related calls for service including helping abused, neglected, injured and abandoned animals, investigating animal bites and regulating animal-related activities within the City.Oakland Animal Services rescues hundreds of animals each year from abuse, neglect and abandonment. Many of these animals have been starved or are very injured, sick and/or under-socialized when we find them. It is truly amazing to watch as our staff and volunteers help to bring these animals back to life and find them wonderful adoption homes. Our services are made possible by the generous donations of people like you.  Please consider making a donation so that we may continue our efforts.',
		'goal' : 1600,
		'raised' : 320
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