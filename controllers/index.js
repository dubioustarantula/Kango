/**
 * do something with the user model
 * var User = require('../models/user');
 */

var express = require('express');
var fs = require('fs');
var url = require('url');

var shelterList = {
    'berkley': {name: 'berkley'},
    'sunnyvale': {},
    'oakland': {},
    'napa': {}
};

exports.index = function(req, res) {
    res.set('Content-Type', 'text/html');

    fs.readFile(__dirname + '/../views/grid.html', function(err, data) {
        if (err) {
            console.log("err: " + err);
            res.send("<html><head/><body>empty: " + __dirname + "</body></html>");
            return;
        }

        res.send(data);
    });
};

exports.getShelters = function(req, res) {
    var shelter = url.parse(req.url);
    shelter = shelter.query;
    res.set('Content-Type', 'application/json');
    console.log(shelterList[shelter]);
    res.send(shelterList[shelter]);
};
