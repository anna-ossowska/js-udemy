let val;

// Document properties
val = document;
val = document.head;
val = document.body;
val = document.doctype;
val = document.domain;
val = document.URL;
val = document.characterSet;
val = document.contentType;

// Selecting items without using the selectors
// forms
val = document.forms;
val = document.forms[0];
val = document.forms[0].id;
val = document.forms[0].method;
val = document.forms[0].action;

// links
val = document.links;
val = document.links[0];
val = document.links[0].id;
val = document.links[0].className;
val = document.links[0].classList[0];

// images
val = document.images;

// scripts
val = document.scripts;
val = document.scripts[2].getAttribute('src');

// HTML collection is an array-like object but by default it's not possible to iterate over it
// Here is a trick to make it possible:
const scripts = document.scripts;
const scriptsArr = Array.from(scripts);

scriptsArr.forEach(function (script) {
  console.log(script.getAttribute('src'));
});

console.log(val);
