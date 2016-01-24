// plain Ramda can (and will) still be useful!
import {R, cR} from './chamda';

// well, it's just like Ramda
// with the last argument chained away
const foo = cR([1, 2, 3, 4]).median().end();

// use .end() to return the transformed value
const diff = (a, b) => a - b;
const invDiff = cR(diff).flip().end();

// what motivated me to write Chamda
const planet = (radius, mass) => ({radius, mass});
const myPlanet = planet(10, 5);
// with Chamda the order is natural
const jupiter = cR(planet(100, 80)).assoc('earth-sized-storms', {count: 1}).end();
// while Ramda sometimes feels swapped
const saturn = R.assoc('rings', {count: 9}, planet(80, 60));
// it just depends on how you think about the actions
// (are the moons that add themselves to neptune or neptune gets its moons itself?)
let neptune = planet(70, 10);
const addMoonsTo = R.flip(R.assoc('moons'));
neptune = cR(neptune).assoc('moons', {count: 9}).end();
console.log(neptune);
let uranus = planet(80, 42);
uranus = addMoonsTo(uranus, {count: 7});
console.log(uranus);
