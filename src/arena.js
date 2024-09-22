const Logger = require('./logger');

/**
 * Class representing the arena where players fight matches.
 * @param {Player} player1 - The first player.
 * @param {Player} player2 - The second player.
 */

class Arena {

  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
  }

  /**
   * Start the fight between the two players.
   * The player with the lower health attacks first.
   * The fight continues until one player's health reaches 0.
   * Logs the start of the match, each turn's result, and the end of the match.
   */
  
  startFight() {
    let attacker, defender;

    if (this.player1.health < this.player2.health) {
      attacker = this.player1;
      defender = this.player2;
    } else {
      attacker = this.player2;
      defender = this.player1;
    }

    Logger.logMatchStart(attacker, defender);

    while (this.player1.isAlive() && this.player2.isAlive()) {
      const result = attacker.attackOpponent(defender);
      Logger.logTurnResult(result);

      [attacker, defender] = [defender, attacker];
    }

    const winner = attacker.isAlive() ? attacker.name : defender.name;
    Logger.logMatchEnd(winner);
  }
}

module.exports = Arena;
