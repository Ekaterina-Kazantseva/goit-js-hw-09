import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const btnStart = document.querySelector('[data-start]');
const DayValue = document.querySelector('[data-days]');
const HoursValue = document.querySelector('[data-hours]');
const MinuteValue = document.querySelector('[data-minutes]');
const SecondValue = document.querySelector('[data-seconds]');

let selectTime = 0;
let intervalID = null;

btnStart.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    selectTime = selectedDates[0].getTime();
    if (selectTime > Date.now()) {
      Notify.info('Push on Start');
      btnStart.disabled = false;
    } else {
      Notify.failure('Please choose a date in the future');
    }
  },
};

flatpickr('#datetime-picker', options);

btnStart.addEventListener('click', onBtnStartClick);

function onBtnStartClick() {
  Notify.success('Timer start');
  intervalID = setInterval(() => {
    if (selectTime >= Date.now()) {
      const timerIndicator = selectTime - Date.now();
      const { days, hours, minutes, seconds } = convertMs(timerIndicator);
      // console.log('~ Time for end', `${days}:${hours}:${minutes}:${seconds}`);
      DayValue.textContent = days;
      HoursValue.textContent = hours;
      MinuteValue.textContent = minutes;
      SecondValue.textContent = seconds;
    } else {
      Notify.info('Time is up');
      clearInterval(intervalID);
    }
  }, 500);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}