import countEpisodes from "../modules/episodeCounter.js";

//homepage with no elements
const div1 = document.createElement('div');
div1.classList.add('home-page');

//homepage with 9 elements
const div2 = document.createElement('div');
div2.classList.add('home-page');
for (let i = 1; i < 10; i += 1) {
  const div = document.createElement('div');
  div.id = i;
  div2.appendChild(div);
}

//homepage with 9999 elements
const div3 = document.createElement('div');
div3.classList.add('home-page');
for (let i = 1; i < 10000; i += 1) {
  const div = document.createElement('div');
  div.id = i;
  div3.appendChild(div);
}

describe.each([[div1, '(0)'], [div2, '(9)'], [div3, '(9999)']])(
  'Testing episode counter: ', (mainPage, expected) => {
    document.body.innerHTML = `<span class="epi-counter"></span>`;
    document.body.appendChild(mainPage);
    const counter = document.body.querySelector('.epi-counter');
    countEpisodes(counter);
    test(`testing with ${mainPage.childNodes.length} items in main page:`,
      () => {
        expect(counter.textContent).toBe(expected);
      }
    );
  }
);
