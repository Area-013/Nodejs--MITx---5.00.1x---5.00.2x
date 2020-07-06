
// http request . transfer protocol 
// request 
// response 

const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
const game1 = new Hangman('Car parts', 2)

puzzleEl.textContent = game1.puzzle
guessesEl.textContent = game1.statusMessage

window.addEventListener('keypress', function (e) {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    puzzleEl.textContent = game1.puzzle
    guessesEl.textContent = game1.statusMessage
})

// http request
const request = new XMLHttpRequest()

request.addEventListener('readystatechange', (e) => {
	if (e.target.readyState === 4) {
		const data = JSON.parse(e.target.responseText)
		console.log(datas)
	}
})


request.open('GET', 'http://puzzle.mead.io/puzzle')
request.send()