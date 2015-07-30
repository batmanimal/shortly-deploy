var mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
  // yay!
  console.log("WORKS!")
});



exports.userSchema = new mongoose.Schema({
  user: String,
  password: String
});

exports.urls = new mongoose.Schema({
  url: String,
  base_url: String,
  code: Number,
  title: String,
  visits: Number 
})

// var config = {
//   database: {
//     connectionString: 'mongodb://MongoLab-m:mwBJzw.yDPhpXIx2DkqSh5VFSuLl0EudyTSr9wIltrU-@ds036698.mongolab.com:36698/MongoLab-m',
//     databaseName: 'mongoLabData'
//   },
//   dev: {
//     database: {
//       connectionString: '127.0.0.1:27017',
//       databaseName: 'local'
//     }
//   }
// };


exports.mongoose = mongoose;
// module.exports = mongoose;



// var db = mongoose.connection;
// db.once('open', function(callback){

// });
// var Bookshelf = require('bookshelf');
// var path = require('path');

// var db = Bookshelf.initialize({
//   client: 'sqlite3',
//   connection: {
//     host: '127.0.0.1',
//     user: 'your_database_user',
//     password: 'password',
//     database: 'shortlydb',
//     charset: 'utf8',
//     filename: path.join(__dirname, '../db/shortly.sqlite')
//   }
// });

// db.knex.schema.hasTable('urls').then(function(exists) {
//   if (!exists) {
//     db.knex.schema.createTable('urls', function (link) {
//       link.increments('id').primary();
//       link.string('url', 255);
//       link.string('base_url', 255);
//       link.string('code', 100);
//       link.string('title', 255);
//       link.integer('visits');
//       link.timestamps();
//     }).then(function (table) {
//       console.log('Created Table', table);
//     });
//   }
// });

// db.knex.schema.hasTable('users').then(function(exists) {
//   if (!exists) {
//     db.knex.schema.createTable('users', function (user) {
//       user.increments('id').primary();
//       user.string('username', 100).unique();
//       user.string('password', 100);
//       user.timestamps();
//     }).then(function (table) {
//       console.log('Created Table', table);
//     });
//   }
// });


