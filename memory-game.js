"use strict";

/** Memory game: find matching pairs of cards and flip both of them. */

const FOUND_MATCH_WAIT_MSECS = 1000;
const COLORS = [
  "pink", "deepskyblue", "aquamarine", "coral", "darkorchid",
  "pink", "deepskyblue", "aquamarine", "coral", "darkorchid",
];

const colors = shuffle(COLORS);

createCards(colors);

/** Shuffle array items in-place and return shuffled array. */

function shuffle(items) {
  // This algorithm does a "perfect shuffle", where there won't be any
  // statistical bias in the shuffle (many naive attempts to shuffle end up not
  // be a fair shuffle). This is called the Fisher-Yates shuffle algorithm; if
  // you're interested, you can learn about it, but it's not important.

  for (let i = items.length - 1; i > 0; i--) {
    // generate a random index between 0 and i
    let j = Math.floor(Math.random() * i);
    // swap item at i <-> item at j
    [items[i], items[j]] = [items[j], items[i]];
  }

  return items;
}

/** Create card for every color in colors (each will appear twice)
 *
 * Each div DOM element will have:
 * - a class with the value of the color
 * - an click listener for each card to handleCardClick
 */

function createCards(colors) {
  const gameBoard = document.getElementById("game");

  for (let color of colors) {
    // missing code here ...
    const newCard= document.createElement("div");
    newCard.setAttribute("class", color);
    gameBoard.appendChild(newCard);
    gameBoard.addEventListener("click", handleCardClick,1000);
  }
}

/** Flip a card face-up. */

function flipCard(card) {
  // ... you need to write this ...
  card.style.backgroundColor=card.className;
}

/** Flip a card face-down. */

function unFlipCard(card) {
  // ... you need to write this ...
  card.style.backgroundColor="white"
}

/** Handle clicking on a card: this could be first-card or second-card. */

function handleCardClick(evt) {
  const clickedCard=evt.target;
  if (clickedCard.className!="" && (firstCard===null || secondCard===null)){
    if (firstCard===null && clickedCard.child===undefined){
      flipCard(clickedCard);
      firstCard=clickedCard;
    } else if (secondCard===null && firstCard!=clickedCard && clickedCard.child===undefined){
      flipCard(clickedCard);
      secondCard=clickedCard;
      compareCards(firstCard, secondCard);
    }
  } else if (clickedCard.className!="" && (firstCard!=null || secondCard!=null)){
    alert("YOU'RE CLICKING TOO FAST CHEATER! ONLY 2 CARDS AT A TIME")
  }
}

function compareCards(card1, card2){
  if (card1.className!=card2.className){
    setTimeout(unFlipCard,1000,card1);
    setTimeout(unFlipCard,1000,card2);
    setTimeout(function(){
      firstCard=null;
      secondCard=null;
    },1000);
  } else {
    firstCard=null;
    secondCard=null;
  }
}

let firstCard=null;
let secondCard=null;

