import { createPopup, updatePopupComments } from './DOMfunctions.js';

const appId = '/B6a2ll1hsjifFXa5Lo8D';
const addCommentURL = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps${appId}/comments`;

export const fetchComments = async (episodeId) => {
  let comments = [];
  const fetchCommentUrl = `${addCommentURL}?item_id=${episodeId}`;
  const commentResponse = await fetch(fetchCommentUrl);
  if (commentResponse.status === 200) {
    comments = [...await commentResponse.json()];
    updatePopupComments(comments);
  }
};

export const fetchEpisode = async (episodeId) => {
  const tvResponse = await fetch(`https://api.tvmaze.com/episodes/${episodeId}`);
  if (tvResponse.status === 200) {
    const epiDetails = await tvResponse.json();
    createPopup(epiDetails);
    fetchComments(episodeId);
  }
};
