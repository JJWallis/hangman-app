# Hangman Game

This was a personal project & challenge of mine - to build a fully functioning Hangman game!

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

-  Press the 'Start Game' button to begin playing
-  Input their letter of choice & recieve correct validation if input is invalid (empty or not a string)
-  Press the 'check' button to submit their letter of choice and recieve confirmation of whether they guessed correctly
-  The timer should terminate after 30 seconds and prompt the user to re-start the game if that time limit is reached
-  Each incorrect guess the user inputs, an additional version of the hangman should be generated & displayed on the page (as well decreasing the number of guesses remaining)
-  Each correctly guessed letter should be displayed at its corresponding position in the word

### Screenshot

![](./Screenshot.png)

### Links

-  Live Site URL:

## My process

### Built with

-  Semantic HTML5 markup
-  Flexbox
-  Mobile-first workflow
-  Vanilla JS

### What I learned

```html
<p id="word-to-guess">
   <span id="letter0">_</span>
   <span id="letter1">_</span>
   <span id="letter2">_</span>
   <span id="letter3">_</span>
</p>
<!-- dynamic word to guess structure -->
```

```css
.error-icon {
   background: url('/images/exclamation-solid.svg') no-repeat 90% center / 4%;
}
/* error styles for input */
```

```js
const random = () => Math.floor(Math.random() * 9) + 1
const word = words[random()]
functions.element(guess, 'value', '')
return word.split('')

// returned word to guess - good use of array logic & methods

const regex = /[a-z]/g
// validate usr input
```

### Continued development

Not to use 'id' selectors in CSS (too specific)

Used multiple counters - not necessary as could base our logic off less amount (+ reverse logic to use in multiple places)

Modules accross whole project

### Useful resources

-  [Pig Game Project](https://www.udemy.com/course/the-complete-javascript-course/) - Completing this game first really helped me with a lot of the base logic for games in general, such as only running the game if it is still being played (via boolean logic).

## Author

-  Website - [Joshua Jameson-Wallis](https://joshuajamesonwallis.com)
-  Linkedin - [Joshua Jameson-Wallis]()

###### TODO

HTML:

CSS:

Validation error showcasing - error icon + red border around input |

JS:

1st use of modules - import hangman str designs (used pre tag to render - some bugs with controlling positioning of it - img better next time) | didn't use for rest of project - reminder for why to use it

Dynamic letter guessing - link with id of span (shows letter at that position)

Timer - useInterval() + callbacks practice (1st use in project) vs setTimeout() - not as useful | browser issues with setInterval() being off - should use date obj + calculate time from last execution (to more gain realistic second to display to usr)

Words collection - next time fetch data from API vs hardcode (or even Github CoPilot AI) + greater range |

Stored correct guesses in arr - needed to add logic to which only adds letter to it if not already present (after 1st adding it however many times it appears in the word) | usr was able to cheat before

'is' naming convention for funcs returning a boolean (use next time)
