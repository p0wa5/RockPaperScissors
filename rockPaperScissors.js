

let userScore = 0;
let botScore = 0;


// function to pick a random number from choices list
Array.prototype.random = function() {
	return this[Math.floor((Math.random()*this.length))];
}


computerPlay = function() {
	choices = ["Rock", "Paper", "Scissors"]
	let computerSelection = choices.random();
	return computerSelection;
}


playGame = function(computerSelection) {


	let computerMove  = computerPlay();
	let playerSelection = window.prompt("Rock, Paper or Scissors ?");


	if (playerSelection == computerMove){
		console.log(`You picked ${playerSelection}. Computer picked ${computerMove}. It's a tie!`);
		console.log(`Computer Score: ${botScore} Your Score: ${userScore}`);
	}else if (playerSelection == "Rock" && computerMove == "Scissors"){
		console.log(`You picked ${playerSelection}. Computer picked ${computerMove}. You win !`);
		userScore++;
		console.log(`Computer Score: ${botScore} Your Score: ${userScore}`);
	}else if (playerSelection == "Rock" && computerMove == "Paper"){
		console.log(`You picked ${playerSelection}. Computer picked ${computerMove}. Computer wins !`);
		botScore++;
		console.log(`Computer Score: ${botScore} Your Score: ${userScore}`);
	}else if (playerSelection == "Scissors" && computerMove == "Rock"){
		console.log(`You picked ${playerSelection}. Computer picked ${computerMove}. Computer wins !`);
		botScore++;
		console.log(`Computer Score: ${botScore} Your Score: ${userScore}`);
	}else if (playerSelection == "Paper" && computerMove == "Rock"){
		console.log(`You picked ${playerSelection}. Computer picked ${computerMove}. You win !`);
		userScore++;
		console.log(`Computer Score: ${botScore} Your Score: ${userScore}`);
	}else if (playerSelection == "Scissors" && computerMove == "Paper"){
		console.log(`You picked ${playerSelection}. Computer picked ${computerMove}. You win !`);
		userScore++;
		console.log(`Computer Score: ${botScore} Your Score: ${userScore}`);
	}else if (playerSelection == "Paper" && computerMove == "Scissors"){
		console.log(`You picked ${playerSelection}. Computer picked ${computerMove}. computer wins`);
		botScore++;
		console.log(`Computer Score: ${botScore} Your Score: ${userScore}`);
	}
}


// Game Loop
game = function () {
	let rounds = 0;

	while (rounds <= 5) {
		playGame(computerPlay);
		rounds++;
	}
	if (userScore > botScore) {
		console.log("You won the Game!");
	} else if (botScore > userScore) {
		console.log("You lost the Game!");
	}else if (userScore == botScore) {
		console.log("Tie, no one wins!");
	}
}

game();