class Logger {
    static logMatchStart(player1, player2) {
      console.log(`Match Start: ${player1.name} vs ${player2.name}`);
      console.log(`Initial Stats: 
      ${player1.name} - Health: ${player1.health}, Strength: ${player1.strength}, Attack: ${player1.attack}
      ${player2.name} - Health: ${player2.health}, Strength: ${player2.strength}, Attack: ${player2.attack}`);
      console.log('----------------------------------------');
    }
  
    static logTurnResult(result) {
      const netDamage = result.netDamage > 0 ? result.netDamage : 0;
      console.log(`
  Turn Result:
  Attacker: ${result.attacker}
   - Rolled: ${result.attackRoll}
   - Attack Damage: ${result.attackDamage}
  Defender: ${result.defender}
   - Rolled: ${result.defenseRoll}
   - Defense Damage: ${result.defenseDamage}
  Net Damage: ${netDamage}
  ${result.defender} Health: ${result.defenderHealth}
  ----------------------------------------`);
    }
  
    static logMatchEnd(winner) {
      console.log('----------------------------------------');
      console.log(`Match End: ${winner} wins the fight!`);
    }
  }
  
  module.exports = Logger;
  