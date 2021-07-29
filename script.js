import hangmanImages from './data.js'
const words = ['able','acid','aged','also','area','army','away','baby','band','bank']
const wrapper = document.querySelector('#container')
const title = document.querySelector('#main-title')
const hangman = document.querySelector('#hangman-img')
let triesRemaining = document.querySelector('#tries-remaining')
let guess = document.querySelector('#usrs-input')
let correctGuesses = []
let hangmanCounter = 0 
let guessesLeft = 6
let isPlaying = true

const functions = {
    element: (el, prop, val) => el[prop] = val,
    classList: (el, prop, val) => el.classList[prop](val)
}

function chooseWord () {
    const random = () => Math.floor(Math.random() * 9) + 1
    const word = words[random()]
    return [...word] // split() instead 
}

const word = chooseWord()
console.log(word)

// ======================= VALIDATE ========================

wrapper.addEventListener('click', e => {
    const target = e.target
    if (target.matches('#button-check')) {
        const input = guess.value
        const valid = isValid(input) 
        if (valid) playGame(input) 
        guess.value = ''
    } 
    
    if (target.matches('#reset-button')) {
        reset()
    }
})

function isValid (val) {
    const error = document.querySelectorAll('.error')
    const parent = document.querySelector('.interaction-container')
    const regex = /[a-z]/g

    if (regex.test(val) && val.length === 1) {
        if (error.length > 0) {
            error.forEach(el => el.remove()) 
            guess.classList.remove('error-border', 'error-icon')
            guess.placeholder = 'Enter guess here...'
        }
        return true
    } 

    const errorMsg = document.createElement('p')
    functions.element(errorMsg, 'innerText', 'Please enter a valid single letter in lower case')
    errorMsg.classList.add('error', 'error-msg')
    if (parent.children.length === 2) parent.append(errorMsg)
    guess.classList.add('error-border', 'error-icon')
    guess.placeholder = 'Try again...'

}

// ======================= PLAY GAME ========================

function playGame (guess) {
    if (isPlaying) {
        let correctlyGuessed = false
        for (let i = 0; i < word.length; i++) {
            if (guess === word[i]) {
                correctlyGuessed = true 
                correctGuesses.push(guess)
                fillWord(guess, i) 
                functions.element(title, 'innerText', 'Correct! Keep going!')
                if (correctGuesses.length === 4) {
                    isPlaying = false
                    endGame(correctlyGuessed) 
                    break
                }
            } 
        } 
        
        if (!correctlyGuessed) {
            guessesLeft --
            functions.element(triesRemaining, 'innerText', guessesLeft)
            hangmanCounter ++
            hangman.innerText = hangmanImages[`num${hangmanCounter}`]
            functions.element(title, 'innerText', 'Wrong! Try again!')
            if (guessesLeft === 0) {
                isPlaying = false
                endGame()
            }
        }
    } 
}

function fillWord (guess, index) {
    const correctLetter = document.querySelector(`#letter${index}`)
    correctLetter.innerText = guess
}

// ======================= END GAME ==========================

function endGame (win) {
    const btn = btnReset()
    function btnReset () {
        const btn = document.createElement('button')
        functions.element(btn, 'type', 'button')
        functions.element(btn, 'textContent', 'Reset')
        functions.element(btn, 'className', 'reset')
        functions.element(btn, 'id', 'reset-button')
        return btn
    }
    wrapper.append(btn)
    functions.element(title, 'innerText', win ? 'Congratulations, you won the game!' : 'Looser! Click reset to play again!')
}

function reset () {
    const letters = document.querySelectorAll('span')
    document.querySelector('#reset-button').remove()
    hangmanCounter = 0
    guessesLeft = 6
    correctGuesses = []
    isPlaying = true
    hangman.innerText = hangmanImages[`num0`]
    functions.element(triesRemaining, 'innerText', guessesLeft)
    letters.forEach( el => functions.element(el, 'innerText', '_') )
    functions.element(title, 'innerText', 'Welcome to Hangman!')
    chooseWord()
    console.log(word)
}