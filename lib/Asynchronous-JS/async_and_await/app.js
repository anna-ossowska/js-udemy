// async function myFunction() {
//   // return 'Hello';

//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('Hello'), 1000);
//   });

//   const error = true;

//   if (!error) {
//     const res = await promise; // wait until the promise is resolved (which will be 1s)
//     return res;
//   } else {
//     await Promise.reject(new Error('Something went wrong'));
//   }
// }

// myFunction()
//   .then(res => console.log(res))
//   .catch(err => console.log(err));

async function getUsers() {
  // Await the response of the fetch call
  const response = await fetch('https://jsonplaceholder.typicode.com/users');

  // Only proceed once that promise is resolved
  const data = await response.json();

  // Only proceed once the second promise is resolved
  return data;
}

getUsers().then(users => console.log(users));
