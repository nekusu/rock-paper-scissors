const options = ['rock', 'paper', 'scissors']

function computerPlay() {
	const randomIndex = Math.floor(Math.random() * options.length)
	return options[randomIndex]
}

function playRound(e) {
	const playerSelection = e.target.parentNode.getAttribute('id')
	const computerSelection = computerPlay()
	const playerSelectionIndex = options.indexOf(playerSelection)
	const computerSelectionIndex = options.indexOf(computerSelection)

	if (playerSelectionIndex == computerSelectionIndex + (computerSelectionIndex == 2 ? -2 : 1))
		console.log(`You Win! ${playerSelection} beats ${computerSelection}.`)
	else if (playerSelectionIndex == computerSelectionIndex)
		console.log(`Draw! Both chose ${playerSelection}.`)
	else
		console.log(`You Lose! ${computerSelection} beats ${playerSelection}.`)
}

const buttons = document.querySelectorAll('button')
buttons.forEach(button => button.addEventListener('click', playRound))
