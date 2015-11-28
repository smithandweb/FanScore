var mongoose   = require('mongoose'),
  ObjectId   = mongoose.Schema.Types.ObjectId;

var schema = mongoose.Schema({
  name: String,
  stadiumType: String,
  location: Object
});

module.exports = mongoose.model('Field', schema);