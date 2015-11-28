// Modules
var repl = require('repl'),
  async = require('async');

// Data
var Fan = require('./models/fan'),
  Game = require('./models/game'),
  Team = require('./models/team'),
  Fanscore = require('./models/fanscore'),
  Stadium = require('./models/stadium');

// Vars
var apiKey = 'b3c313a7e882a4c64a262b254c7625f6';

function GetWeather() {
  Game.find({}, function GotGames(err, games) {
    if (err) {
      return cb(err);
    }

    async.parallelLimit(games.map(function GameMapper(game) {
      return function GetGameWeather(cb) {
        console.log('Getting game stadium: %s', game.stadium);
        Stadium.findById(game.stadium, function GotStadium(err, stadium) {
          if (err) {
            return cb(err);
          }
          if (!stadium) {
            return cb('No stadium for game: ' + game.id);
          }
          console.log('Got stadium: %j', stadium);

          var url = 'http://api.weather.com/v1/geocode/' + stadium.location.lat + '/' + stadium.location.lat +
            '/observations/historical.json?apiKey=' + apikey + '&units=m&startDate=' + game.date +
            '&endDate=' + game.date;
          console.log('Weather API Call: %s', url);

          request(url, function GotWeather(err, response, body) {
            if (err) {
              return cb(err);
            }

            console.log('BODY: %s', body);
            var WeatherData = JSON.parse(body);

            cb();
          });
        });
      };
    }), 50, function GotGameWeather(err, results) {
      if (err) {
        return console.error(err);
      }
    });
  });
}

GetWeather();
