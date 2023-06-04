const startBtnEL = document.querySelector('button[data-start]');
const stopBtnEL = document.querySelector('button[data-stop]');
const bodyEl = document.body;

const COLOR_DELAY = 1000;
let timerId = null;

startBtnEL.addEventListener('click', evt => {
  evt.stopPropagation();
  startBtnEL.disabled = true;
  timerId = setInterval(() => {
    const randomColor = getRandomHexColor();
    bodyEl.style.backgroundColor = randomColor;
  }, COLOR_DELAY);
});

stopBtnEL.addEventListener('click', evt => {
  evt.stopPropagation();
  clearInterval(timerId);
  startBtnEL.disabled = false;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
