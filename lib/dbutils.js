var Shelter = require('../app/models/shelter');

exports.createShelter = function(name, data, callback) {
  var shelter = new Shelter({
        name: name,
        image_url: data.imageUrl,
        address_1: data.address1,
        city: data.city,
        state: data.state,
        zip: data.zip,
        email: data.email,
        bio: data.bio,
        goal: data.goal,
        raised: 0
      });
        
      if(data.address_2) {
        shelter.address_2 = data.address2;
      }
      if(data.telephone) {
        shelter.telephone = data.telephone;
      }

      shelter.save().then(function(newShelter) {
        callback(shelter);
      });
};