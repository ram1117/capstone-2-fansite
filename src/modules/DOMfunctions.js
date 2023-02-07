export const showErrorMsg = (msg) => {
  const errorDiv = document.createElement('h5');
  errorDiv.textContent = msg;
  document.body.appendChild(errorDiv);
};

export const updatePopupComments = (comments) =>{
  const cmtContainer = document.querySelector('.comments-container');
  while(cmtContainer.firstChild){
    cmtContainer.removeChild(cmtContainer.firstChild);
  }
  comments.forEach((comment) => {
    cmtContainer.appendChild(createCommentChild(comment));
  });
}

const createCommentChild = (comment) => {
  const commentLine = document.createElement('div');
  commentLine.classList.add('comment-line');
  const commentDate = document.createElement('p');
  commentDate.classList.add('comment-date');
  commentDate.textContent = comment.creation_date;

  const commentUser = document.createElement('p');
  commentUser.classList.add('comment-user');
  commentUser.textContent = comment.username;

  const commentText = document.createElement('p');
  commentText.classList.add('comment-text');
  commentText.textContent = comment.comment;

  commentLine.appendChild(commentDate);
  commentLine.appendChild(commentUser);
  commentLine.appendChild(commentText);

  return commentLine;
};

const dismissPopup =(popupElement)=>{
  document.body.removeChild(popupElement);
}

export const createPopup = (epiDetails, comments) => {
  const popupWrapper = document.createElement('div');
  popupWrapper.classList.add('popup-wrapper');
  const popup = document.createElement('div');
  popup.classList.add('popup');

  const closeButton = document.createElement('i');
  closeButton.classList.add('fa', 'fa-close');
  closeButton.id = 'close-button';
  closeButton.onclick = () => {
    dismissPopup(popupWrapper);
  };

  const mainImg = document.createElement('img');
  mainImg.classList.add('episode-img');
  mainImg.src = epiDetails.image.original;
  mainImg.alt = 'Image from the episode';

  const epiHeader = document.createElement('h2');
  epiHeader.classList.add('episode-header');
  epiHeader.textContent = epiDetails.name;

  const epiDetailsWrapper = document.createElement('div');
  epiDetailsWrapper.classList.add('episode-details-wrapper');

  const rating = document.createElement('p');
  rating.textContent = `Rating: ${epiDetails.rating.average}`;

  const airDate = document.createElement('p');
  airDate.textContent = `Aired Date: ${epiDetails.airdate}`;

  const seasonNo = document.createElement('p');
  seasonNo.textContent = `Season: ${epiDetails.season}`;

  const episodeLink = document.createElement('a');
  episodeLink.textContent = 'Episode Link';
  episodeLink.href = epiDetails.url;
  episodeLink.target = '_blank';

  epiDetailsWrapper.appendChild(rating);
  epiDetailsWrapper.appendChild(airDate);
  epiDetailsWrapper.appendChild(seasonNo);
  epiDetailsWrapper.appendChild(episodeLink);

  const commentsHeader = document.createElement('h3');
  commentsHeader.classList.add('comments-header');
  commentsHeader.textContent = 'Comments';
  const commentsCounter = document.createElement('span');
  commentsCounter.classList.add('comments-count');
  commentsCounter.textContent = '(0)';
  commentsHeader.appendChild(commentsCounter);

  const commentsContainer = document.createElement('div');
  commentsContainer.classList.add('comments-container');

  const formHeader = document.createElement('h3');
  formHeader.classList.add('form-header');
  formHeader.textContent = 'Add a comment';

  const commentForm = document.createElement('form');
  commentForm.id = 'comments-form';
  commentForm.action = 'post';

  commentForm.innerHTML = `<label class="form-label" for="name">Name</label>
  <input id="name" class="form-input" type="text" placeholder="Your Name..." required>
  <label class="form-label" for="comment">Comment</label>
  <textarea id="comment" class="form-input" type="text" placeholder="Your Insights..." rows="5" required></textarea>
  <label class="form-label" for="submitbtn">Submit</label>      
  <button id="submitbtn" class="formsubmit-btn" type="submit">Comment</button>`;

  popup.appendChild(closeButton);
  popup.appendChild(mainImg);
  popup.appendChild(epiHeader);
  popup.appendChild(epiDetailsWrapper);
  popup.appendChild(commentsHeader);
  popup.appendChild(commentsContainer);
  popup.appendChild(formHeader);
  popup.appendChild(commentForm);

  popupWrapper.appendChild(popup);
  document.body.appendChild(popupWrapper);
};