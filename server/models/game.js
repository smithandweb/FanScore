var mongoose   = require('mongoose'),
  ObjectId   = mongoose.Schema.Types.ObjectId;

var schema = mongoose.Schema({
  awayTeam: {ref: 'Team', type: ObjectId},
  homeTeam: {ref: 'Team', type: ObjectId},
  stadium: {ref: 'Stadium', type: ObjectId},
  score: Object,
  attendance: Number,
  soldout: Boolean,
  date: String,
  weatherType: String,
  weatherTemp: Number,
  weatherWindSpeed: Number
});

module.exports = mongoose.model('Game', schema);
