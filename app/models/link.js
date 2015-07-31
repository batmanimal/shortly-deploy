var mongoose = require('../config');
var crypto = require('crypto');

// db adapter - this is where we enforce the schema 
var linkSchema = mongoose.Schema({
  url: String,
  base_url: String,
  code: String,
  title: String,
  visits: Number 
});

var Link = mongoose.model('Link', linkSchema); // Link is name of collection

linkSchema.pre('save', function(next){
  var shasum = crypto.createHash('sha1');
  shasum.update(this.url);
  this.code = shasum.digest('hex').slice(0, 5);
  next();
});

module.exports = Link;
