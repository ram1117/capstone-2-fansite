// eslint-disable-next-line
import { postComments } from './APIfunctions';
import countComments from './commentsCounter.js';
import { Comment,Episode } from './types/type';

export const showErrorMsg = (msg: string) => {
  const errorDiv = document.createElement('h5');
  errorDiv.textContent = msg;
  document.body.appendChild(errorDiv);
};

const createCommentChild = (comment: Comment) => {
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

export const updatePopupComments = (comments: Comment[]) => {
  const cmtContainer = document.querySelector('.popup-comments-container');
  while (cmtContainer.firstChild) {
    cmtContainer.removeChild(cmtContainer.firstChild);
  }
  comments.forEach((comment: Comment) => {
    cmtContainer.appendChild(createCommentChild(comment));
  });
  countComments();
};

const dismissPopup = (popupElement: HTMLDivElement) => {
  document.body.removeChild(popupElement);
  document.body.style.overflow = 'auto';
};

const getInputFromForm = (epiId: string) => {
  const { value: nameVal } = document.querySelector(
    '#input-name'
  ) as HTMLInputElement;
  const { value: CmmtVal } = document.querySelector(
    '#input-comment'
  ) as HTMLInputElement;
  postComments({ item_id: epiId, username: nameVal, comment: CmmtVal });
};

export const createPopup = (epiDetails: Episode) => {
  const popupWrapper = document.createElement('div');
  popupWrapper.classList.add('popup-wrapper');
  const popup = document.createElement('div');
  popup.classList.add('popup');
  popup.dataset.episodeId = epiDetails.id;
  popup.style.background = `radial-gradient(rgba(255,255,255, 0.75),
  rgba(209,209,209, 0.75)),url(${epiDetails.image.medium}), 0, 0, no-repeat`;
  popup.style.backgroundSize = 'cover';

  const closeButton = document.createElement('i');
  closeButton.classList.add('fa', 'fa-close');
  closeButton.id = 'close-button';
  closeButton.onclick = () => {
    dismissPopup(popupWrapper);
  };

  const mainImg = document.createElement('img');
  mainImg.classList.add('popup-episode-img');
  mainImg.src = epiDetails.image.original;
  mainImg.alt = 'Image from the episode';

  const epiHeader = document.createElement('h2');
  epiHeader.classList.add('popup-episode-header');
  epiHeader.textContent = epiDetails.name;

  const epiDetailsWrapper = document.createElement('div');
  epiDetailsWrapper.classList.add('popup-episode-details-wrapper');

  const rating = document.createElement('p');
  rating.textContent = `Avg. Rating: ${epiDetails.rating.average}`;

  const airDate = document.createElement('p');
  airDate.textContent = `Aired Date: ${epiDetails.airdate}`;

  const seasonNo = document.createElement('p');
  seasonNo.textContent = `Season: ${epiDetails.season}`;

  const episodeLink = document.createElement('p');
  episodeLink.innerHTML = `More details: <a href=${epiDetails.url} target='_blank'>Link...</a>`;

  epiDetailsWrapper.appendChild(rating);
  epiDetailsWrapper.appendChild(airDate);
  epiDetailsWrapper.appendChild(seasonNo);
  epiDetailsWrapper.appendChild(episodeLink);

  const commentsHeader = document.createElement('h3');
  commentsHeader.classList.add('popup-comments-header');
  commentsHeader.textContent = 'Comments';
  const commentsCounter = document.createElement('span');
  commentsCounter.classList.add('comments-count');
  commentsCounter.textContent = '(0)';
  commentsHeader.appendChild(commentsCounter);

  const commentsContainer = document.createElement('div');
  commentsContainer.classList.add('popup-comments-container');

  const formHeader = document.createElement('h3');
  formHeader.classList.add('popup-form-header');
  formHeader.textContent = 'Add a comment';

  const commentForm = document.createElement('form');
  commentForm.id = 'popup-comments-form';
  commentForm.action = 'post';

  commentForm.innerHTML = `<label class="form-label" for="name">Name</label>
  <input id="input-name" class="form-input" type="text" placeholder="Your Name..." required>
  <label class="form-label" for="comment">Comment</label>
  <textarea id="input-comment" class="form-input" type="text" placeholder="Your Insights..." rows="3" required></textarea>
  <label class="form-label" for="submitbtn">Submit</label>      
  <button id="submitbtn" class="form-input button-style formsubmit-btn" type="submit">Comment</button>`;

  commentForm.onsubmit = (event) => {
    event.preventDefault();
    const parent = commentForm.parentNode as HTMLElement;
    getInputFromForm(parent.dataset.episodeId);
    commentForm.reset();
  };

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
  document.body.style.overflow = 'hidden';
};
