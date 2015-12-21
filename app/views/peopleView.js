var Backbone = require('backbone');

var PersonView = require('views/person');
var PeopleView = Backbone.View.extend({
  tagName: 'section',
  render: function() {
    var peopleView = this.collection.map(function(person) {
      return (new PersonView({model: person})).render().el;
    });
    this.$el.html(peopleView);
    return this;
  }
});
module.exports = PeopleView;
