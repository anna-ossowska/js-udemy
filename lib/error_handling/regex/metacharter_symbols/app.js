let re;
// Literal Characters
re = /hello/;
re = /hello/i;

// Metacharacter symbols
re = /^h/i; // Must start with
re = /\sworld$/i; // Must end with
re = /^hello$/i; // Must begin and end with
re = /^he.lo$/i; // Matches any ONE character
re = /h*llo/i; // Matches any character 0 or more times
re = /gre?a?y/i; // Optional character
re = /gray\?/i; // Escape character

// String to match
const str = 'gray?';

// Log results
const result = re.exec(str);
console.log(result);

function reTest(re, str) {
  if (re.test(str)) {
    console.log(`The string matches the ${re.source}`);
  } else {
    console.log(`The string does not match the ${re.source}`);
  }
}

reTest(re, str);
