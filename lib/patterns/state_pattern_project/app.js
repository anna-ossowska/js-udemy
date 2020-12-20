/* eslint-disable no-unused-vars */

const PageState = function() {
  let currentState = new HomeState(this); // 'this' refers to the instance of PageState

  this.init = function() {
    this.change(new HomeState());
  };

  this.change = function(state) {
    currentState = state;
  };
};

// Home State
const HomeState = function(page) {
  document.querySelector('#heading').textContent = null;
  document.querySelector('#content').innerHTML = `
    <div class="jumbotron">
      <h1 class="display-4">Hello, world!</h1>
      <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
      <hr class="my-4">
      <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
      <p class="lead">
        <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
      </p>
    </div>
  `;
};

// About state
const AboutState = function(page) {
  document.querySelector('#heading').textContent = 'About us';
  document.querySelector('#content').innerHTML = `
    <p>This is the about page</p>
  `;
};

// Contact state
const ContactState = function (page) {
  document.querySelector('#heading').textContent = 'Contact us';
  document.querySelector('#content').innerHTML = `
    <form>
      <div class="form-group">
        <label>Name</label>
        <input type="text" class="form-control">
      </div>
      <div class="form-group">
      <label>Email address</label>
      <input type="email" class="form-control">
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
  `;
};

// Instantiate PageState
const page = new PageState();

// Init the first state
page.init();

// UI Variables
const home = document.getElementById('home');
const about = document.getElementById('about');
const contact = document.getElementById('contact');

// Home
home.addEventListener('click', (e) => {
  page.change(new HomeState());

  e.preventDefault();
});

// About
about.addEventListener('click', (e) => {
  page.change(new AboutState());

  e.preventDefault();
});

// Contact
contact.addEventListener('click', (e) => {
  page.change(new ContactState());

  e.preventDefault();
});
