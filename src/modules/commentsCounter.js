const countComments = () => {
  const counterElement = document.querySelector('.comments-count');
  const commentContainer = document.querySelector('.popup-comments-container');
  const comments = commentContainer.childNodes;
  let count = 0;
  comments.forEach(() => { count += 1; });
  counterElement.textContent = `(${count})`;
};
export default countComments;
