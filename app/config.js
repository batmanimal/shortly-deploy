var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/shortlydb');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:')); // bind error to console object  
db.once('open', function (callback) {
  console.log('Mongodb connection works!');
});

module.exports = db;
