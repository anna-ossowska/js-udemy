/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */

// MAPS = key value pairs, we can use ANY data type as a key or value

const map1 = new Map();

// Set Keys
const key1 = 'Some string';
const key2 = {};
const key3 = function() {};

// Set Map values by key
map1.set(key1, 'Value of key1');
map1.set(key2, 'Value of key2');
map1.set(key3, 'Value of key3');

// // Get values by key
// console.log(map1.get(key1), map1.get(key2), map1.get(key3));

// // Count the number of values
// console.log(map1.size);

// ITERATING MAPS

// Loop using for...of to get keys and values
for (let [key, value] of map1) {
  console.log(`${key} = ${value}`);
}

// Iterate keys only
for (let key of map1.keys()) {
  console.log(key);
}

// Iterate values only
for (let value of map1.values()) {
  console.log(value);
}

// Loop using forEach
map1.forEach(function(value, key) {
  console.log(`${key} = ${value}`);
});

// CONVERT TO ARRAYS

// Create an array of the key value pairs
const keyValArr = Array.from(map1);
console.log(keyValArr);

// Create an array of the values only
const valArr = Array.from(map1.values());
console.log(valArr);

// Create an array of the keys only
const keyArr = Array.from(map1.keys());
console.log(keyArr);
