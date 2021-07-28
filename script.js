import hangmanImages from './data.js'
const words = ['able','acid','aged','also','area','army','away','baby','band','bank']
const wrapper = document.querySelector('#container')
const title = document.querySelector('#main-title')
const hangman = document.querySelector('#hangman-img')
const txtContainer = document.querySelector('#txt-container')
let triesRemaining = document.querySelector('#tries-remaining')
const guess = document.querySelector('#usrs-input')
const btnCheck = document.querySelector('#button-check')
let wordToGuess = document.querySelector('#word-to-guess')
let counter = 0
let guessesLeft = 6
let isPlaying = true

const functions = {
    element: (el, prop, val) => el[prop] = val
}

// ======================= PLAY GAME ========================

txtContainer.addEventListener('click', e => {
    if (e.target.matches('#button-check')) {
        const input = guess.value
        const valid = validate(value)
        if (valid) playGame()
    }
})

function validate (val) {
    // regular expression - no numbers/special chars + only letters 
    // returns true if pass
    // or prints error mssg + resets input to empty string + return blank value (undefined) 
}

function playGame () {
    if (isPlaying) {
        if (guessesLeft === 0) {
            isPlaying = false
            endGame()
        }
    } 
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
    const btn = btnReset()
    wrapper.append(btn)
    functions.element(title, 'innerText', 'Click the reset button bellow to play again!')
    wordToGuess = '____'
    counter = 0
    guessesLeft = 6
    functions.element(triesRemaining, 'innerText', guessesLeft)
}