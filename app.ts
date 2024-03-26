#! usr/bin/env node

import inquirer from 'inquirer';

async function playGuessingGame() {
  let randomNumber = Math.floor(Math.random() * 20 + 1);

  while (true) {
    const answers = await inquirer.prompt([
      {
        name: "userGuessNo",
        type: "number",
        message: "Guess a number between 1-20:",
      },
    ]);

    if (answers.userGuessNo === randomNumber) {
      console.log("Congrats! Your guess is correct!");
      break; // Exit the loop if the guess is correct
    } else {
      console.log("Better luck next time.");
    }

    const restartPrompt = await inquirer.prompt([
      {
        name: "restart",
        type: "confirm",
        message: "Do you want to play again?",
      },
    ]);

    if (!restartPrompt.restart) {
      console.log("Thanks for playing!");
      break; // Exit the loop if the user doesn't want to restart
    }
  }
}

playGuessingGame();


