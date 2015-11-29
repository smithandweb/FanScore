// Modules
var repl = require('repl'),
  async = require('async'),
  request = require('request');

// Data
var Fan = require('./models/fan'),
  Game = require('./models/game'),
  Team = require('./models/team'),
  Fanscore = require('./models/fanscore'),
  Field = require('./models/field');

// Vars
var apiKey = 'b3c313a7e882a4c64a262b254c7625f6';

var stadiumMap = {
  '5659ebb2679c391a673dbbcb': '565a35e4196c5298342ce407',
  '5659ebb2679c391a673dbbcc': '565a3626196c5298342ce408',
  '5659ebb2679c391a673dbbcd': '565a3633196c5298342ce409',
  '5659ebb2679c391a673dbbce': '565a3643196c5298342ce40a',
  '5659ebb2679c391a673dbbcf': '565a3652196c5298342ce40b',
  '5659ebb2679c391a673dbbd1': '565a3685196c5298342ce40c',
  '5659ebb2679c391a673dbbc9': '565a3691196c5298342ce40d',
  '5659ebb2679c391a673dbbca': '565a369c196c5298342ce40e',
  '5659ebb2679c391a673dbbd0': '565a36a6196c5298342ce40f'
};

function GetWeather() {
  Game.find({}, function GotGames(err, games) {
    if (err) {
      return cb(err);
    }

    async.parallelLimit(games.map(function GameMapper(game) {
      return function GetGameWeather(cb) {
        //console.log('Getting game stadium: %s', game.stadium);
        // Translate stadium ids if needed
        if (stadiumMap[game.stadium]) {
          game.stadium = stadiumMap[game.stadium];
        }
        Field.findById(game.stadium, function GotStadium(err, stadium) {
          if (err) {
            return cb(err);
          }
          if (!stadium) {
            return cb('No stadium for game: ' + game.id);
          }
          //console.log('Got stadium: %j', stadium);

          // Fix game date
          var date = new Date(game.date);
          var apiDate = date.getFullYear() + '' +
            (date.getMonth() > 9 ? date.getMonth() : '0' + date.getMonth()) +
            (date.getDate() > 9 ? date.getDate() : '0' + date.getDate());

          var url = 'http://api.weather.com/v1/geocode/' + stadium.location.lat + '/' + stadium.location.long +
            '/observations/historical.json?apiKey=' + apiKey + '&units=m&startDate=' + apiDate +
            '&endDate=' + apiDate;
          //console.log('Weather API Call: %s', url);

          request(url, function GotWeather(err, response, body) {
            if (err) {
              return cb(err);
            }

            //console.log('BODY: %s', body);
            var WeatherData = JSON.parse(body);
            if (WeatherData && WeatherData.observations && WeatherData.observations.length) {
              // Note there are a bunch of observations, we should probably to averages / most common
              game.weatherType = WeatherData.observations[0].wx_phrase;
              game.weatherTemp = WeatherData.observations[0].feels_like;
              game.weatherWindSpeed = WeatherData.observations[0].wspd;
            } else {
              console.log('No weather data: %s', body);
            }

            // Commit changes
            game.save(cb);
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
