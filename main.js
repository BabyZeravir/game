// Number Guessing Game

// Generate a random number between 1 and 10
const secretNumber = Math.floor(Math.random() * 10) + 1;

// Function to handle the user's guess
function guessNumber() {
  // Get user input
  const userInput = document.getElementById("userInput").value;
  
  // Check if the input is a valid number
  if (isNaN(userInput) || userInput < 1 || userInput > 10) {
    setMessage("Please enter a valid number between 1 and 10.", "red");
    return;
  }

  // Check the guess and provide feedback
  const result = checkGuess(parseInt(userInput));
  setMessage(result.message, result.color);
}

// Function to check if the guess is correct
function checkGuess(guess) {
  if (guess === secretNumber) {
    return { message: "Congratulations! You guessed the correct number!", color: "green" };
  } else {
    return { message: `Wrong guess. Try again.`, color: "red" };
  }
}

// Function to set the message and color
function setMessage(message, color) {
  document.getElementById("message").textContent = message;
  document.getElementById("message").style.color = color;
}
