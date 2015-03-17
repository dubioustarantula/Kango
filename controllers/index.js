var fs = require('fs');
var url = require('url');
var dbHelper = require('../lib/dbutils');

var bookshelf = require('../app/config');
var Shelter = require('../app/models/shelter');
var Shelters = require('../app/collections/shelters');

var shelterList = {
  'berkley': {name: 'Berkley', bio: 'cool stuff', img: 'http://firebrand.me.berkeley.edu/~combustion/uploads/Comb_Res_Lab/img/berkeleyCampanile.jpg'},
  'sunnyvale': {name: 'Sunnvale', bio: 'boring stuff', img: 'http://www.newcyberian.com/images/sunnyvale.jpg'},
  'oakland': {name: 'Oakland', bio: 'guns n stuff', img: 'http://www.layoverguide.com/wp-content/uploads/2012/07/Oakland-view-of-Bay-Bridge-and-San-Francisco.jpg'},
  'napa': {name: 'Napa', bio:'wine n stuff', img: 'http://www.manzanitamtb.com/wp-content/uploads/2013/03/Napa-Vineyard.jpg'}
};

var userList = {
  'thomas': {username: 'tommyt', bio: 'loves sql'},
  'will': {username: 'willyw', bio: 'loves react'},
  'julia': {username: 'juliej', bio: 'loves authentication'}
};

exports.index = function(req, res) {
  res.set('Content-Type', 'text/html');

  fs.readFile(__dirname + '/../views/grid.html', function(err, data) {
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
  res.set('Content-Type', 'application/json');

  //add db queries here

  shelterList[query] ? res.send(shelterList[query]) : res.send(shelterList);
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
  var query = req.parsed.query;
  res.set('Content-Type', 'application/json');
  //db queries here
  userList[query] ? res.send(userList[query]) : res.send(userList);
};

