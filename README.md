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
> var people = require('app');
> var people = new People();
> people.at(0).get("name");
<- "Fletch"
> people.at(1).get("name");
<- "Dr.Rosen"
```
