const countEpisodes = (counterElement:HTMLElement) => {
  const homepage = document.querySelector('.home-page');
  counterElement.textContent = `(${homepage.childNodes.length})`;
};
export default countEpisodes;