var mongoose   = require('mongoose'),
  ObjectId   = mongoose.Schema.Types.ObjectId;

var schema = mongoose.Schema({
  team: {ref: 'Team', type: ObjectId},
  interactions: Number,
  score: Number,
  daterange: Object
});

module.exports = mongoose.model('Fanscore', schema);