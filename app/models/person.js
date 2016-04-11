var Backbone = require('backbone');
// any properties or methods on the object passed to extend will be added
// to the new class's prototype
var Person = Backbone.Model.extend({
  defaults: {
    name: "John Doe",
    age: 100,
    selected: false
  }
}, { info: function() { // static properties/methods for the class rather than an instance
    console.log("Person contains basic information about a person");
   }
});

module.exports = Person;
