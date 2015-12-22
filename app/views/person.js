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
    console.log(this.model.get('name'), ' selected=', this.model.get('selected'));
    this.$el.toggleClass('selected', this.model.get('selected'));
    return this;
  },
  events: {
    'click': '_selectPerson'
  }, 
  _selectPerson: function(event) {
    event.preventDefault();
    var name = $(event.currentTarget).text();
    console.log(name);
    this.$el.toggleClass('selected', true);
  }
});

module.exports = PersonView;
