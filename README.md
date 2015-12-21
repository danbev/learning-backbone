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
>  var people = require('app');
>  var people = new People();

>  people.at(0).get("name");
<- "Fletch"

>  people.at(1).get("name");
<- "Dr.Rosen"

>  people.at(2).toJSON();
<- Object {id: 3, name: "Mr.Poon"}

>  people.map(function(p) { return p.get('name'); } );
<- ["Fletch", "Dr.Rosen", "Mr.Poon"]

>  people.where({name: 'Fletch'})[0].toJSON();
<- Object {id: 1, name: "Fletch"}

>  people.remove(1);
<- bundle.js:27 Event :  remove  was triggered
<- bundle.js:27 Event :  update  was triggered
<- B…e.Model {cid: "c1", attributes: Object, _changing: false, _previousAttributes: Object, changed: Object…}
>  people.size()
<- 2
```
