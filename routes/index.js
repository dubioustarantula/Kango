var express = require('express');
var controllers = require('../controllers');

var indexRouter = express.Router();

indexRouter.route('/')
  .all(controllers.index);

indexRouter.get('/shelters', controllers.getShelters);
indexRouter.post('/shelter', controllers.postShelter);

indexRouter.get('/users', controllers.getUsers);

exports.indexRouter = indexRouter;
