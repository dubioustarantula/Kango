var path = require('path');
var knex = require('knex')({
  client: 'sqlite3',
  connection: {
    host: '127.0.0.1',
    user: 'kango',
    password: 'password',
    database: 'kangodb',
    charset: 'utf8',
    filename: path.join(__dirname, '../db/kango.sqlite')
  }
});

var bookshelf = require('bookshelf')(knex);

bookshelf.knex.schema.hasTable('animals').then(function(exists) {
  if (!exists) {
    bookshelf.knex.schema.createTable('animals', function (animal) {
      animal.increments('id').primary();
      animal.string('sheltername', 255);
      animal.string('name', 255);
      animal.string('image_url', 255);
      animal.string('species', 100);
      animal.string('breed', 255);
      animal.integer('age');
      animal.string('color', 255);
      animal.string('bio');
    }).then(function (table) {
      console.log('Created Table', table);
    });
  }
});

bookshelf.knex.schema.hasTable('animals_users').then(function(exists) {
  if (!exists) {
    bookshelf.knex.schema.createTable('animals_users', function (animal_user) {
      animal_user.integer('animal_id').primary();
      animal_user.integer('username');
    }).then(function (table) {
      console.log('Created Table', table);
    });
  }
});

bookshelf.knex.schema.hasTable('shelters').then(function(exists) {
  if (!exists) {
    bookshelf.knex.schema.createTable('shelters', function (shelter) {
      shelter.string('sheltername', 150).unique().primary();
      shelter.string('name', 255);
      shelter.string('image_url', 255);
      shelter.string('address_1', 150);
      shelter.string('address_2', 150);
      shelter.string('city', 150);
      shelter.string('state', 2);
      shelter.integer('zip', 5);
      shelter.integer('telephone', 12);
      shelter.string('email', 150);
      shelter.string('bio');
      shelter.integer('goal', 10);
      shelter.integer('raised', 10);
    }).then(function (table) {
      console.log('Created Table', table);
    });
  }
});

bookshelf.knex.schema.hasTable('donations').then(function(exists) {
  if (!exists) {
    bookshelf.knex.schema.createTable('donations', function (shelter_user) {
      shelter_user.integer('sheltername', 10).primary();
      shelter_user.integer('username', 10);
      shelter_user.integer('donation', 10);
    }).then(function (table) {
      console.log('Created Table', table);
    });
  }
});

bookshelf.knex.schema.hasTable('users').then(function(exists) {
  if (!exists) {
    bookshelf.knex.schema.createTable('users', function (user) {
      user.string('username', 150).unique().primary();
      user.string('password', 150);
      user.string('image_url', 255);
      user.string('twitter_id', 150);
      user.string('twitter_token', 150);
      user.string('twitter_displayname', 150);
      user.string('twitter_handle', 150);
      user.string('firstname', 150);
      user.string('surname', 150);
      user.string('email', 150);
      user.string('address_1', 150);
      user.string('address_2', 150);
      user.string('city', 150);
      user.string('state', 2);
      user.integer('zip', 5);
      user.integer('telephone', 12);
    }).then(function (table) {
      console.log('Created Table', table);
    });
  }
});

module.exports = bookshelf;