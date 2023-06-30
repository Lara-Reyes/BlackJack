# Blackjack Game

This is a simple implementation of the Blackjack game in JavaScript. The game allows players to draw cards and calculates the sum of the cards drawn. The goal is to get as close to 21 as possible without exceeding it.

## How to Play

1. Open the `index.html` file in your preferred web browser.
2. Click on the "Start Game" button to begin.
3. The game will deal two cards for the player.
4. Choose whether to draw an additional card to increase your score or hold your current hand.
5. If the sum of your cards exceeds 21, you lose the game.
6. If the sum of your cards is exactly 21, you win with a Blackjack.
7. The game provides feedback messages based on your current status.

## Code Overview

The code is written in JavaScript and uses HTML and CSS for the user interface. Here's an overview of the key components:

- `startGame()`: Initializes the game state and deals the initial two cards.
- `getRandomCard()`: Generates a random card value between 2 and 11, representing the numbered cards and face cards in a deck.
- `renderGame()`: Updates the UI to display the current game state, including the cards drawn, the sum of the cards, and the feedback message.
- `newCard()`: Draws an additional card and updates the game state accordingly.

Feel free to explore the code to understand the logic behind the game and make any modifications or improvements you desire.
