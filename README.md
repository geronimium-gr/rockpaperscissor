# Frontend Mentor - Rock, Paper, Scissors solution

This is a solution to the [Rock, Paper, Scissors challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rock-paper-scissors-game-pTgwgvgH). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the game depending on their device's screen size
- Play Rock, Paper, Scissors against the computer
- Maintain the state of the score after refreshing the browser _(optional)_
- **Bonus**: Play Rock, Paper, Scissors, Lizard, Spock against the computer _(optional)_

### Screenshot

![image](https://user-images.githubusercontent.com/77067773/202909384-86348a2c-a964-4153-b508-15c4683b1451.png)

### Links

- Solution URL: [Github Repo](https://github.com/geronimium-gr/rockpaperscissor)
- Live Site URL: [Rock Paper Scissor](https://geronimo-rockpaperscissor.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- JavaScript

### What I learned

DOM Manipulation

```js
  chooseWeapon.style.display = "none";
  battleScene.style.display = "grid";
  yourChoice.setAttribute("src", weapon.imageUrl);
  results.style.display = "none";
  ripple.classList.add(weapon.color);
  randomChoosing.style.animation = "choosing 2s";
```

The use of Session Storage

```js
  sessionStorage.setItem("human", Number(0));
  sessionStorage.setItem("tries", Number(0));
```

## Author

- Website - [John Paulo Geronimo](http://johnpaulogeronimo.vercel.app/)
- Frontend Mentor - [@geronimium-gr](https://www.frontendmentor.io/profile/geronimium-gr)

## Acknowledgments
- [John Paul Pineda](https://github.com/ijohnpaul2000) - for the help in UI.
