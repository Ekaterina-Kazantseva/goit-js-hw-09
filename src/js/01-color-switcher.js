function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector('body');
const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');

let timerID = null;

btnStart.addEventListener('click', onBtnStartClick);
btnStop.addEventListener('click', onBtnStopClick);

function onBtnStartClick() {
    btnStart.disabled = true;
    btnStop.disabled = false;

    console.log('Start!');

    bodyEl.style.backgroundColor = getRandomHexColor();
    timerID = setInterval(() => {
        bodyEl.style.backgroundColor = getRandomHexColor();
    }, 1500);
}

function onBtnStopClick() {
    btnStart.disabled = false;
    btnStop.disabled = true;

    clearInterval(timerID);

    console.log('Stop!');
}


