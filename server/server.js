'use strict';

var express = require('express'),
  API = require('json-api'),
  APIError = API.types.Error,
  morgan = require('morgan'),
  mongoose = require('mongoose');

// Conect to mongoose
mongoose.connect('mongodb://52.23.229.207/fanscore');

// Models
var models =  {
  Test: require('./models/test'),
  Fan: require('./models/fan'),
  Game: require('./models/game'),
  Team: require('./models/team'),
};

// Register with json-api
var adapter = new API.dbAdapters.Mongoose(models);
var registry = new API.ResourceTypeRegistry({
  tests: require('./resources/test'),
  fans: require('./resources/fan'),
  games: require('./resources/game'),
  teams: require('./resources/test')
}, { dbAdapter: adapter });

var Controller = new API.controllers.API(registry);

// Initialize the automatic documentation.
var Docs = new API.controllers.Documentation(registry, {name: 'FanScore API'});

// Initialize the express app + front controller.
var app = express();
app.use(morgan('dev'));

var Front = new API.httpStrategies.Express(Controller, Docs);
var apiReqHandler = Front.apiRequest.bind(Front);

// CORS
app.use(function(req, res, next) {
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'GET, POST, PATCH, OPTIONS');
  res.set('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// Routes
app.get("/", Front.docsRequest.bind(Front));
app.route("/:type(test|tests)")
  .get(apiReqHandler).post(apiReqHandler).options(function (req, res, next) {
    next();
  });
app.route("/:type(fan|fans)")
  .get(apiReqHandler).post(apiReqHandler).options(function (req, res, next) {
    next();
  });
app.route("/:type(game|games)")
  .get(apiReqHandler).post(apiReqHandler).options(function (req, res, next) {
    next();
  });
app.route("/:type(team|teams)")
  .get(apiReqHandler).post(apiReqHandler).options(function (req, res, next) {
    next();
  });

app.use(function(req, res, next) {
  Front.sendError(new APIError(404, undefined, 'Not Found'), req, res);
});

// And we're done! Start 'er up!
console.log('Starting up! Visit 127.0.0.1 to see the docs.');
app.listen(80);