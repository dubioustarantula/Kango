var express = require('express');
var path = require('path');
var logger = require('morgan');
var url = require('url');
var bodyParser = require('body-parser');
var compress = require('compression');
var favicon = require('static-favicon');
var methodOverride = require('method-override');
var errorHandler = require('errorhandler');
var config = require('./config');
var routes = require('./routes');
var bookshelf = require('./app/config');

var app = express();

app.set('bookshelf', bookshelf);
app.set('port', config.server.port);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app
  .use(compress())
  .use(favicon())
  .use(logger('dev'))
  .use(bodyParser())
  .use(function(req, res, next) {
    req.parsed = url.parse(req.url);
    next();
  })
  .use(methodOverride())
  .use(express.static(path.join(__dirname, 'public')))
  .use(routes.indexRouter);

if (app.get('env') === 'development') {
  app.use(errorHandler());
}

app.listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});
