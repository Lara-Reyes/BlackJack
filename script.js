let cards = [];
let sum = 0;
let numberOfAces = 0;

let hasBlackJack = false;
let isAlive = false;

let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");
let cardEl = document.querySelector("#cards-el");
let startEl = document.querySelector("#startGame");
let playerEl = document.querySelector("#player-el");

function getRandomCard(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function startGame() {
  hasBlackJack = false;
  isAlive = true;
  let firstCard = getRandomCard(2, 11);
  let secondCard = getRandomCard(2, 11);
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  messageEl.classList.remove("message-blackjack");
  messageEl.classList.remove("message-out");
  renderGame();
}

function renderGame() {
  let cardsText = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    if (cards[i] === 11) {
      cardsText += "11 ";
    } else {
      cardsText += cards[i] + " ";
    }
  }
  cardEl.textContent = cardsText;

  if (sum < 21) {
    message = "Do you want to draw a new card? (●'◡'●)";
  } else if (sum === 21) {
    message = "You've got BlackJack q(≧▽≦q)";
    hasBlackJack = true;
    messageEl.classList.add("message-blackjack");
  } else {
    let numberOfAces = cards.filter((card) => card === 11).length;
    while (sum > 21 && numberOfAces > 0) {
      sum -= 10;
      numberOfAces--;
      cards.splice(cards.indexOf(11), 1, 1);
    }
    if (sum > 21) {
      message = "You're out of the game! (┬┬﹏┬┬)";
      isAlive = false;
      messageEl.classList.add("message-out");
    }
  }

  sumEl.textContent = "Sum: " + sum;

  if (!isAlive) {
    startEl.textContent = "Play again";
  } else {
    startEl.textContent = "Start game";
  }
  messageEl.textContent = message;
}

function newCard() {
  if (isAlive && !hasBlackJack) {
    let nextCard = getRandomCard(2, 11);
    if (nextCard === 11) {
      numberOfAces++;
    }
    sum += nextCard;
    cards.push(nextCard);
    cardEl.textContent += " " + nextCard;
    renderGame();
  }
}