import createHTMLElement from './createHTMLelement.js';

export default async () => {
  const gameId = localStorage.getItem('storedgame');
  if (gameId) {
    const scoreContainer = document.querySelector('.score-list');
    const response = await fetch(
      `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores`,
    );
    const result = await response.json();
    scoreContainer.innerHTML = '';
    result.result.forEach((score) => {
      createHTMLElement(
        'li',
        'play-score',
        'player-score',
        `${score.user}: ${score.score}`,
        scoreContainer,
      );
    });
  }
};