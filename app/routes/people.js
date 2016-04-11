var Backbone = require('backbone');
var People = require('collections/people');
var data = require('../../people.json');
var Person = require('models/person.js');
var people = new People(data);

var PeopleView = require('views/peopleView');

var PeopleRouter = Backbone.Router.extend({
  initialize: function(attributes, options) {
    this.people = people;
    this.peopleView =  new PeopleView({
      el: options.el,
      collection: people
    });
  },
  routes: {
    'person/:name': 'person', 
    '': 'people'
  },
  people: function() {
    // just an example of calling a static method on a model.
    Person.info();
    console.log("render people....");
    this.peopleView.render();
  },
  person: function(name) {
    var p = this.people.where({name: name})[0];
    console.log("selected : ", p.get('name'));
    p.set('selected', true);
    this.peopleView.render();
  }
});

module.exports = PeopleRouter;
