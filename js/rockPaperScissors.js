const options = ['rock', 'paper', 'scissors']

function playerPlay() {
	while (true) {
		playerSelection = prompt('Rock, Paper or Scissors?').toLowerCase()

		if (options.includes(playerSelection))
			return playerSelection
		else
			alert('Please choose between Rock, Paper and Scissors!')
	}
}

function computerPlay() {
	randomIndex = Math.floor(Math.random() * options.length)
	return options[randomIndex]
}

function playRound(playerSelection, computerSelection) {
	const playerSelectionIndex = options.indexOf(playerSelection)
	const computerSelectionIndex = options.indexOf(computerSelection)

	if (playerSelectionIndex == computerSelectionIndex + (computerSelectionIndex == 2 ? -2 : 1))
		return `You Win! ${playerSelection} beats ${computerSelection}.`
	else if (playerSelectionIndex == computerSelectionIndex)
		return `Draw! Both chose ${playerSelection}.`
	else
		return `You Lose! ${computerSelection} beats ${playerSelection}.`
}

function game() {
	for (let i = 0; i < 5; i++) {
		const playerSelection = playerPlay()
		const computerSelection = computerPlay()
		console.log(playRound(playerSelection, computerSelection))
	}
}

game()
