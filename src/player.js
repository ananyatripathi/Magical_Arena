/**
 * Class representing a player in the arena.
 */
class Player {
    /**
     * Create a player.
     * @param {string} options.name - The name of the player.
     * @param {number} options.health - The health of the player.
     * @param {number} options.strength - The strength of the player.
     * @param {number} options.attack - The attack value of the player.
     */
    constructor({ name, health, strength, attack }) {
      this.name = name;
      this.health = health;
      this.strength = strength;
      this.attack = attack;
    }
  
    /**
     * Check if the player is still alive.
     * @returns {boolean} True if the player's health is greater than 0, otherwise false.
     */
    isAlive() {
      return this.health > 0;
    }
  
    /**
     * Roll a 6-sided dice.
     * @returns {number} The result of the dice roll (1-6).
     */
    rollDice() {
      return Math.floor(Math.random() * 6) + 1;
    }
  
    /**
     * Attack an opponent player.
     * The attack damage is calculated as the product of the attacker's attack value and the dice roll.
     * The defense damage is calculated as the product of the defender's strength value and the dice roll.
     * The defender's health is reduced by the net damage if it is positive.
     * @param {Player} opponent - The opponent player.
     * @returns {Object} The result of the attack.
     * @returns {string} result.attacker - The name of the attacker.
     * @returns {number} result.attackRoll - The attack roll value.
     * @returns {number} result.attackDamage - The attack damage value.
     * @returns {string} result.defender - The name of the defender.
     * @returns {number} result.defenseRoll - The defense roll value.
     * @returns {number} result.defenseDamage - The defense damage value.
     * @returns {number} result.netDamage - The net damage value.
     * @returns {number} result.defenderHealth - The defender's remaining health.
     */
    attackOpponent(opponent) {
      const attackRoll = this.rollDice();
      const defenseRoll = opponent.rollDice();
      
      const attackDamage = this.attack * attackRoll;
      const defenseDamage = opponent.strength * defenseRoll;
      
      const netDamage = attackDamage - defenseDamage;
      
      if (netDamage > 0) {
        opponent.health -= netDamage;
      }
      
      return {
        attacker: this.name,
        attackRoll,
        attackDamage,
        defender: opponent.name,
        defenseRoll,
        defenseDamage,
        netDamage,
        defenderHealth: opponent.health
      };
    }
  }
  
  module.exports = Player;
  