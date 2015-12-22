var Backbone = require('backbone');
var $ = require('jquery-untouched');
var PeopleRouter = require('routes/people');
Backbone.$ = $;

$(document).ready(function() {
  console.log("App ready.");
  var router = new PeopleRouter(null, {el: $('#people')});
  Backbone.history.start({
    pushState: false,
    root: '/'
  });
});
