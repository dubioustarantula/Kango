// var express = require('express');
var fs = require('fs');
var url = require('url');

var shelterList = {
    'berkley': {name: 'Berkley', bio: 'cool stuff', img: 'http://firebrand.me.berkeley.edu/~combustion/uploads/Comb_Res_Lab/img/berkeleyCampanile.jpg'},
    'sunnyvale': {name: 'Sunnvale', bio: 'boring stuff', img: 'http://www.newcyberian.com/images/sunnyvale.jpg'},
    'oakland': {name: 'Oakland', bio: 'guns n stuff', img: 'http://www.layoverguide.com/wp-content/uploads/2012/07/Oakland-view-of-Bay-Bridge-and-San-Francisco.jpg'},
    'napa': {name: 'Napa', bio:'wine n stuff', img: 'http://www.manzanitamtb.com/wp-content/uploads/2013/03/Napa-Vineyard.jpg'}
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
    var shelter = url.parse(req.url).query;
    res.set('Content-Type', 'application/json');
    res.send(shelterList[shelter]);
};
