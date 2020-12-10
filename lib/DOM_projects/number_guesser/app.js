/*
GAME RULES:
- Player must guess a number between a min and max
- Player gets a certain amount of guesses
- Notify player of guesses remaining
- Notify the player of the correct answer if loose
- Let player choose to play again
*/

// Game values
const min = 1;
const max = 10;
const winningNum = getRandomNum(min, max);
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

// Play again event listener
// Event delegation needed:
// Put an event listener on a parent element of what you are looking for
// Create a condition and find the right target
game.addEventListener('mousedown', function(e) {
  if (e.target.className === 'play-again') {
    window.location.reload();
  }
});

// Listen for guess
guessBtn.addEventListener('click', function() {
  const guess = parseInt(guessInput.value);
  // validate the input
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}.`, 'red');
  }

  // Check if won
  if (guess === winningNum) {
    // Game over - you win
    gameOver(true, `${winningNum} is correct! YOU WON!`);
  } else {
    // Wrong number
    guessesLeft -= 1;

    if (guessesLeft === 0) {
      // Game over - you lost
      gameOver(false, `Game over, you lost! The correct number was ${winningNum}`);
    } else {
      // Game continues - answer wrong
      // Tell the user he/she chose the wrong number
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

function gameOver(won, msg) {
  let color;
  won === true ? color = 'MediumSeaGreen' : color = 'red';
  // Disable input
  guessInput.disabled = true;
  // Change border color to green
  guessInput.style.borderColor = color;
  // Change the font color
  message.style.color = color;
  // Tell the user that he/she won
  setMessage(msg);

  // Play again?
  guessBtn.value = 'Play again?';
  guessBtn.className += 'play-again';
}

function getRandomNum(min, max) {
  return Math.floor(min + Math.random() * max);
}
