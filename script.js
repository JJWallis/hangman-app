import hangmanImages from './data.js'
const words = ['able','acid','aged','also','area','army','away','baby','band','bank']
const gameContainer = document.querySelector('.container')
const wrapper = document.querySelector('#container')
const title = document.querySelector('#main-title')
const subTitle = document.querySelector('.sub-title')
const hangman = document.querySelector('#hangman-img')
let triesRemaining = document.querySelector('#tries-remaining')
let guess = document.querySelector('#usrs-input')
let timerTxt = document.querySelector('#timer')
let correctGuesses = [] // stored on word class - must identify current player (stored on Player class instance?)
let hangmanCounter = 0 
let guessesLeft = 6
let timer = 0
let finish = null
let isPlaying = true

const functions = {
    element(el, prop, val) { 
        el[prop] = val 
    },
    classList: (el, prop, val, val1) => el.classList[prop](val, val1),
    timerBegin: () => setInterval(timerCount , 1000),
    timerEnd: () => clearInterval(finish)
}

function chooseWord() {
    const random = () => Math.floor(Math.random() * 9) + 1
    const word = words[random()]
    functions.element(guess, 'value', '')
    return word.split('')
}

const word = chooseWord()
console.log(word)

// ========================= TIMER ========================

const timerCount = () => {
    timer ++ 
    functions.element(timerTxt, 'innerText', timer)
    if (timer === 30) {
        functions.timerEnd()
        endGame()
    }
}

// ======================= VALIDATE ========================

document.querySelector('body').addEventListener('click', e => {
    const target = e.target

    if (target.matches('#btn-start')) {
        functions.classList(target, 'add', 'hidden')
        functions.classList(gameContainer, 'remove', 'hidden')
        finish = functions.timerBegin() 
    }

    if (target.matches('#button-check')) {
        const input = guess.value
        const valid = isValid(input) 
        if (valid) playGame(input) 
        guess.value = ''
    } 
    
    if (target.matches('#reset-button')) reset()
})

function isValid(val) {
    const error = document.querySelectorAll('.error')
    const parent = document.querySelector('.interaction-container')
    const regex = /[a-z]/g
    if (isPlaying) {
        if (regex.test(val) && val.length === 1 && !correctGuesses.includes(val)) {
            truthy(error)
            return true
        } 
        falsy(parent)
    }
}

const truthy = error => {
    if (error.length > 0) {
        error.forEach(el => el.remove()) 
        functions.classList(guess, 'remove', 'error-border', 'error-icon')
        guess.placeholder = 'Enter guess here...'
    }
}

const falsy = parent => {
    const errorMsg = document.createElement('p')
    functions.element(errorMsg, 'innerText', 'Please enter a valid single letter in lower case only once')
    functions.element(title, 'innerText', 'Nice try...')
    functions.classList(errorMsg, 'add', 'error', 'error-msg')
    if (parent.children.length === 2) parent.append(errorMsg)
    functions.classList(guess, 'add', 'error-border', 'error-icon')
    guess.placeholder = 'Try again...'
}

// ======================= PLAY GAME ========================

function playGame(guess) {
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

function fillWord(guess, index) {
    const correctLetter = document.querySelector(`#letter${index}`)
    correctLetter.innerText = guess
}

// ======================= END GAME ==========================

function endGame(win) {
    const btn = document.createElement('button')
    wrapper.append(btnReset(btn))
    functions.element(title, 'innerHTML', win ? 'Congratulations, you won the game!' : 
    `Looser! Click reset to play again! <br> The correct word was '${word.join('')}'!`)
    functions.classList(subTitle, 'toggle', 'hidden')
    functions.timerEnd()
}

const btnReset = btn => {
    functions.element(btn, 'type', 'button')
    functions.element(btn, 'textContent', 'Reset')
    functions.element(btn, 'className', 'reset')
    functions.element(btn, 'id', 'reset-button')
    return btn
}

function reset() {
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
    functions.classList(subTitle, 'toggle', 'hidden')
    timer = 0
    functions.element(timerTxt, 'innerText', timer)
    finish = functions.timerBegin()
    chooseWord()
    console.log(word)
}