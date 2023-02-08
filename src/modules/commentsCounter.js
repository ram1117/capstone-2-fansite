const countComments = (comments) => {
  const counterElement = document.querySelector('.comments-count');
  let count = 0;
  comments.forEach(() => { count += 1; });
  counterElement.textContent = `(${count})`;
};
export default countComments;
