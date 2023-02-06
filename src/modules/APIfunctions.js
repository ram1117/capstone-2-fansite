import { createPopup } from './DOMfunctions';
// eslint-disable-next-line import/prefer-default-export
export const fetchEpisode = async (episodeId) => {
  const epiDetails = await fetch(`https://api.tvmaze.com/episodes/${episodeId}`).then((response) => response.json());
  createPopup(epiDetails);
};
