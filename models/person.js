var Backbone = require('backbone');
var Person = Backbone.Model.extend({
  defaults: {
    name: "John Doe",
    age: 100
  }
});
module.exports = Person;
