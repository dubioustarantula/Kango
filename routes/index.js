var express = require('express');
var controllers = require('../controllers');

var indexRouter = express.Router();

indexRouter.route('/')
  .all(controllers.index);

indexRouter.post('/shelter', controllers.postShelter);
indexRouter.get('/shelters', controllers.getShelters);

indexRouter.get('/users', controllers.getUsers);

indexRouter.post('/donation', controllers.postDonation);
indexRouter.get('/donation', controllers.getDonations);

exports.indexRouter = indexRouter;
