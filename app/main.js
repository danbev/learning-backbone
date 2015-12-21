var _ = require('underscore');
var Backbone = require('backbone');
var $ = require('jquery-untouched');
Backbone.$ = $;
var PersonView = require('views/person');
var PeopleView = require('views/peopleView');
var People = require('collections/people');
var data = require('../people.json');
var people = new People(data);

_.extend(this, Backbone.Events);
this.listenTo(people, 'all', function(name) {
  console.log('Event: ', name, ' was triggered');
});

module.exports = { people: people, 
  PersonView: PersonView, 
  PeopleView: PeopleView 
};
