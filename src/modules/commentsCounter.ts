const countComments = () => {
  const counterElement: HTMLSpanElement =
    document.querySelector('.comments-count');
  const commentContainer: HTMLDivElement = document.querySelector(
    '.popup-comments-container'
  );
  const comments = commentContainer.childNodes;
  let count: number = 0;
  comments.forEach(() => {
    count += 1;
  });
  counterElement.textContent = `(${count})`;
};
export default countComments;
