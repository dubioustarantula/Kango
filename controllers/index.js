var fs = require('fs');
var dbHelper = require('../lib/dbutils');

var Shelter = require('../app/models/shelter');
var User = require('../app/models/user');
var Donation = require('../app/models/donation');
var Shelters = require('../app/collections/shelters');
var Users = require('../app/collections/users');
var Donations = require('../app/collections/donations');

exports.index = function(req, res) {
  res.set('Content-Type', 'text/html');

  fs.readFile(__dirname + '/../views/index.html', function(err, data) {
    if (err) {
      console.log('err: ' + err);
      res.send('<html><head/><body>empty: ' + __dirname + '</body></html>');
      return;
    }

    res.send(data);
  });
};

exports.getShelters = function(req, res) {
  var sheltername = req.parsed.query;
  
  if(sheltername) {
    new Shelter({ sheltername: sheltername }).fetch().then(function(shelter) {
      if(shelter) {
        res.send(200, shelter);
      } else {
        res.send(404, 'Shelter name does not appear in our database. Get /shelters for list of availabl shelters');
      }
    });
  } else {
    Shelters.reset().fetch().then(function(shelters) {
      if(shelters.models === []) {
        res.send(418, 'There are no shelters');
      }
      res.send(200, shelters.models);
    });
  }
};

exports.postShelter = function(req, res) {
  var data = req.body;
  var sheltername = req.parsed.query;

  new Shelter({ sheltername: sheltername }).fetch().then(function(found) {
    if (found) {
      res.send(200, found);
    } else {
      dbHelper.createShelter(sheltername, data, function(newShelter) {
        Shelters.add(newShelter);
        res.send(200, newShelter);
      });
    }
  });
};  

exports.getUsers = function(req,res) {
  var username = req.parsed.query;

  if(username) {
    new User({ username: username }).fetch().then(function(user) {
      if(user) {
        res.send(200, user);
      } else {
        res.send(404, 'Username does not appear in our database');
      }
    });
  } else {
    Users.reset().fetch().then(function(users) {
        res.send(200, users.models);
    });
  }
};

exports.getDonations = function(req, res) {
  var sheltername = req.parsed.query;

  new Donation({ sheltername: sheltername }).fetchAll().then(function(donations) {
    if(donations) {
      donations.models.sort(function(a, b) {
        return b.attributes.donation > a.attributes.donation;
      });
      res.send(200, donations);
    } else {
      res.send(404, 'Username does not appear in our database');
    }
  });
};

exports.postDonation = function(req, res) {
  var data = req.body;
  dbHelper.createDonation(data, function(newDonation) {
    Donations.add(newDonation);
    // res.send(200, newDonation);
  });
  new Shelter({ sheltername: data.sheltername }).fetch().then(function(shelter) {
    var raised = shelter.attributes.raised + data.donation;
    if(shelter) {
      shelter.save({raised: raised}, {patch: true}).then(function() {
        //updated
        console.log('Shelter updated!');
      });
    } else {
      res.send(404, 'Sheltername does not appear in our database');
    }
  });  
};