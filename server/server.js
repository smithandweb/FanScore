'use strict';

var express = require('express'),
  API = require('json-api'),
  APIError = API.types.Error,
  mongoose = require('mongoose');

// Conect to mongoose
mongoose.connect('mongodb://localhost/fanscore');

// Models
var models =  {
  Test: require('./models/test')
};

// Register with json-api
var adapter = new API.dbAdapters.Mongoose(models);
var registry = new API.ResourceTypeRegistry({
  test: require('./resources/test')
}, { dbAdapter: adapter });

var Controller = new API.controllers.API(registry);

// Initialize the automatic documentation.
var Docs = new API.controllers.Documentation(registry, {name: 'FanScore API'});

// Initialize the express app + front controller.
var app = express();
var Front = new API.httpStrategies.Express(Controller, Docs);
var apiReqHandler = Front.apiRequest.bind(Front);

// CORS
app.use(function(req, res, next) {
  res.set('Access-Control-Allow-Origin', '*');
  next();
});

// Routes
app.get("/", Front.docsRequest.bind(Front));
app.route("/:type(tests)")
  .get(apiReqHandler).post(apiReqHandler).patch(apiReqHandler);

app.use(function(req, res, next) {
  Front.sendError(new APIError(404, undefined, 'Not Found'), req, res);
});

// And we're done! Start 'er up!
console.log('Starting up! Visit 127.0.0.1:8080 to see the docs.');
app.listen(8080);