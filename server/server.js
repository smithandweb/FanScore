'use strict';

var express = require('express'),
  API = require('json-api'),
  APIError = API.types.Error,
  morgan = require('morgan'),
  cors = require('cors'),
  mongoose = require('mongoose');

// Conect to mongoose
mongoose.connect('mongodb://52.23.229.207/fanscore');

// Models
var models =  {
  Test: require('./models/test'),
  Fan: require('./models/fan'),
  Game: require('./models/game'),
  Team: require('./models/team'),
  Fanscore: require('./models/fanscore'),
  Stadium: require('./models/stadium')
};

// Register with json-api
var adapter = new API.dbAdapters.Mongoose(models);
var registry = new API.ResourceTypeRegistry({
  tests: require('./resources/test'),
  fans: require('./resources/fan'),
  games: require('./resources/game'),
  teams: require('./resources/team'),
  fanscores: require('./resources/fanscore'),
  stadiums: require('./resources/stadium')
}, { dbAdapter: adapter });

var Controller = new API.controllers.API(registry);

// Initialize the automatic documentation.
var Docs = new API.controllers.Documentation(registry, {name: 'FanScore API'});

// Initialize the express app + front controller.
var app = express();
app.use(morgan('dev'));

var Front = new API.httpStrategies.Express(Controller, Docs);
var apiReqHandler = Front.apiRequest.bind(Front);
var optionsHandler = function (req, res, next) {
  res.send(200);
};

// CORS
app.use(cors());

// Routes
app.get("/", Front.docsRequest.bind(Front));
app.route("/:type(test|tests)")
  .get(apiReqHandler).post(apiReqHandler).options(optionsHandler);
app.route("/:type(fan|fans)")
  .get(apiReqHandler).post(apiReqHandler).options(optionsHandler);
app.route("/:type(game|games)")
  .get(apiReqHandler).post(apiReqHandler).options(optionsHandler);
app.route("/:type(team|teams)")
  .get(apiReqHandler).post(apiReqHandler).options(optionsHandler);

app.use(function(req, res, next) {
  Front.sendError(new APIError(404, undefined, 'Not Found'), req, res);
});

// And we're done! Start 'er up!
console.log('Starting up! Visit 127.0.0.1 to see the docs.');
if (process.getuid && process.getuid() === 0) {
  app.listen(80);
  console.log('Listening on port 80.');
} else {
  app.listen(8080);
  console.log('Listening on port 8080 because you are not running as root.');
}
