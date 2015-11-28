'use strict';

var connect = require('connect'),
  express = require('express'),
  API = require('json-api'),
  APIError = API.types.Error,
  morgan = require('morgan'),
  vhost = require('vhost'),
  serveStatic = require('serve-static'),
  cors = require('cors'),
  mongoose = require('mongoose');

// Conect to mongoose
mongoose.connect('mongodb://52.23.229.207/fanscore');

// Models
var models =  {
  Fan: require('./models/fan'),
  Game: require('./models/game'),
  Team: require('./models/team'),
  Fanscore: require('./models/fanscore'),
  Stadium: require('./models/stadium')
};

// Register with json-api
var adapter = new API.dbAdapters.Mongoose(models);
var registry = new API.ResourceTypeRegistry({
  fans: require('./resources/fan'),
  games: require('./resources/game'),
  teams: require('./resources/team'),
  fanscores: require('./resources/fanscore'),
  stadiums: require('./resources/stadium')
}, { dbAdapter: adapter });

var Controller = new API.controllers.API(registry);

// Initialize the automatic documentation.
var Docs = new API.controllers.Documentation(registry, {name: 'FanScore API'});

var Front = new API.httpStrategies.Express(Controller, Docs);
var apiReqHandler = Front.apiRequest.bind(Front);
var optionsHandler = function (req, res, next) {
  res.send(200);
};

function buildAPIApp() {
  // Initialize the express app + front controller.
  var app = express();

  // CORS
  app.use(cors());

  // Routes
  app.get("/", Front.docsRequest.bind(Front));
  app.route("/:type(fan|fans)")
    .get(apiReqHandler).post(apiReqHandler).patch(apiReqHandler).put(apiReqHandler).options(optionsHandler);
  app.route("/:type(fan|fans)/:id")
    .get(apiReqHandler).post(apiReqHandler).patch(apiReqHandler).put(apiReqHandler).options(optionsHandler);
  app.route("/:type(game|games)/")
    .get(apiReqHandler).post(apiReqHandler).patch(apiReqHandler).put(apiReqHandler).options(optionsHandler);
  app.route("/:type(game|games)/:id")
    .get(apiReqHandler).post(apiReqHandler).patch(apiReqHandler).put(apiReqHandler).options(optionsHandler);
  app.route("/:type(team|teams)/")
    .get(apiReqHandler).post(apiReqHandler).patch(apiReqHandler).put(apiReqHandler).options(optionsHandler);
  app.route("/:type(team|teams)/:id")
    .get(apiReqHandler).post(apiReqHandler).patch(apiReqHandler).put(apiReqHandler).options(optionsHandler);

  app.use(function(req, res, next) {
    Front.sendError(new APIError(404, undefined, 'Not Found'), req, res);
  });

  return app;
}

var registeredAPIDomains = {};

var coreApp = connect();
coreApp.use(function coreHandler(req, res, next) {
  var host = req.headers['host'];
  if (host && host.substr(0, 4) === 'api.') {
    var idx = host.indexOf(':');
    if (~idx) {
      // Trim off port
      host = host.substr(0, idx);
    }
    // Register API handler for domain
    if (!registeredAPIDomains[host]) {
      coreApp.use(vhost(host, registeredAPIDomains[host] = buildAPIApp()));
      var route = coreApp.stack.pop();
      // Reinject at the correct position
      coreApp.stack.splice(coreAppStackOffset, 0, route);
      console.log('Registering API domain handler for %s.', host);
    } // Else already registered
  }
  next();
});
var coreAppStackOffset = coreApp.stack.length;
coreApp.use(serveStatic('../client/dist'));
coreApp.use(morgan('dev'));

// And we're done! Start 'er up!
console.log('Starting up! Visit 127.0.0.1 to see the docs.');
if (process.getuid && process.getuid() === 0) {
  coreApp.listen(80);
  console.log('Listening on port 80.');
} else {
  coreApp.listen(8080);
  console.log('Listening on port 8080 because you are not running as root.');
}
