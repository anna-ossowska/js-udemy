
/* eslint-disable no-unused-vars */
/* eslint-disable prefer-const */
/*
GAME RULES:
- Player must guess a number between a min and max
- Player gets a certain amount of guesses
- Notify player of guesses remaining
- Notify the player of the correct answer if loose
- Let player choose to play again
*/

// Game values
let min = 1;
let max = 10;
let winningNum = 2;
let guessesLeft = 3;

// UI
const game = document.querySelector('#game');
const minNum = document.querySelector('.min-num');
const maxNum = document.querySelector('.max-num');
const guessInput = document.querySelector('#guess-input');
const guessBtn = document.querySelector('#guess-btn');
const message = document.querySelector('.message');

// Assign UI min and max
minNum.innerText = min;
maxNum.innerText = max;

// Listen for guess
guessBtn.addEventListener('click', function() {
  let guess = parseInt(guessInput.value);
  // validate the input
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}.`, 'red');
  }

  // Check if won
  if (guess === winningNum) {
    // Game over - you win
    // Disable input
    guessInput.disabled = true;
    // Change border color to green
    guessInput.style.borderColor = 'MediumSeaGreen';
    // Tell the user that he/she won
    setMessage(`${winningNum} is correct! YOU WON!`, 'MediumSeaGreen');
  } else {
    // Wrong number
    guessesLeft -= 1;
    if (guessesLeft === 0) {
      // Game over - you loose
      guessInput.disabled = true;
      // Change border color to green
      guessInput.style.borderColor = 'red';
      // Tell the user that he/she lost
      setMessage(`${winningNum} is incorrect. You lost! The correct number was ${winningNum}`, 'red');
    } else {
      // Game continues - answer wrong
      // Tell the user it's the wrong number
      setMessage(`${guess} number is not correct. ${guessesLeft} guesses left.`, 'red');
      // Change border color to green
      guessInput.style.borderColor = 'red';
      // Clear input
      guessInput.value = '';
    }
  }
});

// Set message
function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}
