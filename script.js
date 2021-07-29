import hangmanImages from './data.js'
const words = ['able','acid','aged','also','area','army','away','baby','band','bank']
const wrapper = document.querySelector('#container')
const title = document.querySelector('#main-title')
const hangman = document.querySelector('#hangman-img')
const txtContainer = document.querySelector('#txt-container')
let triesRemaining = document.querySelector('#tries-remaining')
let guess = document.querySelector('#usrs-input')
const btnCheck = document.querySelector('#button-check')
let correctGuesses = []
let hangmanCounter = 0 
let guessesLeft = 6
let isPlaying = true

const functions = {
    element: (el, prop, val) => el[prop] = val
}

function chooseWord () {
    const random = () => Math.floor(Math.random() * 9) + 1
    const word = words[random()]
    return [...word]
}

const word = chooseWord()
console.log(word)

// ======================= PLAY GAME ========================

txtContainer.addEventListener('click', e => {
    if (e.target.matches('#button-check')) {
        const input = guess.value
        // const valid = validate(input) if (valid)
        playGame(input) 
        guess.value = ''
    }
})

// function validate (val) {
//     // removes any current error mssgs/styling present
//     // regular expression - no numbers/special chars + only letters 
//     // returns true if pass
//     // or prints error mssg + resets input to empty string + return blank value (undefined) 
// }

function playGame (guess) {
    if (isPlaying) {
        let correctlyGuessed = false
        for (let i = 0; i < word.length; i++) {
            if (guess === word[i]) {
                correctlyGuessed = true 
                correctGuesses.push(guess)
                printSuccessMsg(guess, i) 
            }
        }






        if (guessesLeft === 0) {
            isPlaying = false
            endGame()
        }
    } 
}

function printSuccessMsg (guess, index) {
    const correctLetter = document.querySelector(`#letter${index}`)
    correctLetter.innerText = guess
}













// ======================= END GAME ==========================

function btnReset () {
    const btn = document.createElement('button')
    functions.element(btn, 'type', 'button')
    functions.element(btn, 'textContent', 'Reset')
    functions.element(btn, 'className', 'reset')
    return btn
}

function endGame () {
    const letters = document.querySelectorAll('span')
    const btn = btnReset()
    wrapper.append(btn)
    functions.element(title, 'innerText', 'Click the reset button bellow to play again!')
    wordToGuess = '____'
    counter = 0
    guessesLeft = 6
    functions.element(triesRemaining, 'innerText', guessesLeft)
    letters.forEach( el => functions.element(el, 'innerText', '_') )
    chooseWord()
}