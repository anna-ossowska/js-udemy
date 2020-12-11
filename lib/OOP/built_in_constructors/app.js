/* eslint-disable no-new-func */
/* eslint-disable no-new-object */
/* eslint-disable no-array-constructor */
/* eslint-disable prefer-regex-literals */
/* eslint-disable no-new-wrappers */
/* eslint-disable no-unused-vars */

// String
const name1 = 'Jeff'; // string as a primitive value
const name2 = new String('Jeff'); // string as an object

// name2.foo = 'bar';
// console.log(name2);

console.log(typeof name2); // returns object, not a string

if (name2 === 'Jeff') {
  console.log('YES');
} else {
  console.log('NO');
}

// Number
const num1 = 5;
const num2 = new Number(5);

// Boolean
const bool1 = true;
const bool2 = new Boolean(true);

// Function
const getSum1 = function(x, y) {
  return x + y;
};

const getSum2 = new Function('x', 'y', 'return 1 + 1');

// Object
const john1 = { name: 'John' };
const john2 = new Object({ name: 'John' });
console.log(john2);

// Arrays
const arr1 = [1, 2, 3, 4];
const arr2 = new Array(1, 2, 3, 4);

// Regular Expressions
const re1 = /\w+/;
const re2 = new RegExp('\\w+');

console.log(re2);
