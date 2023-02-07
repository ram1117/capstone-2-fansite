export const createSeasonList = (episodeDetails) => {

    const homePage = document.querySelector('.home-page');
    if (homePage.childNodes.length > 0) {
        homePage.innerHTML="";
    }
    const episodeList = document.createElement('ul');
    episodeList.classList.add('episode-list');
    
    episodeDetails.forEach((episodeDetail) => {
        if (episodeDetail.number === null){
            episodeDetail.number = "Last";
        }
        episodeList.insertAdjacentHTML('beforeend',
        `<li class="episode-listo">
            <div class="episode-image">
                <img src="${episodeDetail.image.medium}" width="150" 
                height="120" alt="episode image">
            </div>
            <div class="episode-number">
                <h3>Episode: ${episodeDetail.number}</h3>
            </div>
            <div><button>Comments</button></div>
            <div class = "comment-button"><button>Reservations</button></div>
        </li>`);
    });

    homePage.appendChild(episodeList);
};