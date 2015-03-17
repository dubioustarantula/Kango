var fs = require('fs');
var dbHelper = require('../lib/dbutils');

var Shelter = require('../app/models/shelter');
var User = require('../app/models/user');
var Shelters = require('../app/collections/shelters');
var Users = require('../app/collections/users');

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
  var query = req.parsed.query;
  
  if(query) {
    new Shelter({ sheltername: query }).fetch().then(function(shelter) {
      if(shelter) {
        res.send(200, shelter);
      } else {
        res.send(404, 'Shelter name does not appear in our database');
      }
    });
  } else {
    Shelters.reset().fetch().then(function(shelters) {
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
  var query = req.parsed.query;

  if(query) {
    new User({ username: query }).fetch().then(function(user) {
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

};

exports.postDonation = function(req, res) {

};