// eslint-disable-next-line
export const createSeasonList = (episodeDetails) => {
  const homePage = document.querySelector('.home-page');
  if (homePage.childNodes.length > 0) {
    homePage.innerHTML = '';
  }
  episodeDetails.forEach((episodeDetail) => {
    const episodeTile = document.createElement('div');
    episodeTile.classList.add('episode-tile');
    episodeTile.dataset.episodeId = episodeDetail.id;
    episodeTile.innerHTML = `
    <img class="episode-image" src="${episodeDetail.image.medium}" alt="episode image">
    <h3 class="episode-number">Episode: ${episodeDetail.number}</h3>
    <button id="main-comment-popup" type="button">Comments</button>`;
    homePage.appendChild(episodeTile);
  });
};