import { fetchEpisode, fetchSeason } from './modules/APIfunctions.js';
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

const episodesContainer = document.querySelector('.home-page');
episodesContainer.onclick = (event) => {
  if (event.target.id === 'main-comment-popup') {
    const { episodeId } = event.target.parentNode.dataset;
    fetchEpisode(episodeId);
  }
};
