const Player = require('../src/player');
const Arena = require('../src/arena');

describe('Arena', () => {
  // Mocking dice rolls
  const mockDiceRolls = [3, 2, 4, 1];
  let rollIndex = 0;

  // Mock the rollDice method to return deterministic values
  jest.spyOn(Player.prototype, 'rollDice').mockImplementation(() => {
    const roll = mockDiceRolls[rollIndex];
    rollIndex = (rollIndex + 1) % mockDiceRolls.length; // Loop through mock values
    return roll;
  });

  const player1 = new Player({
    name: 'Player A',
    health: 500,
    strength: 50,
    attack: 100
  });

  const player2 = new Player({
    name: 'Player B',
    health: 1000,
    strength: 100,
    attack: 50
  });

  const arena = new Arena(player1, player2);
  
  test('should simulate a fight between two players', () => {
    arena.startFight();
    expect(player1.isAlive()).toBe(false); 
    expect(player2.isAlive()).toBe(true);
  });

  test('should initialize players correctly', () => {
    expect(arena.player1.name).toBe('Player A');
    expect(arena.player2.name).toBe('Player B');
  });
  
  // Clear mock implementation after tests
  afterEach(() => {
    jest.restoreAllMocks();
  });
});
