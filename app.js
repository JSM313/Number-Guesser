// GAME VALUES
let min = 1,
  max = 10,
  winningNum = getRandomWinningNum(min, max),
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

// Play Again Event Listener
game.addEventListener("mousedown", function (e) {
  if (e.target.className === "play-again") {
    window.location.reload();
  }
});

// Listening for click on Submit

guessButton.addEventListener("click", function () {
  let guess = parseInt(guessInput.value);

  // Validating the input
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} & ${max}`, "red");
  }

  // Check if the number entered is the correct Number or not
  else if (guess === winningNum) {
    gameOver(true, `${winningNum} is correct.. You Won`);
  } else {
    // * The Loose Case
    // Wrong Number
    guessesLeft--;

    if (guessesLeft === 0) {
      // game over -lost
      gameOver(
        false,
        `Game Over :( You Lost.. The correct Number was ${winningNum}`
      );
    } else {
      // Continue the game

      guessInput.style.borderColor = "red";

      // Clear the input

      guessInput.value = "";

      setMessage(
        `${guess} is not correct, ${guessesLeft} guesses left`,
        "crimson"
      );
    }
  }
});

// Creating the set message function
function setMessage(msg, color) {
  message.style.color = color;
  message.innerText = msg;
}

// Creating a game over function
function gameOver(won, msg) {
  // won is in the form of boolean value and msg is the text which will be passed
  guessInput.disabled = "true";

  let color;
  won === true ? (color = "green") : (color = "red");

  guessInput.disabled = true;

  // message.style.color = color;

  message.style.borderColor = color;

  setMessage(msg, color);

  // PLAY AGAIN CASE
  guessButton.value = "Play Again";
  guessButton.className += "play-again";
}

// Generate a random winning number
function getRandomWinningNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
