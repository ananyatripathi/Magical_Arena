const Player = require('./player');
const Arena = require('./arena');

/**
 * Main function to set up players and start the fight.
 */
const main = () => {
  const playerA = new Player({ name: "Player A", health: 50, strength: 5, attack: 10 });
  const playerB = new Player({ name: "Player B", health: 100, strength: 10, attack: 5 });

  const arena = new Arena(playerA, playerB);
  arena.startFight();
};

// Start the main function
main();
