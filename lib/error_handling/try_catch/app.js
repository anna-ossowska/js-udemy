// Custom your own errors
const user = { email: 'johndoe@gmail.com' };

try {
  // Produce a ReferenceError
  // myFunction();

  // Produce a TypeError
  // null.myFunction();

  // Produce a SyntaxError
  // eval('Hello World');

  // Produce a URIError
  // decodeURIComponent('%')
  if (!user.name) {
    // throw 'User has no name';
    throw new SyntaxError('User has no name');
  }
} catch (err) {
  console.log(`User Error: ${err.message}`); // User Error: User has no name
  console.log(err); // SyntaxError: User has no name
  // console.log(err.message);
  // console.log(err.name);
  // console.log(err instanceof ReferenceError); // false
  // console.log(err instanceof TypeError); // false
  // console.log(`${err.name}: You can type here whatever you want`);
} finally {
  console.log('Finally runs regardless of result...');
}

// With try...catch we can handle errors without stopping the execution of the entire program
console.log('Program continues...');
