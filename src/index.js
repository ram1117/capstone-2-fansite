import {
  fetchEpisode, fetchSeason, fetchLike, postNewLike,
} from './modules/APIfunctions.js';
import './style.css';

const seasons = ['130070', '58465', '58464'];
window.onload = () => {
  fetchSeason(seasons[0]);
  fetchLike();
};

const seasonbtn1 = document.querySelector('#season-1');
seasonbtn1.onclick = () => {
  fetchSeason(seasons[0]);
  fetchLike();
};

const seasonbtn2 = document.querySelector('#season-2');
seasonbtn2.onclick = () => {
  fetchSeason(seasons[1]);
  fetchLike();
};

const seasonbtn3 = document.querySelector('#season-3');
seasonbtn3.onclick = () => {
  fetchSeason(seasons[2]);
  fetchLike();
};

const episodesContainer = document.querySelector('.home-page');
episodesContainer.onclick = (event) => {
  if (event.target.id === 'main-comment-popup') {
    const { episodeId } = event.target.parentNode.dataset;
    fetchEpisode(episodeId);
  }
  if (event.target.id === 'heart-button') {
    const button = event.target;
    button.classList.toggle('heart-animation');
    const { episodeId } = event.target.dataset;
    postNewLike(episodeId);
    setTimeout(() => {
      button.classList.toggle('heart-animation');
    }, 2500);
  }
};
