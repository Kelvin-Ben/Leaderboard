import './index.css';
import populateScores from './modules/populatescores.js';
import gamescores from './modules/scores.js';

window.onload = () => {
  const addScore = document.querySelector('.submit-button');
  const refreshButton = document.querySelector('.refresh-button');
  populateScores();

  addScore.addEventListener('click', (e) => {
    e.preventDefault();
    const playerName = document.querySelector('.player-name');
    const theScore = document.querySelector('.player-score');
    gamescores.POST(playerName.value, theScore.value);
    populateScores();
  });

  refreshButton.addEventListener('click', (e) => {
    e.preventDefault();
    populateScores();
  });
};