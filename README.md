## Learning Backbone.
The sole purpose of this project is to learn Backbone and have it as a personal reference.

Note that this was developed in steps going from a simple app to a more "complex" one. So 
there will be information in previous commit's README.md. So using ```git show commit:README.md``` migth be useful.

## Running
Bundle up the dependencies so that we can use require in the browser:

```shell
$ browserify ./app/main.js > static/bundle.js
```

```shell
$ open static/index.html
```

Open the Web Brower and try:

```
static/index.html#/
```

and to select a person:

```
static/index.html#/person/name
```

