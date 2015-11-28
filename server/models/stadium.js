var mongoose   = require('mongoose'),
  ObjectId   = mongoose.Schema.Types.ObjectId;

var schema = mongoose.Schema({
  name: String,
  type: String,
  location: Object
});

module.exports = mongoose.model('Game', schema);