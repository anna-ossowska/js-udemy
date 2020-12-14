document.getElementById('button1').addEventListener('click', getText);

document.getElementById('button2').addEventListener('click', getJson);

document.getElementById('button3').addEventListener('click', getExternal);

// Get local text file data
function getText() {
  fetch('test.txt')
    .then(res => res.text())
    .then(data => {
      // console.log(data);
      document.getElementById('output').innerHTML = data;
    })
    .catch(err => console.log(err));
};

// Get local JSON data
function getJson() {
  fetch('posts.json')
    .then(res => res.json())
    .then(data => {
      // console.log(data);
      let output = '';
      data.forEach(obj => {
        output += `
        <ul>
          <li>${obj.title}: ${obj.body}</li>
        </ul>
        `;
        document.getElementById('output').innerHTML = output;
      });
    })
    .catch(err => console.log(err));
};

// Get from external API
function getExternal() {
  fetch('https://api.github.com/users')
    .then(res => res.json())
    .then(data => {
      // console.log(data);
      let output = '';
      data.forEach(user => {
        output += `
        <ul>
          <li>${user.login}</li>
        </ul>
        `;
        document.getElementById('output').innerHTML = output;
      });
    })
    .catch(err => console.log(err));
}
