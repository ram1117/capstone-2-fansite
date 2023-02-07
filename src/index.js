import { fetchSeason } from './modules/APIfunctions';
import { fetchEpisode } from './modules/APIfunctions.js';
import './style.css';

window.onload = () => {
  fetchSeason('1087');
};

const seasonbtn1 = document.querySelector('#season-1');
seasonbtn1.onclick = () => {
  fetchSeason('1087');
};

const seasonbtn2 = document.querySelector('#season-2');
seasonbtn2.onclick = () => {
  fetchSeason('1088');
};

const seasonbtn3 = document.querySelector('#season-3');
seasonbtn3.onclick = () => {
  fetchSeason('31802');
};

/* TODO update below to add event listener to episode button */
const testBtn = document.querySelector('#test-button');
testBtn.onclick = () => {
  fetchEpisode('2300603');
  // fetchEpisode('00');
};

