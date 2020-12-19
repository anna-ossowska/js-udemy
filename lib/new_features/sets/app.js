/* eslint-disable no-self-compare */

// SETS - store unique values of any type
const set1 = new Set();

// Add values to set
set1.add(100);
set1.add('A string');
set1.add({ name: 'John' });
set1.add(true);
set1.add(100); // value ignored

const set2 = new Set([1, true, 'string']);

console.log(set1);
console.log(set2);

// Get size
console.log(set1.size); // 4

// Check for values
console.log(set1.has(100)); // true
console.log(set1.has(50 + 50)); // true

// false, since objects are reference data types stored in a heap
console.log(set1.has({ name: 'John' }));

// false too,those two objects are pointing to different locations in memory
console.log({ name: 'John' } === { name: 'John' });

// Delete from set
set1.delete(100);
console.log(set1);

//  ITERATE THROUGH SETS

// For...of
for (const item of set1) {
  console.log(item);
}

// The same result as above
for (const item of set1.values()) {
  console.log(item);
}

// The same result as above
for (const item of set1.keys()) {
  console.log(item);
}

// forEach loop
set1.forEach((value) => {
  console.log(value);
});

// CONVERT TO ARRAYS
const setArr = Array.from(set1);
console.groupCollapsed(setArr);
