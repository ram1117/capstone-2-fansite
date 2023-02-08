import commentsCounter from '../modules/commentsCounter.js';

const arr1 = [];
const arr2 = [{ id: 1, comment: `comment no: ${1}` }, { id: 2, comment: `comment no: ${2}` }, { id: 3, comment: `comment no: ${3}` }];
const arr3 = [];
const arr4 = [];
for (let i = 1; i < 100; i++) {
  arr3.push({ id: i, comment: `comment no: ${i}` });
}
for (let i = 1; i < 10000; i++) {
  arr4.push({ id: i, comment: `comment no: ${i}` });
}

describe.each([[arr1, '(0)'], [arr2, '(3)'], [arr3, '(99)'], [arr4, '(9999)']])('testing comments counter function:', (arr, expected) => {
  document.body.innerHTML = '<span class="comments-count"></span>';
  commentsCounter(arr);
  const countElement = document.querySelector('.comments-count');
  test(`testing counter using array with : ${arr.length} items`, () => {
    expect(countElement.innerHTML).toBe(expected);
  });
});