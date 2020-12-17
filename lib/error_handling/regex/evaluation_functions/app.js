/* eslint-disable no-unused-vars */
/* eslint-disable prefer-const */

let re;
re = /hello/gi;

// re = /hello/;
// console.log(re);
// console.log(re.source); // hello

// exec() - Return the result in an array or null
// const result = re.exec('hi hello world');
// console.log(result); // 'hello', index: 3, input: 'hi hello world'
// console.log(result[0]); // hello
// console.log(result.index); // 3
// console.log(result.input);

// test() - Return true or false
// const result = re.test('Hello');
// console.log(result);

// match - Return result array or null
// const str = 'Hello there';
// const result = str.match(re);
// console.log(result);

// search - Return the index of the first match or -1
// const str = 'Hello there';
// const result = str.search(re);
// console.log(result); // 0

// replace - Return a new string with some or all matches of the pattern
// const str = 'Hello there';
// const newStr = str.replace(re, 'Hi');
// console.log(newStr); // Hi there
