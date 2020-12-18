/* eslint-disable symbol-description */

// Create a symbol
const sym1 = Symbol(); // no constructor
const sym2 = Symbol('sym2');

console.log(sym1); // Symbol()
console.log(sym2); // Symbol(sym2)
console.log(typeof sym2); // symbol

// We get false, since each symbol is unique
// console.log(Symbol('123') === Symbol('123'));

// Conver Symbol to a string
console.log(`Hello ${sym1.toString()}`);

// Unique Object keys
const KEY1 = Symbol('');
const KEY2 = Symbol('sym2');

const myObj = {};

// Using var as a key - [] needed
myObj[KEY1] = 'Prop1';
myObj[KEY2] = 'Prop1';
myObj.key3 = 'Prop3';
myObj.key4 = 'Prop4';

// console.log(myObj);
// console.log(myObj[KEY1]);

// Symbols are nor enumerable in for...in
for (const i in myObj) {
  console.log(`${i}: ${myObj[i]}`);
}

// symbols are igonred by JSON.stringify
console.log(JSON.stringify({ key: 'prop' }));
console.log(JSON.stringify({ [Symbol('sym1')]: 'prop' })); // return an empty object
