var fs = require('fs');
var dbHelper = require('../lib/dbutils');

var Shelter = require('../app/models/shelter');
var Shelters = require('../app/collections/shelters');

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
  // var query = req.parsed.query;
  res.set('Content-Type', 'application/json');

  //add db queries here
};

exports.postShelter = function(req, res) {
  var data = req.body;
  var name = req.parsed.query;

  new Shelter({ name: name }).fetch().then(function(found) {
    if (found) {
      res.send(200, found);
    } else {
      dbHelper.createShelter(name, data, function(newShelter) {
        Shelters.add(newShelter);
        res.send(200, newShelter);
      });
    }
  });
};  

exports.getUsers = function(req,res) {
  // var query = req.parsed.query;
  res.set('Content-Type', 'application/json');
  //db queries here
};

exports.getDonations = function(req, res) {

};

exports.postDonation = function(req, res) {

};