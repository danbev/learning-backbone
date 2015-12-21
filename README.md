## Learning Backbone.
The sole purpose of this project is to learn Backbone and have it as a personal reference.

## Running
Bundle up the dependencies so that we can use require in the browser:
```shell
$ browserify -r ./collections/people.js:people -r ./models/person.js:person > static/bundle.js
```

```shell
$ open index.html
```

Open the Web Brower console and try out the module:

```shell
> var People = require('people');
> var people = new People();
> var Person = require('person');
> var p = new Person({name: "Dan"});
> people.add(people);
> people.at(0).get("name");
<- "Kalle"
> people.get(p.cid).get("name");
<- "Kalle"
```
