const options = ['rock', 'paper', 'scissors']
const results = document.querySelector('#results')

function computerPlay() {
	const randomIndex = Math.floor(Math.random() * options.length)
	return options[randomIndex]
}

function showResults(result, color) {
	results.textContent = result
	results.style.color = color
}

function playRound(e) {
	const playerSelection = e.target.parentNode.getAttribute('id')
	const computerSelection = computerPlay()
	const playerSelectionIndex = options.indexOf(playerSelection)
	const computerSelectionIndex = options.indexOf(computerSelection)

	if (playerSelectionIndex == computerSelectionIndex + (computerSelectionIndex == 2 ? -2 : 1)) {
		showResults('You Win!', 'green')
	} else if (playerSelectionIndex == computerSelectionIndex) {
		showResults('Draw!', 'blue')
	} else {
		showResults('You Lose!', 'red')
	}
}

const buttons = document.querySelectorAll('button')
buttons.forEach(button => button.addEventListener('click', playRound))
