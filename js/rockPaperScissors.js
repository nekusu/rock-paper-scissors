const options = ['rock', 'paper', 'scissors']
const rps = document.querySelectorAll('.rps')
const computerSelectionImg = document.querySelector('#computer-selection')
const score = document.querySelector('#score')
const results = document.querySelector('#results')
const buttons = document.querySelectorAll('button.rps')
const restartButton = document.querySelector('#restart-button')
let playerScore = 0
let computerScore = 0

function computerPlay() {
	const randomIndex = Math.floor(Math.random() * options.length)
	computerSelectionImg.src = `svg/${options[randomIndex]}.svg`
	return options[randomIndex]
}

function restartButtonsScale() {
	buttons.forEach(button => button.classList.remove('selected'))
}

function showResults(result, color) {
	results.textContent = result
	results.style.color = color
}

function updateScore() {
	score.textContent = `${playerScore} - ${computerScore}`
}

function toggleClasses() {
	rps.forEach(rps => rps.classList.toggle('hidden'))
	score.classList.toggle('big')
	results.classList.toggle('big')
	restartButton.classList.toggle('hidden')
}

function checkWinner() {
	if (playerScore >= 5 || computerScore >= 5) {
		toggleClasses()
		restartButtonsScale()
	}
}

function playRound(e) {
	const playerSelection = e.target.parentNode.getAttribute('id')
	const computerSelection = computerPlay()
	const playerSelectionIndex = options.indexOf(playerSelection)
	const computerSelectionIndex = options.indexOf(computerSelection)
	restartButtonsScale()
	e.target.parentNode.classList.toggle('selected')

	if (playerSelectionIndex == computerSelectionIndex + (computerSelectionIndex == 2 ? -2 : 1)) {
		playerScore++
		showResults('You Win!', 'lightgreen')
	} else if (playerSelectionIndex == computerSelectionIndex) {
		showResults('Draw!', 'lightblue')
	} else {
		computerScore++
		showResults('You Lose!', 'pink')
	}

	updateScore()
	checkWinner()
}

function restartGame() {
	playerScore = 0
	computerScore = 0
	computerSelectionImg.src = ''
	updateScore()
	showResults('Select an option', 'rgb(170, 170, 170)')
	toggleClasses()
}

buttons.forEach(button => button.addEventListener('click', playRound))
restartButton.addEventListener('click', restartGame)
