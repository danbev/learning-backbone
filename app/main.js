var Backbone = require('backbone');
var People = require('collections/people');
var data = require('../people.json');
var people = new People(data);
module.exports = people;
