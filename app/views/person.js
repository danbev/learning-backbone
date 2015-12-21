var $ = require('jquery-untouched');
var Backbone = require('backbone');
var _ = require('underscore');

var PersonView = Backbone.View.extend( {
  tagName: 'article',
  className: 'person',
  template: '<h1><%= name %><hr></h1>',
  initialize: function() {
    this.listenTo(this.model, 'change:name', this.render);
  },
  render: function() {
    var compiled = _.template(this.template);
    this.$el.html(compiled(this.model.toJSON()));
    this.$el.toggleClass('selected', this.model.get('selected'));
    return this;
  },
  events: {
    'click': '_selectPerson'
  }, 
  _selectPerson: function(event) {
    event.preventDefault();
    console.log($(event.currentTarget).html());
  }
});

module.exports = PersonView;
