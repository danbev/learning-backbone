var Backbone = require('backbone');
var Person = require('models/person.js');
var People = Backbone.Collection.extend({
  person: Person,
  unSelected: function() {
    this.each( function(model) {
      model.set({"selected": false});
    });
  }
});
module.exports = People;

