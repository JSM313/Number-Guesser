// GAME VALUES
let min = 1,
  max = 10,
  winningNum = 2,
  guessesLeft = 3;

// UI ELEMENTS

const game = document.querySelector("#game"),
  minNum = document.querySelector(".min-num"),
  maxNum = document.querySelector(".max-num"),
  guessButton = document.querySelector("#guess-btn"),
  guessInput = document.querySelector("#guess-input"),
  message = document.querySelector(".message");

// Assigning min and max numbers from the console to the UI

minNum.innerText = min;
maxNum.innerText = max;

// Listening for click on Submit

guessButton.addEventListener("click", function () {
  let guess = parseInt(guessInput.value);

  // Validating the input
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} & ${max}`, "red");
  }

  // Check if the number entered is the correct Number or not
  if (guess === winningNum) {
    // disable the input
    guessInput.disabled = true;

    // Changing the border color to green
    guessInput.style.borderColor = "green";

    // Setting up a winning message
    setMessage(
      `Yippe!! You Guessed it right!!! ${winningNum} is the correct number`,
      "green"
    );
  } else {
  }
});

// Creating the set message function
function setMessage(msg, color) {
  message.style.color = color;
  message.innerText = msg;
}
