import commentsCounter from '../modules/commentsCounter.js';

const div1 = document.createElement('div');
div1.classList.add('popup-comments-container');

const div2 = document.createElement('div');
div2.classList.add('popup-comments-container');
for (let i = 1; i < 10; i += 1) {
  const div = document.createElement('div');
  div2.appendChild(div);
}

const div3 = document.createElement('div');
div3.classList.add('popup-comments-container');
for (let i = 1; i < 10000; i += 1) {
  const div = document.createElement('div');
  div3.appendChild(div);
}

test(`testing counter for ${div1.childNodes.length} items`, () => {
  document.body.innerHTML = '<span class="comments-count"></span>';
  document.body.appendChild(div1);
  commentsCounter();
  const spanEl = document.body.querySelector('.comments-count');
  expect(spanEl.innerHTML).toBe('(0)');
});

test(`testing counter for ${div2.childNodes.length} items`, () => {
  document.body.innerHTML = '<span class="comments-count"></span>';
  document.body.appendChild(div2);
  commentsCounter();
  const spanEl = document.body.querySelector('.comments-count');
  expect(spanEl.innerHTML).toBe('(9)');
});

test(`testing counter for ${div3.childNodes.length} items`, () => {
  document.body.innerHTML = '<span class="comments-count"></span>';
  document.body.appendChild(div3);
  commentsCounter();
  const spanEl = document.body.querySelector('.comments-count');
  expect(spanEl.innerHTML).toBe('(9999)');
});
