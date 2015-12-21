var Backbone = require('backbone');
var Person = require('models/person.js');
var People = Backbone.Collection.extend({
  person: Person
});
module.exports = People;

