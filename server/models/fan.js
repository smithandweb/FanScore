var mongoose   = require('mongoose'),
  ObjectId   = mongoose.Schema.Types.ObjectId;

var schema = mongoose.Schema({
  name: String,
  email: {type: String, lowercase: true},
  twitter: String,
  fanScore: [{ref: 'Fanscore', type: ObjectId}]
});

module.exports = mongoose.model('Fan', schema);