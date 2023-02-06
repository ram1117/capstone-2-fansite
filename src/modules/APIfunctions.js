import { createPopup, showErrorMsg } from './DOMfunctions';

const appId = '/B6a2ll1hsjifFXa5Lo8D';
const addCommentURL = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps${appId}/comments`;

// eslint-disable-next-line import/prefer-default-export
export const fetchEpisode = async (episodeId) => {
  let comments = [];
  const fetchCommentUrl = `${addCommentURL}?item_id=${episodeId}`;
  const commentResponse = await fetch(fetchCommentUrl);
  if (commentResponse.status === 200) {
    comments = [...await commentResponse.json()];
  }

  const tvResponse = await fetch(`https://api.tvmaze.com/episodes/${episodeId}`);
  if (tvResponse.status === 200) {
    const epiDetails = await tvResponse.json();
    createPopup(epiDetails, comments);
  } else {
    showErrorMsg(tvResponse.status);
  }
};
