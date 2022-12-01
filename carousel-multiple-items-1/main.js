const rightArrow = document.querySelector('.fa-chevron-right');
const dotContEl = document.querySelector('.dots'); // dot container
const iElements = document.querySelectorAll('.fa-circle'); // all dots NodeList
const imgEls = document.querySelectorAll('.img'); // img node list
const lefttArrow = document.querySelector('.fa-chevron-left');
let currentIndex = 0;
const length = imgEls.length;
let intervalId = null;

console.log('imgEls', imgEls);
console.log('lefttArrow', lefttArrow);
console.log('length', length);

lefttArrow.addEventListener('click', prev);
rightArrow.addEventListener('click', next);
dotContEl.addEventListener('click', clickOnDot);

function prev(e) {
  // when currentIndex becomes 0, jump back to finish
  // clear interval
  console.log('e', e.target);

  clearInterval(intervalId);
  if (currentIndex === 0) {
    imgEls[currentIndex].className = 'img display-none';
    imgEls[imgEls.length - 1].className = 'img';
    iElements[currentIndex].className = 'fa-solid fa-circle';
    iElements[length - 1].className = 'fa-solid fa-circle current';
    currentIndex = length - 1;
  } else {
    // continue to step left (decrease current index)
    imgEls[currentIndex].className = 'img display-none';
    imgEls[currentIndex - 1].className = 'img';
    iElements[currentIndex].className = 'fa-solid fa-circle';
    iElements[currentIndex - 1].className = 'fa-solid fa-circle current';
    currentIndex--;
  }
  console.log(currentIndex);
  // set up a new one
  intervalId = setInterval(next, 3000);
}

// 0 1 2 3 4 -> index
// 1 2 3 4 5 -> length
function next(event) {
  clearInterval(intervalId);
  if (currentIndex === length - 1) {
    // jump back to 0
    imgEls[currentIndex].className = 'img display-none';
    imgEls[0].className = 'img';
    iElements[currentIndex].className = 'fa-solid fa-circle';
    iElements[0].className = 'fa-solid fa-circle current';
    currentIndex = 0;
  } else {
    // next image
    imgEls[currentIndex].className = 'img display-none';
    imgEls[currentIndex + 1].className = 'img';
    iElements[currentIndex].className = 'fa-solid fa-circle';
    iElements[currentIndex + 1].className = 'fa-solid fa-circle current';
    currentIndex++;
  }
  intervalId = setInterval(next, 3000);
}

function clickOnDot(event) {
  if (event.target.tagName === 'I') {
    // clear interval
    clearInterval(intervalId);
    var buttonId = event.target.getAttribute('data-icon'); // 1-12; id of i el
    var newIndex = buttonId - 1;
    imgEls[currentIndex].className = 'img display-none';
    imgEls[newIndex].className = 'img';
    iElements[currentIndex].className = 'fa-solid fa-circle';
    iElements[newIndex].className = 'fa-solid fa-circle current';
    currentIndex = newIndex;
  }
  // set up a new one
  intervalId = setInterval(next, 3000);
}

intervalId = setInterval(next, 3000);
