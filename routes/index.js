var express = require('express');
var controllers = require('../controllers');

var indexRouter = express.Router();

indexRouter.route('/')
  .all(controllers.index);

indexRouter.post('/shelter', controllers.postShelter);
indexRouter.get('/shelters', controllers.getShelters);

indexRouter.get('/users', controllers.getUsers);

indexRouter.post('/donate', controllers.postDonation);
indexRouter.get('/donations', controllers.getDonations);

exports.indexRouter = indexRouter;
