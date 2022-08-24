const startBtnEl = document.querySelector('[data-start]');
const stopBtnEl = document.querySelector('[data-stop]');

startBtnEl.addEventListener('click', onStartBtnClick);
stopBtnEl.addEventListener('click', onStopBtnClick);

let colorIntervalId = null;

function onStartBtnClick(e) {
  colorIntervalId = setInterval(changeBgColor, 1000);
  e.target.disabled = true;
  stopBtnEl.disabled = false;
}

function onStopBtnClick(e) {
  clearInterval(colorIntervalId);
  e.target.disabled = true;
  startBtnEl.disabled = false;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeBgColor() {
  document.body.style.backgroundColor = getRandomHexColor();
}
