import './index.css';
import populateScores from './modules/populatescores.js';
import createGame from './modules/creategame.js';
import addScoresToAPI from './modules/Addscores.js';

window.onload = () => {
  const addscore = document.querySelector('.submit-button');
  const refreshButton = document.querySelector('.refresh-button');
  populateScores();

  if (!localStorage.getItem('storedgame')) {
    createGame();
  }
  addscore.addEventListener('click', (e) => {
    const playerName = document.querySelector('.player-name');
    const thescore = document.querySelector('.player-score');
    const gameId = localStorage.getItem('storedgame');
    addScoresToAPI(playerName.value, thescore.value, gameId);
    e.preventDefault();
  });

  refreshButton.addEventListener('click', (e) => {
    populateScores();
    e.preventDefault();
  });
};