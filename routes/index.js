/**
 * Module dependencies
 */
var express = require('express');
var controllers = require('../controllers');

/**
 * the new Router exposed in express 4
 * the indexRouter handles all requests to the `/` path
 */
var indexRouter = express.Router();

/**
 * this accepts all request methods to the `/` path
 */
indexRouter.route('/')
  .all(controllers.index);
indexRouter.route('/shelters')
  .all(controllers.getShelters);

exports.indexRouter = indexRouter;
