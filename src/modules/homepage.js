// eslint-disable-next-line
export const createSeasonList = (episodeDetails) => {
  const homePage = document.querySelector('.home-page');
  while (homePage.lastChild) {
    homePage.removeChild(homePage.lastChild);
  }
  episodeDetails.forEach((episodeDetail) => {
    const episodeTile = document.createElement('div');
    episodeTile.classList.add('episode-tile');
    episodeTile.id = episodeDetail.id;
    episodeTile.dataset.episodeId = episodeDetail.id;
    episodeTile.innerHTML = `
    <img class="episode-image" src="${episodeDetail.image.medium}" alt="episode image">
    <div class="header-wrapper">
    <h3 class="episode-name">${episodeDetail.name}</h3>
    <div class="likes-wrapper">
    <p><i class="fa fa-heart" id="heart-button" data-episode-Id=${episodeDetail.id}></i></p>
    <p class="likes-text">Likes:<span class="likes-counter">(0)</span></p>
    </div>
    </div>
    <button id="main-comment-popup" type="button">Comments</button>`;
    homePage.appendChild(episodeTile);
  });
};
export const displayLikes = (likes) => {
  likes.forEach((like) => {
    const tile = document.getElementById(like.item_id);
    if (tile !== null) {
      const likeCounter = tile.querySelector('.likes-counter');
      likeCounter.textContent = `(${like.likes})`;
    }
  });
};