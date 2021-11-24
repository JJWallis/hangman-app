# Hangman Game

This project was a personal challenge of mine - to build a fully functioning Hangman game

## Table of contents

-  [Overview](#overview)
   -  [The challenge](#the-challenge)
   -  [Screenshot](#screenshot)
   -  [Links](#links)
-  [My process](#my-process)
   -  [Built with](#built-with)
   -  [What I learned](#what-i-learned)
   -  [Continued development](#continued-development)
   -  [Useful resources](#useful-resources)
-  [Author](#author)

## Overview

### The challenge

Your users should be able to:

-  Interact with the 'Start Game' button to begin playing the game
-  Enter their letter of choice & recieve correct validation if invalid
-  Submit their letter of choice and receive confirmation of whether they guessed correctly
-  The timer should terminate after 30 seconds and prompt the user to re-start the game
-  For each incorrect guess, an additional version of the hangman image should be displayed, as well decreasing the number of guesses remaining
-  Each correctly guessed letter should be displayed to the user at its corresponding position in the word

### Screenshot

![](./Screenshot.png)

### Links

-  Live Site URL:

## My process

### Built with

-  Semantic HTML5 markup
-  Flexbox
-  Vanilla JS
-  ES6 Modules

### What I learned

```html
<p id="word-to-guess">
   <span id="letter0">_</span>
   <span id="letter1">_</span>
   <span id="letter2">_</span>
   <span id="letter3">_</span>
</p>
```

Dynamic letter guessing - link with id of span (shows letter at that position)

```html
<pre id="hangman-img" class="hangman">
      +—+
      | |
   
         |
   
         |
   
         |
   
         |
   
   =========
</pre>
```

used pre tag to render - some bugs with controlling positioning of it - img better next time

```css
.error-icon {
   background: url('/images/exclamation-solid.svg') no-repeat 90% center / 4%;
}
```

Validation error showcasing - error icon + red border around input

```js
import hangmanImages from './data.js'
```

1st use of modules - import hangman str designs

```js
timerBegin: () => setInterval(timerCount, 1000),
   timerEnd: () => clearInterval(finish),
```

Timer - useInterval() + callbacks (1st use in project) vs setTimeout() - not as useful | browser issues with setInterval() being off - should use date obj + calculate time from last execution (to more gain realistic second to display to user - carried out in a later Stopwath project via TreeHouse)

```js
const random = () => Math.floor(Math.random() * 9) + 1
const word = words[random()]
functions.element(guess, 'value', '')
return word.split('')
```

returned word to guess - good use of array logic & methods

```js
if (isPlaying) {
   const regex = /[a-z]/g
   if (
      regex.test(val) &&
      val.length === 1 &&
      !correctGuesses.includes(val)
         ) {...}
}
```

Stored correct guesses in arr - needed to add logic to which only adds letter to it if not already present (after 1st adding it however many times it appears in the word) | usr was able to cheat before | 'is' naming convention for funcs returning a boolean (use next time)

Although I had already used regular expressions by this project, I was still proud of my ability to create one on the fly without needing to research how. They can certainly be a very powerful and organised technique to reach for when validating users input.

### Continued development

In regards to storing the words which were used in the game, I chose to hardcode them into an array manually to test if my random number selection logic worked. However, in the future I realise you would pull this kind of data from an external API, which could therefore be much more dynamic in creating different topics and word lengths.

I kept track of the game's 'state' through multiple number variables in the global scope, which in the future I will try to refactor by potentially using an object to contain all of them, or reverse their individual logic for multiple purposes (if one increaes then another should decrease).

I also used ES6 modules to import the string based hangman images into my primary app, yet not for the rest of the project. For future projects I would like to explore refactoring my code further by modelling the whole app with modules, even though at the current time I find it easier to organise myself within one file.

### Useful resources

-  [Pig Game Project](https://www.udemy.com/course/the-complete-javascript-course/) - Completing this game in advance really helped me with a lot of the base logic for games in general, such as only executing the game via boolean logic which determines if it is currently being played (the user has pressed the 'start' button).

-  [JavaScript - ES6 Modules](https://www.youtube.com/watch?v=cRHQNNcYf6s&t=283s&ab_channel=WebDevSimplified) - Kyle's quick crash course like tutorial helped me quickly get up to speed with Modules in JavaScript, focusing on the theory behind how they work and the difference between default & named imports.

## Author

-  Website - [Joshua Jameson-Wallis](https://joshuajamesonwallis.com)
-  Linkedin - [Joshua Jameson-Wallis]()
