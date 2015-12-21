var $ = require('jquery-untouched');
var Backbone = require('backbone');
var PersonView = Backbone.View.extend( {
  tagName: 'article',
  className: 'person',
  initialize: function() {
    this.listenTo(this.model, 'change:name', this.render);
  },
  render: function() {
    this.$el.html(this.model.get('name'));
    this.$el.toggleClass('selected', this.model.get('selected'));
    return this;
  }
});
module.exports = PersonView;
