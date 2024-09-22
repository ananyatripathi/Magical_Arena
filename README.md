# Magical Arena

## Description
Magical Arena is an implementation where players battle each other using health, strength, and attack attributes. The game ends when one player's health reaches 0.

## How to Run

1. Navigate to the project directory: `Magical_Arena`
2. Install dependencies: `npm install`
3. Run the game: `npm start`
4. Run tests: `npx jest`

## Customizing Player Attributes

You can customize the attributes (health, strength, and attack) of the players in the `main.js` file before starting the game. Simply adjust the values passed to the `Player` constructor for each player instance.

## Classes

### Player
- `name`: Player's name
- `health`: Player's health attribute
- `strength`: Player's strength attribute
- `attack`: Player's attack attribute
- `isAlive()`: Checks if the player is alive
- `rollDice()`: Rolls a 6-sided dice
- `attackOpponent(opponent)`: Attacks the opponent

### Arena
- `startFight()`: Starts a fight between two players until one dies

### Logger
The Logger class handles logging messages related to the game's progress. It provides methods to log the start of a match, turn results during the match, and the end of the match with the winner.

## Example
To see the game in action, run `npm start` after following the above steps.

## Unit Tests
Unit tests are implemented using Jest. To run the tests: `npx jest`
