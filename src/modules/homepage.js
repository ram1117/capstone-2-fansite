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
    <h3 class="episode-name">${episodeDetail.name}</h3>
    <button id="like-button">Like button</button>
    <p class="likes-count"></p>
    <button id="main-comment-popup" type="button">Comments</button>`;
    homePage.appendChild(episodeTile);
  });
};
export const displayLikes = (likes) => {
  const display = document.querySelector('.likes-count');
  likes.forEach((like) => {
    display.textContent = `Likes: ${like.likes}`;
  });
};