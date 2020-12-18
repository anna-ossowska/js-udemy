/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

// Destructuring Assignment
let a, b;

[a, b] = [100, 200];

// Rest pattern in Arrays
[a, b, c, ...rest] = [100, 200, 300, 400, 500];

console.log(a);
console.log(rest);

// Rest pattern in Objects
({ a, b } = { a: 100, b: 200, c: 300, d: 400 });
// Rest pattern
({ a, b, ...rest } = { a: 100, b: 200, c: 300, d: 400 });

console.log(a, b);
console.log(rest);

// Array Desctructuring
const people = ['John', 'Beth', 'Bob'];
const [person1, person2, person3] = people;

console.log(people);
console.log(person1);

// Parse array returned from a function
function getPeople() {
  return ['John', 'Beth', 'Bob'];
};

let person4, person5, person6;
[person4, person5, person6] = getPeople();
console.log(person4, person5, person6);

// Object Destructuring
const person = {
  name: 'John Doe',
  age: 32,
  city: 'Boston',
  gender: 'male',
  sayHello: function() {
    console.log('Hello');
  }
};

// Old ES5
// const name = person.name;
// const age = person.age;
// const city = person.city;
// const gender = person.gender;

// New ES6 destructuring
const { name, age, city, sayHello } = person;

console.log(person);
console.log(name, age, city);
sayHello();
