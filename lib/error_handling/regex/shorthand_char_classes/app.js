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

// Brackets [] - Character sets
re = /gr[ae]y/i; // Must be an a or e
re = /[GF]ray/i; // Must be a G or F
re = /[^GF]ray/i; // Match anything except a G or F
re = /[A-Z]ray/; // Match any uppercase letter
re = /[a-z]ray/i; // Match any lowercase letter
re = /[A-Za-z]ray/i; // Match any letter
re = /[0-9]ray/i; // Match any digit

// Braces {} - Quantifiers
re = /Hel{2}o/i; // Must occur exactly {m} amount of times
re = /Hel{2,4}o/i; // Must occur exactly {m} amount of times
re = /Hel{2,}o/i; // Must occur at least {m} amount of times

// Parentheses () - Grouping
re = /^([0-9]x){3}$/;

// Shorthand Character Classes
re = /\w/; // Word Charcter - alphanumeric (any letter, number or _)
re = /\w+/; // One or more
re = /\W/; // Non-word character
re = /\d/; // Match any digit
re = /\d+/; // Match any digit 0 or more times
re = /\D*/; // Match any non digit
re = /\s/; // Match whitespace/tab character
re = /\S*/; // Match any non-whitespace character
re = /Hell\b/i; // Word boundary

// Assertions
re = /x(?=y)/; // Match x only if it's followed by y
re = /x(?!y)/; // Match x only if NOT followed by y

// String to match
const str = 'fexyve';

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
