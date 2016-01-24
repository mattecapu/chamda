# Chamda
Chamda is a incredibly thin wrapper around the amazing [Ramda](http://ramdajs.com/) library to provide chaining.

![Chain all the things!](http://i.imgur.com/UjgvtRh.jpg)

While I think Ramda is great as-is, sometimes having a clear *path* of how data is being transformed can be more readable and straightforward. Eventually, Chamda doesn't aim to replace Ramda but to provide an additional way of consuming it.

## Installation and usage
First
```
npm install chamda --save
```
and then
```js
// plain Ramda can (and will) still be useful!
import {cR, R} from './chamda';

// well, it's just like Ramda
// with the last argument chained away
const foo = cR([1, 2, 3, 4]).median().end();

// use .end() to return the transformed value
const diff = (a, b) => a - b;
const invDiff = cR(diff).flip().end();

// here's what motivated me to write Chamda
const planet = (radius, mass) => ({radius, mass});
const myPlanet = planet(10, 5);
// with Chamda the order is natural
const jupiter = cR(planet(100, 80)).assoc('earth-sized-storms', {count: 1}).end();
// while Ramda sometimes feels swapped
const saturn = R.assoc('rings', {count: 9}, planet(80, 60));
// it just depends on how you think about the actions
// (are the moons that add themselves to a planet or does the planet get its moons by itself?)
const addMoonsTo = R.flip(R.assoc('moons'));
let neptune = planet(70, 10);
neptune = cR(neptune).assoc('moons', {count: 9}).end();
let uranus = planet(80, 42);
uranus = addMoonsTo(uranus, {count: 7});
```

## License

ISC
