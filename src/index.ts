import {
  fetchEpisode,
  fetchSeason,
  fetchLike,
  postNewLike,
} from './modules/APIfunctions.js';
import countEpisodes from './modules/episodeCounter.js';
import './style.css';

const seasons = ['130070', '58465', '58464'];
const counter1 = document.querySelector('.epi-counter1');
const counter2 = document.querySelector('.epi-counter2');
const counter3 = document.querySelector('.epi-counter3');

window.onload = () => {
  fetchSeason(seasons[0], counter1);
  countEpisodes(counter1);
  fetchLike();
};

const seasonbtn1: HTMLLIElement | null = document.querySelector('#season-1');

seasonbtn1.onclick = () => {
  fetchSeason(seasons[0], counter1);
  fetchLike();
  counter2.textContent = '';
  counter3.textContent = '';
};

const seasonbtn2: HTMLLIElement | null = document.querySelector('#season-2');
seasonbtn2.onclick = () => {
  fetchSeason(seasons[1], counter2);
  fetchLike();
  counter1.textContent = '';
  counter3.textContent = '';
};

const seasonbtn3: HTMLLIElement | null = document.querySelector('#season-3');
seasonbtn3.onclick = () => {
  fetchSeason(seasons[2], counter3);
  fetchLike();
  counter1.textContent = '';
  counter2.textContent = '';
};

const episodesContainer: HTMLDivElement | null =
  document.querySelector('.home-page');
episodesContainer.onclick = (event: Event) => {
  const element = event.target as HTMLElement;
  const parent = element.parentNode as HTMLElement;
  if (element.id === 'main-comment-popup') {
    const { episodeId } = parent.dataset;
    fetchEpisode(episodeId);
  }
  if (element.id === 'heart-button') {
    const button = element;
    button.classList.toggle('heart-animation');
    const { episodeId } = element.dataset;
    postNewLike(episodeId);
    setTimeout(() => {
      button.classList.toggle('heart-animation');
    }, 2500);
  }
};
