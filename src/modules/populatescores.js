import createHTMLElement from './createHTMLelement.js';
import gamescores from './scores.js';

const playerScores = gamescores.GET();
const scorecontainer = document.querySelector('.scores-list');
export default () => {
  scorecontainer.innerHTML = '';
  playerScores.forEach((score) => {
    createHTMLElement(
      'li',
      'play-score',
      'player-score',
      `${score.player}: ${score.score}`,
      scorecontainer,
    );
  });
};