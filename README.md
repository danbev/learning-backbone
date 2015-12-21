## Learning Backbone.
The sole purpose of this project is to learn Backbone and have it as a personal reference.

## Running
Bundle up the dependencies so that we can use require in the browser:

```shell
$ browserify -r ./app/main.js:app > static/bundle.js
```

```shell
$ open index.html
```

Open the Web Brower console and try out the module:

```shell

> var app = require('app');
> document.body.appendChild(peopleView.render().el);
```
You can now click on the individual people and see the event in the console. 
