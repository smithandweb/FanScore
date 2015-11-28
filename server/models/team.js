var mongoose   = require('mongoose'),
  ObjectId   = mongoose.Schema.Types.ObjectId;

var schema = mongoose.Schema({
  name: String,
  fanScore: Number,
  games: [{ref: 'Game', type: ObjectId}],
  players: Array
});

module.exports = mongoose.model('Team', schema);