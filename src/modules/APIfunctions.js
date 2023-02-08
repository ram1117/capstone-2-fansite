// eslint-disable-next-line
import { createPopup, updatePopupComments } from './DOMfunctions.js';
import { createSeasonList, displayLikes } from './homepage.js';

const appId = '/KKlgY0e6iTLZYxIsAnMC';
const commentURL = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps${appId}/comments`;
const likeURL = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps${appId}/likes`;

export const fetchComments = async (episodeId) => {
  let comments = [];
  const fetchCommentUrl = `${commentURL}?item_id=${episodeId}`;
  const commentResponse = await fetch(fetchCommentUrl);
  if (commentResponse.status === 200) {
    comments = [...await commentResponse.json()];
    updatePopupComments(comments);
  }
};

export const postComments = async (commentObj) => {
  await fetch(commentURL, {
    method: 'POST',
    body: JSON.stringify(commentObj),
    headers: { 'Content-type': 'application/json' },
  });
  fetchComments(commentObj.item_id);
};

export const fetchEpisode = async (episodeId) => {
  const tvResponse = await fetch(`https://api.tvmaze.com/episodes/${episodeId}`);
  if (tvResponse.status === 200) {
    const epiDetails = await tvResponse.json();
    createPopup(epiDetails);
    fetchComments(episodeId);
  }
};

export const fetchSeason = async (seasonId) => {
  const url = `https://api.tvmaze.com/seasons/${seasonId}/episodes`;
  await fetch(url)
    .then((response) => response.json())
    .then((data) => {
      createSeasonList(data);
    })
    .catch((error) => {
      console.error(error);
    });
};

export const fetchLike = async () => {
  let likes = [];
  const likeResponse = await fetch(likeURL);
  if (likeResponse.status === 200) {
    likes = [...await likeResponse.json()];
    displayLikes(likes);
  }
};

export const postNewLike = async (episodeId) => {
  await fetch(likeURL, {
    method: 'POST',
    body: JSON.stringify({ item_id: episodeId }),
    headers: { 'Content-type': 'application/json' },
  });
  fetchLike();
};