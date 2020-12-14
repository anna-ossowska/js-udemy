// mimicking the db server
const posts = [
  { title: 'Post One', body: 'This is post one' },
  { title: 'Post Two', body: 'This is post two' }
];

// SYNCHRONOUS
// mimicking the server's response with setTimeout
// function createPost(post) {
//   setTimeout(function() {
//     posts.push(post);
//   }, 2000);
// }

// // mimicking the server's response with setTimeout
// function getPosts() {
//   setTimeout(function() {
//     let output = '';
//     posts.forEach(function(post) {
//       output += `<li>${post.title}</li>`;
//     });
//     document.body.innerHTML = output;
//   }, 1000);
// }

// createPost({title: 'Post Three', body: 'This is post three' });
// getPosts();

// ASYNCHRONOUS
function createPost(post) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      posts.push(post);

      const error = false;

      if (!error) {
        resolve();
      } else {
        reject(new Error('Error: Something went wrong'));
      }
    }, 2000);
  });
};

function getPosts() {
  setTimeout(function() {
    let output = '';
    posts.forEach(function(post) {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

createPost({ title: 'Post Three', body: 'This is post three' })
  .then(getPosts)
  .catch(function(error) {
    console.log(error);
  });
