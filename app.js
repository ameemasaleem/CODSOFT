#! /usr/bin/env node
import inquirer from "inquirer";
// 1) Computer will generate a random number - Done
// 2) User input for guessing number - Done
// 3) Compare user input with computer generated number and show result - Done
const randomNumber = Math.floor(Math.random() * 100 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuesedNumber",
        type: "Number",
        message: "Please guess a number between 1-100: ",
    }
]);
if (answers.userGuesedNumber == randomNumber) {
    console.log("Congratulations! you guessed the right number.");
}
else {
    console.log("you guessed the wrong number");
}
let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 5;
let score = 0;
let rounds = 0;
function guess(userGuess) {
    userGuess = parseInt(userGuess);
    if (userGuess === secretNumber) {
        alert("Congratulation! You guessed the number!");
        score++;
        rounds++;
        attempts = 5; //Reset atempts for next round
    }
    else if (userGuess < secretNumber) {
        alert("Too low! Try again.");
        attempts--;
    }
    else if (userGuess > secretNumber) {
        alert("Too high! Try again.");
        attempts--;
    }
    if (attempts === 0) {
        alert("Game over! You ran out of attempts.");
        alert(`Your final score is $ {score} out of ${rounds} rounds`);
    }
}
function playAgain() {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 5;
}
