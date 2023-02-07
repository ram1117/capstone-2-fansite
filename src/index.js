import { fetchEpisode } from './modules/APIfunctions.js';
import './style.css';

/* TODO update below to add event listener to episode button */
const testBtn = document.querySelector('#test-button');
testBtn.onclick = () => {
  fetchEpisode('2300603');
  // fetchEpisode('00');
};
