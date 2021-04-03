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

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
	button.addEventListener('click', () => {
		let userClick = button.textContent;
		printHelloWorld(userClick);
	})
})

printHelloWorld = function(user) {
	let botChoice = computerPlay();
	const hTie = document.querySelector('.idk');
	const counter = document.querySelector('.counter');
	console.log(user, botChoice);
	if (botChoice == user) {
		hTie.textContent = "Its a Tie";
		counter.textContent = `You: ${userScore} : CPU ${botScore}`;
	} else if (user == "Scissors" && botChoice == "Rock") {
		hTie.textContent = `${user} vs ${botChoice}: You loose !`;
		botScore++
		counter.textContent = `You: ${userScore} : CPU ${botScore}`;
	} else if (user == "Scissors" && botChoice == "Paper") {
		hTie.textContent = `${user} vs ${botChoice}: You win !`;
		userScore++
		counter.textContent = `You: ${userScore} : CPU ${botScore}`;
	} else if (user == "Rock" && botChoice == "Paper") {
		hTie.textContent = `${user} vs ${botChoice}: You loose !`;
		botScore++
		counter.textContent = `You: ${userScore} : CPU ${botScore}`;
	} else if (user == "Rock" && botChoice == "Scissors") {
		hTie.textContent = `${user} vs ${botChoice}: You win !`;
		userScore++
		counter.textContent = `You: ${userScore} : CPU ${botScore}`;
	} else if (user == "Paper" && botChoice == "Rock") {
		hTie.textContent = `${user} vs ${botChoice}: You win !`;
		userScore++
		counter.textContent = `You: ${userScore} : CPU ${botScore}`;
	} else if (user == "Paper" && botChoice == "Scissors") {
		hTie.textContent = `${user} vs ${botChoice}: You loose`;
		botScore++
		counter.textContent = `You: ${userScore} : CPU ${botScore}`;
	}

	checkForWin();
}

checkForWin = function() {
	console.log(`current Score is: ${userScore} : ${botScore}`)
	if (userScore == 5) {
		console.log("you won the game")
		botScore = 0;
		userScore = 0;
	} else if (botScore == 5) {
		console.log("You lost the game");
		botScore = 0;
		userScore = 0;
	}
}


