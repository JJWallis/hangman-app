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
                if (correctGuesses.length === 4) {
                    isPlaying = false
                    endGame(correctlyGuessed) // TEST 
                    break
                }
            } else {


                if (guessesLeft === 0) {
                    isPlaying = false
                    endGame()
                    break
                }
            }
        }
    } 
}

function printSuccessMsg (guess, index) {
    const correctLetter = document.querySelector(`#letter${index}`)
    correctLetter.innerText = guess
}

// ======================= END GAME ==========================

txtContainer.addEventListener('click', e => {
    if (e.target.matches('.reset')) {
        reset()
    }
})

function endGame (win) {
    const btn = btnReset()
    function btnReset () {
        const btn = document.createElement('button')
        functions.element(btn, 'type', 'button')
        functions.element(btn, 'textContent', 'Reset')
        functions.element(btn, 'className', 'reset')
        return btn
    }
    wrapper.append(btn)
    functions.element(title, 'innerText', win ? 'Congratulations, you won the game!' : 'Looser! Click reset to play again!')
}

function reset () {
    const letters = document.querySelectorAll('span')
    letters.forEach( el => functions.element(el, 'innerText', '_') )
    functions.element(triesRemaining, 'innerText', guessesLeft)
    counter = 0
    guessesLeft = 6
    correctGuesses = []
    isPlaying = true
    chooseWord()
}