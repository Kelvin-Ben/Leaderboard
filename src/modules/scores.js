import Score from './score.js';

class Scores {
  constructor() {
    this.scores = [
      {
        player: 'Kelvin Ben',
        score: 90,
      },
    ];
  }

  POST = (player, score) => {
    const playerScore = new Score(player, score);
    this.scores.push(playerScore);
  };

  GET = () => this.scores;
}

const gamescores = new Scores();

export default gamescores;