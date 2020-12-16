// Instantiate Github
const github = new Github();

// Search input
const searchUser = document.getElementById('searchUser');

// Search input event  listener
searchUser.addEventListener('keyup', (e) => {
  // Get the text that is typed in
  const userText = e.target.value;
  if (userText !== '') {
    // make HTTP call
    github.getUser(userText)
      .then(data => {
        if (data.profile.message === 'Not Found') {
          // Show an alert

        } else {
          // Show the profile
        }
      });
  } else {
    // Clear the profile
    
  }
});
